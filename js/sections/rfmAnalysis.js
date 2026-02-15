/**
 * RFM Analysis Section
 * Customer segmentation by Recency, Frequency, and Monetary value
 */

import { formatNumber } from '../utils/formatters.js';
import { dataService } from '../services/dataService.js';

export class RFMAnalysis {
  constructor() {
    this.container = document.getElementById('main-content');
    this.charts = {};
    this.rfmData = null;
  }

  async render() {
    this.container.innerHTML = '<div class="loader">Carregando dados...</div>';

    try {
      this.rfmData = await dataService.loadRFMData();
      this.container.innerHTML = this.template();
      await this.initCharts();
      this.renderTreemap();
    } catch (error) {
      console.error('Error loading RFM data:', error);
      this.container.innerHTML = '<div class="error">Erro ao carregar dados RFM</div>';
    }
  }

  template() {
    const summary = this.rfmData.summary;
    const methodology = this.rfmData.methodology;

    return `
      <section class="section-rfm fade-in">
        <div class="section-header">
          <h1>Segmentação RFM - Valor do Cliente</h1>
          <p>Recência | Frequência | Valor Monetário - Análise de ${summary.totalSegments} Segmentos</p>
        </div>

        <div class="rfm-methodology">
          <h3>METODOLOGIA RFM</h3>
          <p>
            A segmentação RFM classifica clientes com base em três dimensões: 
            <strong>RECENCY</strong> (${methodology.recency}), 
            <strong>FREQUENCY</strong> (${methodology.frequency}), e 
            <strong>MONETARY</strong> (${methodology.monetary}).
          </p>
        </div>

        <div class="rfm-treemap-section">
          <h3>Distribuição de Clientes por Segmento RFM</h3>
          <div id="rfm-treemap" class="treemap-container"></div>
        </div>

        <div class="rfm-charts-grid">
          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Volume por Segmento</h3>
            </div>
            <div class="chart-container">
              <canvas id="volume-chart"></canvas>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Ações por Segmento</h3>
            </div>
            <div class="actions-table-container">
              ${this.renderActionsTable()}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderActionsTable() {
    const segments = this.rfmData.segments;

    let html = '<table class="actions-table">';
    html += '<thead><tr>';
    html += '<th>SEGMENTO</th>';
    html += '<th>QTD</th>';
    html += '<th>ESTRATÉGIA</th>';
    html += '</tr></thead>';
    html += '<tbody>';

    segments.forEach(segment => {
      html += '<tr>';
      html += `<td><span class="segment-dot" style="background-color: ${segment.color}"></span> ${segment.name}</td>`;
      html += `<td class="text-center"><strong>${segment.count}</strong></td>`;
      html += `<td class="strategy-text">${segment.strategy}</td>`;
      html += '</tr>';
    });

    html += '</tbody>';
    html += '</table>';

    return html;
  }

  renderTreemap() {
    const container = document.getElementById('rfm-treemap');
    if (!container) return;

    const segments = this.rfmData.segments;

    // Define manual layout for better visual organization
    const layout = [
      // Row 1 - Largest segments
      { id: 'fieis-em-potencial', span: 'large' },
      { id: 'clientes-fieis', span: 'large' },

      // Row 2 - Medium segments
      { id: 'perdidos', span: 'medium' },
      { id: 'em-risco', span: 'medium' },
      { id: 'campeoes', span: 'medium' },

      // Row 3 - Small segments
      { id: 'quase-dormentes', span: 'small' },
      { id: 'novos-clientes', span: 'small' },
      { id: 'precisam-atencao', span: 'small' },
      { id: 'hibernando', span: 'small' },

      // Row 4 - Smallest segments
      { id: 'promissores', span: 'small' },
      { id: 'nao-posso-perder', span: 'small' }
    ];

    let html = '<div class="treemap-grid-custom">';

    layout.forEach(item => {
      const segment = segments.find(s => s.id === item.id);
      if (!segment) return;

      html += `
        <div class="treemap-block treemap-${item.span}" 
             style="background-color: ${segment.color}">
          <div class="treemap-content">
            <div class="treemap-label">${segment.name}</div>
            <div class="treemap-value">${segment.count}</div>
            <div class="treemap-percentage">${segment.percentage}%</div>
          </div>
        </div>
      `;
    });

    html += '</div>';
    container.innerHTML = html;
  }

  async initCharts() {
    const segments = this.rfmData.segments;

    // Volume Chart (Horizontal Bar)
    this.charts.volume = new Chart(
      document.getElementById('volume-chart'),
      {
        type: 'bar',
        data: {
          labels: segments.map(s => s.name),
          datasets: [{
            label: 'Clientes',
            data: segments.map(s => s.count),
            backgroundColor: segments.map(s => s.color),
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
                  const segment = segments[context.dataIndex];
                  return `${segment.count} clientes (${segment.percentage}%)`;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              },
              ticks: {
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
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy();
    });
    this.charts = {};
  }
}
