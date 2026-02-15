/**
 * Descriptive Analysis B Section
 * Complementary analyses and operational metrics
 */

import { formatCurrency, formatPercentage } from '../utils/formatters.js';
import { getChartColors, LINE_CHART_CONFIG } from '../config/chartConfig.js';

export class DescriptiveB {
    constructor() {
        this.container = document.getElementById('main-content');
        this.charts = {};
    }

    async render() {
        this.container.innerHTML = this.template();
        await this.initCharts();
    }

    template() {
        return `
      <section class="section-descriptive fade-in">
        <div class="section-header">
          <h1>Análise Descritiva - Parte B</h1>
          <p>Análises complementares e métricas operacionais</p>
        </div>

        <div class="descriptive-overview">
          <div class="metric-card">
            <div class="metric-label">CAC Médio</div>
            <div class="metric-value">R$ 180</div>
            <div class="metric-change positive">↓ 8.2%</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">LTV / CAC Ratio</div>
            <div class="metric-value">10.3x</div>
            <div class="metric-change positive">↑ 12.5%</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Payback Period</div>
            <div class="metric-value">4.2 meses</div>
            <div class="metric-change positive">↓ 0.8m</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Churn Rate</div>
            <div class="metric-value">32%</div>
            <div class="metric-change negative">↑ 2.1%</div>
          </div>
        </div>

        <div class="mixed-charts-grid">
          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">CAC vs LTV por Segmento</h3>
            </div>
            <div class="chart-container">
              <canvas id="cac-ltv-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Evolução da Taxa de Churn</h3>
            </div>
            <div class="chart-container">
              <canvas id="churn-evolution-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Distribuição de Frequência de Compra</h3>
            </div>
            <div class="chart-container">
              <canvas id="frequency-distribution-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Intervalo Entre Compras</h3>
            </div>
            <div class="chart-container">
              <canvas id="purchase-interval-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-12">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Distribuição de Customer Lifetime Value</h3>
            </div>
            <div class="chart-container">
              <canvas id="ltv-distribution-chart"></canvas>
            </div>
          </div>
        </div>
      </section>
    `;
    }

    async initCharts() {
        // CAC vs LTV Chart
        this.charts.cacLtv = new Chart(
            document.getElementById('cac-ltv-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['Champions', 'Loyal', 'At Risk', 'Recent', 'Lost'],
                    datasets: [
                        {
                            label: 'CAC (R$)',
                            data: [180, 180, 180, 180, 180],
                            backgroundColor: getChartColors('DANGER', 1)[0]
                        },
                        {
                            label: 'LTV (R$)',
                            data: [3250, 2180, 2450, 890, 450],
                            backgroundColor: getChartColors('SUCCESS', 1)[0]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            }
        );

        // Churn Evolution Chart
        this.charts.churnEvolution = new Chart(
            document.getElementById('churn-evolution-chart'),
            {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Taxa de Churn (%)',
                        data: [28, 29, 30, 31, 32, 33, 32, 31, 32, 33, 32, 32],
                        borderColor: getChartColors('DANGER', 1)[0],
                        backgroundColor: getChartColors('DANGER', 1)[0] + '20',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    ...LINE_CHART_CONFIG,
                    scales: {
                        ...LINE_CHART_CONFIG.scales,
                        y: {
                            ...LINE_CHART_CONFIG.scales.y,
                            ticks: {
                                callback: (value) => value + '%'
                            }
                        }
                    }
                }
            }
        );

        // Frequency Distribution Chart
        this.charts.frequencyDist = new Chart(
            document.getElementById('frequency-distribution-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['1 compra', '2-3', '4-6', '7-10', '11-15', '16+'],
                    datasets: [{
                        label: 'Clientes',
                        data: [12500, 8200, 5800, 3200, 1500, 800],
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

        // Purchase Interval Chart
        this.charts.purchaseInterval = new Chart(
            document.getElementById('purchase-interval-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['0-7 dias', '8-15', '16-30', '31-60', '61-90', '90+'],
                    datasets: [{
                        label: 'Clientes',
                        data: [2800, 5200, 8500, 7200, 4800, 3500],
                        backgroundColor: getChartColors('WARNING', 1)[0]
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

        // LTV Distribution Chart
        this.charts.ltvDist = new Chart(
            document.getElementById('ltv-distribution-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['R$ 0-500', 'R$ 501-1000', 'R$ 1001-1500', 'R$ 1501-2000',
                        'R$ 2001-2500', 'R$ 2501-3000', 'R$ 3001-4000', 'R$ 4000+'],
                    datasets: [{
                        label: 'Clientes',
                        data: [8500, 9200, 7800, 5200, 3800, 2500, 1800, 1200],
                        backgroundColor: getChartColors('SUCCESS', 1)[0]
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
    }

    destroy() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }
}
