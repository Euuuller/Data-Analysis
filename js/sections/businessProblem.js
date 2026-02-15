/**
 * Business Problem Section
 * Contextualizes the business problem being analyzed
 */

export class BusinessProblem {
    constructor() {
        this.container = document.getElementById('main-content');
    }

    render() {
        this.container.innerHTML = this.template();
    }

    template() {
        return `
      <section class="section-business-problem fade-in">
        <div class="section-header">
          <h1>Problema de Negócio</h1>
          <p>Contexto e objetivos da análise de retenção e segmentação</p>
        </div>

        <div class="context-section">
          <h2>📋 Contexto</h2>
          <p>
            Nossa empresa de e-commerce tem experimentado um crescimento significativo em aquisição de clientes,
            com um aumento de 45% no número de novos clientes nos últimos 12 meses. No entanto, observamos
            uma taxa de churn preocupante de 32% no primeiro trimestre após a aquisição.
          </p>
          <p>
            Este cenário representa uma perda potencial de <strong>R$ 2.8M anuais</strong> em receita recorrente
            e indica a necessidade urgente de entender melhor o comportamento dos nossos clientes para
            implementar estratégias eficazes de retenção.
          </p>
        </div>

        <div class="pain-points-grid">
          ${this.renderPainPoint('Alta Taxa de Churn', 'Taxa de 32% no primeiro trimestre representa perda significativa de investimento em aquisição')}
          ${this.renderPainPoint('ROI de Aquisição Baixo', 'CAC de R$ 180 vs LTV de R$ 1.850 indica payback period muito longo')}
          ${this.renderPainPoint('Falta de Segmentação', 'Estratégias one-size-fits-all não atendem necessidades específicas de cada segmento')}
        </div>

        <div class="hypothesis-section">
          <h2>💡 Hipóteses a Investigar</h2>
          <div class="hypothesis-list">
            ${this.renderHypothesis('🔍', 'Cohorts de diferentes períodos apresentam comportamentos de retenção distintos devido a sazonalidade e mudanças no produto')}
            ${this.renderHypothesis('🎯', 'Clientes de diferentes segmentos RFM requerem estratégias de engajamento personalizadas')}
            ${this.renderHypothesis('📊', 'Canais de aquisição influenciam significativamente na qualidade e retenção dos clientes')}
            ${this.renderHypothesis('⏰', 'Existe um ponto crítico nos primeiros 30-60 dias onde a intervenção pode maximizar retenção')}
          </div>
        </div>

        <div class="methodology-diagram">
          <h2>🔬 Metodologia de Análise</h2>
          <div class="methodology-steps">
            ${this.renderMethodologyStep('1', 'Análise de Cohort', 'Identificar padrões de retenção ao longo do tempo')}
            ${this.renderMethodologyStep('2', 'Segmentação RFM', 'Classificar clientes por Recência, Frequência e Valor')}
            ${this.renderMethodologyStep('3', 'Análise Descritiva', 'Explorar correlações e métricas operacionais')}
            ${this.renderMethodologyStep('4', 'Recomendações', 'Propor ações baseadas em dados')}
          </div>
        </div>
      </section>
    `;
    }

    renderPainPoint(title, description) {
        return `
      <div class="pain-point-card">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `;
    }

    renderHypothesis(icon, text) {
        return `
      <div class="hypothesis-item">
        <div class="hypothesis-icon">${icon}</div>
        <p>${text}</p>
      </div>
    `;
    }

    renderMethodologyStep(number, title, description) {
        return `
      <div class="methodology-step">
        <div class="methodology-step-number">${number}</div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `;
    }

    destroy() {
        // Cleanup if needed
    }
}
