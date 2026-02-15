/**
 * Presentation Section
 * Dashboard introduction with KPIs and quick insights
 */

import { formatCurrency, formatPercentage, formatNumber } from '../utils/formatters.js';

export class Presentation {
    constructor() {
        this.container = document.getElementById('main-content');
    }

    render() {
        this.container.innerHTML = this.template();
        this.animateMetrics();
    }

    template() {
        return `
      <section class="section-presentation fade-in">
        <div class="hero">
          <h1>Dashboard de Análise de Retenção e Segmentação</h1>
          <p class="subtitle">Análise completa de comportamento de clientes com foco em Cohort e RFM</p>
        </div>

        <div class="metrics-grid">
          ${this.renderMetricCard('Total de Clientes', '45.234', '+12.5%', 'positive', '👥')}
          ${this.renderMetricCard('Receita Total', 'R$ 8.2M', '+8.3%', 'positive', '💰')}
          ${this.renderMetricCard('Taxa de Retenção', '68%', '-2.1%', 'negative', '📊')}
          ${this.renderMetricCard('LTV Médio', 'R$ 1.850', '+5.7%', 'positive', '💎')}
        </div>

        <div class="insights-section">
          <h2>Principais Insights</h2>
          <div class="insights-grid">
            ${this.renderInsightCard('🎯', 'Cohorts Recentes', 'Cohorts de Q4 2023 apresentam 15% mais retenção que a média histórica')}
            ${this.renderInsightCard('⭐', 'Segmento Champions', '8% dos clientes geram 35% da receita total - foco em retenção crítico')}
            ${this.renderInsightCard('⚠️', 'Clientes em Risco', '2.340 clientes (5.2%) estão no segmento "At Risk" - ação imediata necessária')}
            ${this.renderInsightCard('📈', 'Crescimento', 'Aquisição cresceu 12.5% MoM, mas retenção caiu 2.1% - investigar causas')}
          </div>
        </div>

        <div class="guide-section">
          <h2>Como usar este dashboard</h2>
          <div class="guide-steps">
            ${this.renderGuideStep('1', 'Problema de Negócio', 'Entenda o contexto e objetivos da análise')}
            ${this.renderGuideStep('2', 'Análise de Cohort', 'Visualize padrões de retenção ao longo do tempo')}
            ${this.renderGuideStep('3', 'Segmentação RFM', 'Identifique segmentos de clientes e oportunidades')}
            ${this.renderGuideStep('4', 'Análises Descritivas', 'Explore métricas detalhadas e correlações')}
          </div>
        </div>
      </section>
    `;
    }

    renderMetricCard(label, value, change, trend, icon) {
        return `
      <div class="metric-card">
        <div class="metric-label">${icon} ${label}</div>
        <div class="metric-value">${value}</div>
        <div class="metric-change ${trend}">
          ${trend === 'positive' ? '↑' : '↓'} ${change}
        </div>
      </div>
    `;
    }

    renderInsightCard(icon, title, description) {
        return `
      <div class="insight-card">
        <div class="insight-icon">${icon}</div>
        <h3 class="insight-title">${title}</h3>
        <p class="insight-description">${description}</p>
      </div>
    `;
    }

    renderGuideStep(number, title, description) {
        return `
      <div class="guide-step">
        <div class="step-number">${number}</div>
        <div class="step-content">
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      </div>
    `;
    }

    animateMetrics() {
        const metricCards = this.container.querySelectorAll('.metric-card');
        metricCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }

    destroy() {
        // Cleanup if needed
    }
}
