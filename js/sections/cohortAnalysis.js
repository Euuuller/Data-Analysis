/**
 * Cohort Analysis Section
 * Visualizes retention patterns over time
 */

import { formatPercentage } from '../utils/formatters.js';
import { getChartColors, LINE_CHART_CONFIG } from '../config/chartConfig.js';

export class CohortAnalysis {
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
      <section class="section-cohort fade-in">
        <div class="section-header">
          <h1>Análise de Cohort</h1>
          <p>Visualização de padrões de retenção ao longo do tempo</p>
        </div>

        <div class="filters-bar">
          <div class="filters-row">
            <div class="filter-item">
              <label for="cohort-period">Período de Análise</label>
              <select id="cohort-period">
                <option value="6m">Últimos 6 meses</option>
                <option value="12m" selected>Últimos 12 meses</option>
                <option value="24m">Últimos 24 meses</option>
              </select>
            </div>
            <div class="filter-item">
              <label for="cohort-metric">Métrica</label>
              <select id="cohort-metric">
                <option value="retention" selected>Taxa de Retenção</option>
                <option value="revenue">Receita</option>
                <option value="frequency">Frequência</option>
              </select>
            </div>
            <div class="filter-item">
              <button class="btn btn-primary" id="apply-filters">Aplicar Filtros</button>
            </div>
          </div>
        </div>

        <div class="charts-grid">
          <div class="chart-card chart-card-full">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Curva de Retenção por Cohort</h3>
            </div>
            <div class="chart-container">
              <canvas id="retention-curve-chart"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Tamanho dos Cohorts</h3>
            </div>
            <div class="chart-container">
              <canvas id="cohort-size-chart"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Receita por Cohort</h3>
            </div>
            <div class="chart-container">
              <canvas id="cohort-revenue-chart"></canvas>
            </div>
          </div>
        </div>

        <div class="cohort-insights">
          <div class="insight-stat">
            <div class="insight-stat-value">72%</div>
            <div class="insight-stat-label">Melhor Retenção (Q4 2023)</div>
          </div>
          <div class="insight-stat">
            <div class="insight-stat-value">45%</div>
            <div class="insight-stat-label">Retenção Média 90 dias</div>
          </div>
          <div class="insight-stat">
            <div class="insight-stat-value">28%</div>
            <div class="insight-stat-label">Retenção Média 180 dias</div>
          </div>
          <div class="insight-stat">
            <div class="insight-stat-value">15%</div>
            <div class="insight-stat-label">Variação entre Cohorts</div>
          </div>
        </div>
      </section>
    `;
    }

    async initCharts() {
        // Mock data for demonstration
        const cohortData = this.generateMockCohortData();

        // Retention Curve Chart
        this.charts.retentionCurve = new Chart(
            document.getElementById('retention-curve-chart'),
            {
                type: 'line',
                data: {
                    labels: ['Semana 0', 'Semana 1', 'Semana 4', 'Semana 8', 'Semana 12', 'Semana 16'],
                    datasets: cohortData.cohorts.map((cohort, index) => ({
                        label: cohort.name,
                        data: cohort.retention,
                        borderColor: getChartColors('MIXED', 6)[index],
                        backgroundColor: getChartColors('MIXED', 6)[index] + '20',
                        fill: false,
                        tension: 0.4
                    }))
                },
                options: {
                    ...LINE_CHART_CONFIG,
                    plugins: {
                        ...LINE_CHART_CONFIG.plugins,
                        tooltip: {
                            ...LINE_CHART_CONFIG.plugins.tooltip,
                            callbacks: {
                                label: (context) => {
                                    return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
                                }
                            }
                        }
                    },
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

        // Cohort Size Chart
        this.charts.cohortSize = new Chart(
            document.getElementById('cohort-size-chart'),
            {
                type: 'bar',
                data: {
                    labels: cohortData.cohorts.map(c => c.name),
                    datasets: [{
                        label: 'Clientes',
                        data: cohortData.cohorts.map(c => c.size),
                        backgroundColor: getChartColors('PRIMARY', 1)[0]
                    }]
                },
                options: {
                    ...LINE_CHART_CONFIG,
                    plugins: {
                        ...LINE_CHART_CONFIG.plugins,
                        legend: {
                            display: false
                        }
                    }
                }
            }
        );

        // Cohort Revenue Chart
        this.charts.cohortRevenue = new Chart(
            document.getElementById('cohort-revenue-chart'),
            {
                type: 'bar',
                data: {
                    labels: cohortData.cohorts.map(c => c.name),
                    datasets: [{
                        label: 'Receita (R$ mil)',
                        data: cohortData.cohorts.map(c => c.revenue),
                        backgroundColor: getChartColors('SUCCESS', 1)[0]
                    }]
                },
                options: {
                    ...LINE_CHART_CONFIG,
                    plugins: {
                        ...LINE_CHART_CONFIG.plugins,
                        legend: {
                            display: false
                        }
                    }
                }
            }
        );
    }

    generateMockCohortData() {
        return {
            cohorts: [
                { name: 'Jan 2024', size: 1250, revenue: 850, retention: [100, 68, 52, 45, 42, 40] },
                { name: 'Dez 2023', size: 1180, revenue: 920, retention: [100, 72, 58, 50, 48, 46] },
                { name: 'Nov 2023', size: 1320, revenue: 780, retention: [100, 65, 48, 40, 38, 35] },
                { name: 'Out 2023', size: 1420, revenue: 1050, retention: [100, 75, 62, 55, 52, 50] },
                { name: 'Set 2023', size: 1150, revenue: 680, retention: [100, 62, 45, 38, 35, 32] },
                { name: 'Ago 2023', size: 1280, revenue: 890, retention: [100, 70, 55, 48, 45, 43] }
            ]
        };
    }

    destroy() {
        // Destroy all charts
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }
}
