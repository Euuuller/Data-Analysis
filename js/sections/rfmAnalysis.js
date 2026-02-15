/**
 * RFM Analysis Section
 * Customer segmentation by Recency, Frequency, and Monetary value
 */

import { RFM_SEGMENTS } from '../config/constants.js';
import { formatCurrency, formatNumber } from '../utils/formatters.js';
import { getChartColors, PIE_CHART_CONFIG } from '../config/chartConfig.js';

export class RFMAnalysis {
    constructor() {
        this.container = document.getElementById('main-content');
        this.charts = {};
    }

    async render() {
        this.container.innerHTML = this.template();
        await this.initCharts();
    }

    template() {
        const mockData = this.generateMockRFMData();

        return `
      <section class="section-rfm fade-in">
        <div class="section-header">
          <h1>Análise de Segmentação RFM</h1>
          <p>Segmentação de clientes por Recência, Frequência e Valor Monetário</p>
        </div>

        <div class="rfm-overview">
          <div class="metric-card">
            <div class="metric-label">Champions</div>
            <div class="metric-value">${formatNumber(mockData.segments.champions.count)}</div>
            <div class="metric-change positive">${formatCurrency(mockData.segments.champions.avgValue)}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">At Risk</div>
            <div class="metric-value">${formatNumber(mockData.segments.atRisk.count)}</div>
            <div class="metric-change negative">${formatCurrency(mockData.segments.atRisk.avgValue)}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Loyal</div>
            <div class="metric-value">${formatNumber(mockData.segments.loyal.count)}</div>
            <div class="metric-change positive">${formatCurrency(mockData.segments.loyal.avgValue)}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Lost</div>
            <div class="metric-value">${formatNumber(mockData.segments.lost.count)}</div>
            <div class="metric-change neutral">${formatCurrency(mockData.segments.lost.avgValue)}</div>
          </div>
        </div>

        <div class="rfm-matrix">
          ${this.renderSegmentCards(mockData.segments)}
        </div>

        <div class="charts-grid">
          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Distribuição de Segmentos</h3>
            </div>
            <div class="chart-container">
              <canvas id="rfm-segments-chart"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Receita por Segmento</h3>
            </div>
            <div class="chart-container">
              <canvas id="rfm-revenue-chart"></canvas>
            </div>
          </div>
        </div>

        <div class="rfm-distribution-grid">
          <div class="distribution-chart">
            <h4 class="distribution-title">Distribuição de Recência</h4>
            <canvas id="recency-dist-chart"></canvas>
          </div>
          <div class="distribution-chart">
            <h4 class="distribution-title">Distribuição de Frequência</h4>
            <canvas id="frequency-dist-chart"></canvas>
          </div>
          <div class="distribution-chart">
            <h4 class="distribution-title">Distribuição de Valor Monetário</h4>
            <canvas id="monetary-dist-chart"></canvas>
          </div>
        </div>
      </section>
    `;
    }

    renderSegmentCards(segments) {
        const segmentKeys = ['champions', 'loyal', 'potentialLoyalist', 'recent',
            'promising', 'needAttention', 'aboutToSleep', 'atRisk',
            'cantLose', 'hibernating', 'lost'];

        return segmentKeys.map(key => {
            const segment = segments[key];
            if (!segment) return '';

            const className = key.replace(/([A-Z])/g, '-$1').toLowerCase();

            return `
        <div class="segment-card ${className}">
          <div class="segment-name">${segment.name}</div>
          <div class="segment-count">${formatNumber(segment.count)}</div>
          <div class="segment-value">${formatCurrency(segment.avgValue)} avg</div>
        </div>
      `;
        }).join('');
    }

    async initCharts() {
        const mockData = this.generateMockRFMData();

        // Segments Distribution Chart
        this.charts.segments = new Chart(
            document.getElementById('rfm-segments-chart'),
            {
                type: 'doughnut',
                data: {
                    labels: Object.values(mockData.segments).map(s => s.name),
                    datasets: [{
                        data: Object.values(mockData.segments).map(s => s.count),
                        backgroundColor: getChartColors('MIXED', 11)
                    }]
                },
                options: PIE_CHART_CONFIG
            }
        );

        // Revenue by Segment Chart
        this.charts.revenue = new Chart(
            document.getElementById('rfm-revenue-chart'),
            {
                type: 'bar',
                data: {
                    labels: Object.values(mockData.segments).map(s => s.name),
                    datasets: [{
                        label: 'Receita Total (R$ mil)',
                        data: Object.values(mockData.segments).map(s => s.count * s.avgValue / 1000),
                        backgroundColor: getChartColors('SUCCESS', 1)[0]
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    }
                }
            }
        );

        // Distribution Charts
        const distData = {
            recency: [850, 1200, 1500, 980, 720],
            frequency: [1100, 1400, 950, 680, 520],
            monetary: [920, 1350, 1100, 780, 500]
        };

        ['recency', 'frequency', 'monetary'].forEach((metric, index) => {
            const canvasId = `${metric}-dist-chart`;
            this.charts[metric] = new Chart(
                document.getElementById(canvasId),
                {
                    type: 'bar',
                    data: {
                        labels: ['1', '2', '3', '4', '5'],
                        datasets: [{
                            label: 'Clientes',
                            data: distData[metric],
                            backgroundColor: getChartColors('PRIMARY', 1)[0]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        }
                    }
                }
            );
        });
    }

    generateMockRFMData() {
        return {
            segments: {
                champions: { name: 'Champions', count: 3620, avgValue: 3250 },
                loyal: { name: 'Loyal', count: 5840, avgValue: 2180 },
                potentialLoyalist: { name: 'Potential Loyalists', count: 4250, avgValue: 1520 },
                recent: { name: 'Recent', count: 3180, avgValue: 890 },
                promising: { name: 'Promising', count: 2950, avgValue: 1340 },
                needAttention: { name: 'Need Attention', count: 4120, avgValue: 1680 },
                aboutToSleep: { name: 'About to Sleep', count: 3580, avgValue: 980 },
                atRisk: { name: 'At Risk', count: 2340, avgValue: 2450 },
                cantLose: { name: "Can't Lose", count: 1850, avgValue: 3890 },
                hibernating: { name: 'Hibernating', count: 5120, avgValue: 620 },
                lost: { name: 'Lost', count: 8384, avgValue: 450 }
            }
        };
    }

    destroy() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }
}
