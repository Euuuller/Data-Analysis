/**
 * Descriptive Analysis A Section
 * General descriptive analytics and exploratory analysis
 */

import { formatCurrency, formatNumber } from '../utils/formatters.js';
import { getChartColors, PIE_CHART_CONFIG, LINE_CHART_CONFIG } from '../config/chartConfig.js';

export class DescriptiveA {
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
          <h1>Análise Descritiva - Parte A</h1>
          <p>Análises estatísticas e exploratórias gerais</p>
        </div>

        <div class="stats-summary">
          <h3>Estatísticas Descritivas</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-label">Média</div>
              <div class="stat-value">R$ 1.850</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Mediana</div>
              <div class="stat-value">R$ 1.420</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Desvio Padrão</div>
              <div class="stat-value">R$ 980</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">P25</div>
              <div class="stat-value">R$ 680</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">P75</div>
              <div class="stat-value">R$ 2.850</div>
            </div>
          </div>
        </div>

        <div class="mixed-charts-grid">
          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Distribuição por Canal de Aquisição</h3>
            </div>
            <div class="chart-container">
              <canvas id="acquisition-channel-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Evolução de Vendas</h3>
            </div>
            <div class="chart-container">
              <canvas id="sales-evolution-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Top 10 Categorias</h3>
            </div>
            <div class="chart-container">
              <canvas id="top-categories-chart"></canvas>
            </div>
          </div>

          <div class="chart-card chart-col-6">
            <div class="chart-card-header">
              <h3 class="chart-card-title">Ticket Médio por Segmento</h3>
            </div>
            <div class="chart-container">
              <canvas id="avg-ticket-chart"></canvas>
            </div>
          </div>
        </div>
      </section>
    `;
    }

    async initCharts() {
        // Acquisition Channel Chart
        this.charts.acquisition = new Chart(
            document.getElementById('acquisition-channel-chart'),
            {
                type: 'doughnut',
                data: {
                    labels: ['Orgânico', 'Paid Search', 'Social Media', 'Email', 'Direto', 'Referral'],
                    datasets: [{
                        data: [28, 24, 18, 15, 10, 5],
                        backgroundColor: getChartColors('MIXED', 6)
                    }]
                },
                options: PIE_CHART_CONFIG
            }
        );

        // Sales Evolution Chart
        this.charts.salesEvolution = new Chart(
            document.getElementById('sales-evolution-chart'),
            {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Vendas (R$ mil)',
                        data: [580, 620, 680, 720, 780, 850, 920, 880, 950, 1020, 1150, 1280],
                        borderColor: getChartColors('PRIMARY', 1)[0],
                        backgroundColor: getChartColors('PRIMARY', 1)[0] + '20',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: LINE_CHART_CONFIG
            }
        );

        // Top Categories Chart
        this.charts.topCategories = new Chart(
            document.getElementById('top-categories-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['Eletrônicos', 'Moda', 'Casa', 'Esportes', 'Livros', 'Beleza', 'Brinquedos', 'Alimentos', 'Pet', 'Jardim'],
                    datasets: [{
                        label: 'Receita (R$ mil)',
                        data: [1850, 1420, 980, 850, 720, 680, 520, 480, 420, 380],
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

        // Average Ticket Chart
        this.charts.avgTicket = new Chart(
            document.getElementById('avg-ticket-chart'),
            {
                type: 'bar',
                data: {
                    labels: ['Champions', 'Loyal', 'At Risk', 'Recent', 'Lost'],
                    datasets: [{
                        label: 'Ticket Médio (R$)',
                        data: [3250, 2180, 2450, 890, 450],
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
    }

    destroy() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }
}
