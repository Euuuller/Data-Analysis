/**
 * Cohort Analysis Section
 * Visualizes retention patterns over time with heatmap and charts
 */

import { formatPercentage } from '../utils/formatters.js';
import { dataService } from '../services/dataService.js';

export class CohortAnalysis {
  constructor() {
    this.container = document.getElementById('main-content');
    this.charts = {};
    this.cohortData = null;
  }

  async render() {
    this.container.innerHTML = '<div class="loader">Carregando dados...</div>';

    try {
      // Load cohort data
      this.cohortData = await dataService.loadCohortData();
      this.container.innerHTML = this.template();
      await this.initCharts();
      this.renderHeatmap();
    } catch (error) {
      console.error('Error loading cohort data:', error);
      this.container.innerHTML = '<div class="error">Erro ao carregar dados de cohort</div>';
    }
  }

  template() {
    const summary = this.cohortData.summary;

    return `
      <section class="section-cohort fade-in">
        <div class="section-header">
          <h1>Análise de Cohort - Retenção de Clientes</h1>
          <p>Acompanhamento de comportamento de clientes ao longo do tempo (${summary.period})</p>
        </div>

        <div class="cohort-methodology">
          <h3>METODOLOGIA COHORT</h3>
          <p>A Análise de Cohort agrupa clientes com base em características compartilhadas, como a <strong>DATA DE AQUISIÇÃO</strong>. O objetivo é rastrear o <strong>COMPORTAMENTO</strong> desses grupos (cohorts) ao longo do tempo para avaliar a <strong>RETENÇÃO</strong> e o engajamento. Cada linha do heatmap representa um cohort, enquanto as colunas mostram a atividade em meses subsequentes.</p>
        </div>

        <div class="cohort-stats-row">
          <div class="cohort-stat-card">
            <div class="stat-label">MELHOR COHORT:</div>
            <div class="stat-value">${summary.bestCohort} (21.8% M10)</div>
          </div>
          <div class="cohort-stat-card">
            <div class="stat-label">PIOR COHORT:</div>
            <div class="stat-value">${summary.worstCohort} (0% M1)</div>
          </div>
          <div class="cohort-stat-card">
            <div class="stat-label">MÉDIA RETENÇÃO M1:</div>
            <div class="stat-value">${summary.avgRetentionMonth1}%</div>
          </div>
          <div class="cohort-stat-card">
            <div class="stat-label">MÉDIA RETENÇÃO M6:</div>
            <div class="stat-value">${summary.avgRetentionMonth6}%</div>
          </div>
        </div>

        <div class="cohort-heatmap-section">
          <h3>Heatmap de Retenção de Cohort</h3>
          <div class="heatmap-container" id="cohort-heatmap"></div>
        </div>

        <div class="cohort-charts-grid">
          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Curva de Retenção por Cohort</h3>
            </div>
            <div class="chart-container">
              <canvas id="retention-curve-chart"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Retenção Mês 1 por Cohort</h3>
            </div>
            <div class="chart-container">
              <canvas id="month1-retention-chart"></canvas>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderHeatmap() {
    const heatmapContainer = document.getElementById('cohort-heatmap');
    if (!heatmapContainer) return;

    const cohorts = this.cohortData.cohorts;
    const maxMonths = 12;

    // Create table
    let html = '<table class="cohort-heatmap-table">';

    // Header row
    html += '<thead><tr>';
    html += '<th class="cohort-header">COHORT</th>';
    for (let i = 0; i < maxMonths; i++) {
      html += `<th class="month-header">MÊS ${i}</th>`;
    }
    html += '</tr></thead>';

    // Data rows
    html += '<tbody>';
    cohorts.forEach(cohort => {
      html += '<tr>';
      html += `<td class="cohort-name">${cohort.name}</td>`;

      cohort.retention.forEach((value, index) => {
        const colorClass = this.getHeatmapColor(value);
        const displayValue = value === 0 ? '0.0%' : `${value.toFixed(1)}%`;
        html += `<td class="heatmap-cell ${colorClass}" data-value="${value}">${displayValue}</td>`;
      });

      html += '</tr>';
    });
    html += '</tbody>';
    html += '</table>';

    heatmapContainer.innerHTML = html;
  }

  getHeatmapColor(value) {
    if (value === 0) return 'heat-0';
    if (value < 5) return 'heat-1';
    if (value < 8) return 'heat-2';
    if (value < 10) return 'heat-3';
    if (value < 12) return 'heat-4';
    if (value < 15) return 'heat-5';
    if (value < 18) return 'heat-6';
    if (value < 20) return 'heat-7';
    if (value < 22) return 'heat-8';
    return 'heat-9';
  }

  async initCharts() {
    const cohorts = this.cohortData.cohorts;
    const colors = [
      '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd',
      '#10b981', '#34d399', '#6ee7b7', '#a7f3d0',
      '#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'
    ];

    // Retention Curve Chart
    const datasets = cohorts.map((cohort, index) => ({
      label: cohort.name,
      data: cohort.retention,
      borderColor: colors[index % colors.length],
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.3
    }));

    this.charts.retentionCurve = new Chart(
      document.getElementById('retention-curve-chart'),
      {
        type: 'line',
        data: {
          labels: ['Mês 0', 'Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5',
            'Mês 6', 'Mês 7', 'Mês 8', 'Mês 9', 'Mês 10', 'Mês 11'],
          datasets: datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  size: 11
                }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              titleFont: {
                size: 13
              },
              bodyFont: {
                size: 12
              },
              callbacks: {
                label: (context) => {
                  return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.05)'
              },
              ticks: {
                font: {
                  size: 11
                }
              }
            },
            y: {
              beginAtZero: true,
              max: 100,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              },
              ticks: {
                callback: (value) => value + '%',
                font: {
                  size: 11
                }
              }
            }
          }
        }
      }
    );

    // Month 1 Retention Bar Chart (Horizontal)
    const month1Data = cohorts.map(c => ({
      cohort: c.name,
      retention: c.retention[1] || 0
    }));

    // Keep chronological order (no sorting)
    // Data is already in order from JSON (2014-01 to 2014-12)

    const barColors = month1Data.map(item => {
      const value = item.retention;
      if (value === 0) return '#dc2626';
      if (value < 5) return '#f97316';
      if (value < 10) return '#f59e0b';
      if (value < 15) return '#3b82f6';
      if (value < 20) return '#2563eb';
      return '#10b981';
    });

    this.charts.month1Retention = new Chart(
      document.getElementById('month1-retention-chart'),
      {
        type: 'bar',
        data: {
          labels: month1Data.map(d => d.cohort),
          datasets: [{
            label: 'Retenção Mês 1',
            data: month1Data.map(d => d.retention),
            backgroundColor: barColors,
            borderWidth: 0
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              callbacks: {
                label: (context) => {
                  return `Retenção: ${context.parsed.x.toFixed(1)}%`;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 25,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              },
              ticks: {
                callback: (value) => value + '%',
                font: {
                  size: 11
                }
              }
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 11
                }
              }
            }
          }
        }
      }
    );
  }

  destroy() {
    // Destroy all charts
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy();
    });
    this.charts = {};
  }
}
