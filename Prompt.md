# PROMPT COMANDO: Dashboard Profissional de Análise de Dados

## 🎯 OBJETIVO PRINCIPAL
Desenvolver um dashboard profissional, moderno e funcional utilizando HTML, CSS e JavaScript vanilla para análise de dados de negócios, com foco em Análise de Cohort, Segmentação RFM e análises descritivas.

---

## 📋 ESPECIFICAÇÕES GERAIS

### Tecnologias Obrigatórias
- **HTML5** (semântico e acessível)
- **CSS3** (Grid, Flexbox, Custom Properties)
- **JavaScript Vanilla** (ES6+, módulos nativos)
- **Sem frameworks** ou bibliotecas pesadas
- **Chart.js** ou **D3.js** para visualizações (apenas biblioteca de gráficos permitida)

### Requisitos de Qualidade
- ✅ Código limpo, bem comentado e profissional
- ✅ Estrutura modular e escalável
- ✅ Design moderno que **não pareça feito por IA**
- ✅ Responsivo (mobile-first approach)
- ✅ Performance otimizada (load < 3s)
- ✅ Acessibilidade (WCAG 2.1 AA)
- ✅ Cross-browser compatibility

---

## 🗂️ ESTRUTURA DE ARQUIVOS PROFISSIONAL

```
dashboard-analytics/
│
├── index.html
├── README.md
├── package.json (opcional, para dev tools)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── icons/
│   │   └── charts/
│   ├── fonts/
│   └── data/
│       ├── sample-cohort.json
│       ├── sample-rfm.json
│       └── sample-descriptive.json
│
├── css/
│   ├── main.css                    # Entry point
│   ├── base/
│   │   ├── reset.css              # CSS reset/normalize
│   │   ├── variables.css          # CSS custom properties
│   │   └── typography.css         # Tipografia base
│   ├── layout/
│   │   ├── sidebar.css            # Navegação lateral
│   │   ├── header.css             # Cabeçalho
│   │   └── grid.css               # Sistema de grid
│   ├── components/
│   │   ├── buttons.css            # Botões
│   │   ├── cards.css              # Cards de métricas
│   │   ├── charts.css             # Estilização de gráficos
│   │   ├── tabs.css               # Sistema de abas
│   │   ├── tables.css             # Tabelas de dados
│   │   └── forms.css              # Formulários e filtros
│   ├── sections/
│   │   ├── presentation.css       # Aba de apresentação
│   │   ├── business-problem.css   # Aba de problema
│   │   ├── cohort.css             # Aba Cohort
│   │   ├── rfm.css                # Aba RFM
│   │   └── descriptive.css        # Abas descritivas
│   └── utils/
│       ├── animations.css         # Animações e transições
│       └── responsive.css         # Media queries
│
├── js/
│   ├── app.js                     # Entry point da aplicação
│   ├── config/
│   │   ├── constants.js           # Constantes globais
│   │   └── chartConfig.js         # Configurações de gráficos
│   ├── core/
│   │   ├── router.js              # Sistema de roteamento de abas
│   │   ├── state.js               # Gerenciamento de estado
│   │   └── eventBus.js            # Sistema de eventos
│   ├── utils/
│   │   ├── dom.js                 # Helpers DOM ($, $$, etc)
│   │   ├── formatters.js          # Formatação de dados
│   │   ├── validators.js          # Validações
│   │   └── calculations.js        # Cálculos matemáticos
│   ├── services/
│   │   ├── dataService.js         # Carregamento de dados
│   │   └── storageService.js      # LocalStorage management
│   ├── components/
│   │   ├── navigation.js          # Componente de navegação
│   │   ├── filters.js             # Sistema de filtros
│   │   └── modal.js               # Modais
│   ├── sections/
│   │   ├── presentation.js        # Lógica da apresentação
│   │   ├── businessProblem.js     # Lógica do problema
│   │   ├── cohortAnalysis.js      # Análise Cohort
│   │   ├── rfmAnalysis.js         # Análise RFM
│   │   ├── descriptiveA.js        # Análise descritiva A
│   │   └── descriptiveB.js        # Análise descritiva B
│   └── charts/
│       ├── cohortHeatmap.js       # Heatmap de cohort
│       ├── cohortRetention.js     # Gráfico de retenção
│       ├── rfmSegmentation.js     # Segmentação RFM
│       ├── rfmDistribution.js     # Distribuição RFM
│       └── descriptiveCharts.js   # Gráficos descritivos
│
└── docs/
    ├── ARCHITECTURE.md            # Documentação da arquitetura
    ├── STYLE_GUIDE.md             # Guia de estilo
    └── DATA_SCHEMA.md             # Esquema de dados
```

---

## 🎨 DIRETRIZES DE DESIGN

### Referências de Design Profissional
Inspire-se nestes estilos (NÃO copie, ADAPTE):

1. **Mixpanel Dashboard** - Layout limpo, métricas bem organizadas
2. **Amplitude Analytics** - Uso inteligente de espaço em branco
3. **Segment** - Hierarquia visual clara
4. **Tableau** - Visualizações de dados sofisticadas
5. **Looker** - Interface moderna e profissional

### Paleta de Cores Profissional

```css
/* EVITE cores muito saturadas ou "gradient rainbows" típicos de IA */

/* Primárias - Tom neutro e profissional */
--color-primary: #2563eb;      /* Azul principal */
--color-primary-dark: #1e40af;
--color-primary-light: #60a5fa;

/* Secundárias - Suporte e accents */
--color-success: #10b981;      /* Verde (positivo) */
--color-warning: #f59e0b;      /* Laranja (atenção) */
--color-danger: #ef4444;       /* Vermelho (negativo) */
--color-info: #06b6d4;         /* Ciano (informação) */

/* Neutros - Base do design */
--color-background: #ffffff;
--color-surface: #f9fafb;
--color-surface-2: #f3f4f6;
--color-border: #e5e7eb;

/* Texto */
--color-text-primary: #111827;
--color-text-secondary: #6b7280;
--color-text-tertiary: #9ca3af;

/* Dark mode (opcional mas recomendado) */
--color-dark-background: #0f172a;
--color-dark-surface: #1e293b;
--color-dark-border: #334155;
```

### Tipografia Profissional

```css
/* Sans-serif modernas e legíveis */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

/* Scale harmonioso */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */

/* Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Espaçamento e Grid

```css
/* Escala de 8px (sistema de design consistente) */
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */

/* Raio de borda */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */

/* Sombras sutis (evite sombras muito dramáticas) */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

### Layout Principles

1. **Sidebar de Navegação**: Fixa à esquerda, 280px de largura
2. **Header**: Fixo no topo, breadcrumbs + filtros globais
3. **Content Area**: Grid responsivo 12 colunas
4. **Cards**: Border sutil, sombra leve, padding generoso
5. **Whitespace**: Use espaço em branco generosamente (não aperte elementos)

---

## 📊 ESPECIFICAÇÕES DAS ABAS

### 1️⃣ ABA: APRESENTAÇÃO

**Objetivo**: Introduzir o dashboard, contexto do projeto e principais insights

#### Elementos Visuais
- Hero section com título impactante
- Cards de métricas-chave (KPIs principais):
  - Total de clientes
  - Receita total
  - Taxa de retenção média
  - LTV médio
- Timeline do projeto ou roadmap
- Cards de "Quick Insights" (3-4 insights principais)
- Seção "Como usar este dashboard"

#### Estrutura HTML Sugerida
```html
<section id="presentation" class="section-presentation">
  <div class="hero">
    <h1>Dashboard de Análise de Retenção e Segmentação</h1>
    <p class="subtitle">Análise completa de comportamento de clientes</p>
  </div>
  
  <div class="metrics-grid">
    <div class="metric-card">...</div>
    <!-- Mais cards -->
  </div>
  
  <div class="insights-section">
    <h2>Principais Insights</h2>
    <!-- Cards de insights -->
  </div>
  
  <div class="guide-section">
    <h2>Como usar este dashboard</h2>
    <!-- Instruções -->
  </div>
</section>
```

#### Dados para Mockup
- 45.234 clientes totais
- R$ 8.2M receita total
- 68% taxa de retenção média
- R$ 1.850 LTV médio

---

### 2️⃣ ABA: PROBLEMA DE NEGÓCIO

**Objetivo**: Contextualizar o problema que está sendo analisado

#### Elementos Visuais
- Seção de contexto (2-3 parágrafos)
- Diagrama visual do problema (SVG ou Canvas)
- Cards de "Pain Points" (pontos de dor)
- Métricas de impacto do problema
- Objetivos da análise (lista visual)
- Metodologia (diagrama de processo)

#### Estrutura de Conteúdo
```
1. CONTEXTO
   - Descrição do cenário atual
   - Por que isso importa

2. PROBLEMA IDENTIFICADO
   - Sintomas observados
   - Impacto no negócio

3. HIPÓTESES
   - O que queremos descobrir
   - Perguntas a responder

4. METODOLOGIA
   - Abordagem de análise
   - Métricas utilizadas
```

#### Exemplo de Conteúdo
**Problema**: "A empresa está enfrentando uma taxa de churn de 32% no primeiro trimestre após a aquisição, representando uma perda potencial de R$ 2.8M anuais."

**Hipóteses**:
- Cohorts de determinados períodos têm comportamento diferente
- Clientes de diferentes segmentos RFM têm padrões de retenção distintos
- Canais de aquisição influenciam na retenção

---

### 3️⃣ ABA: ANÁLISE DE COHORT

**Objetivo**: Visualizar comportamento de retenção ao longo do tempo

#### Gráficos Obrigatórios

1. **Cohort Heatmap (Principal)**
   - Eixo Y: Cohorts (mês/trimestre de aquisição)
   - Eixo X: Períodos após aquisição (semanas/meses)
   - Cores: Intensidade = taxa de retenção
   - Tooltip: Dados detalhados ao hover

2. **Retention Curve**
   - Gráfico de linha múltiplas
   - Cada linha = um cohort
   - Eixo X: Tempo desde aquisição
   - Eixo Y: % de clientes ativos

3. **Cohort Size Bar Chart**
   - Tamanho de cada cohort
   - Identificar sazonalidade

4. **Revenue by Cohort**
   - Receita acumulada por cohort
   - Identificar cohorts mais valiosos

#### Filtros e Controles
- Período de análise (últimos 6M, 12M, 24M)
- Tipo de cohort (mensal, trimestral)
- Métrica (retenção, revenue, frequência)
- Segmento de cliente (se aplicável)

#### Métricas Calculadas
```javascript
// Pseudocódigo
cohortRetention = {
  period: "2023-01",
  initialSize: 1250,
  retention: {
    week0: 100%,
    week1: 68%,
    week4: 45%,
    week8: 32%,
    week12: 28%
  }
}
```

#### Insights a Destacar
- Cohorts com melhor/pior performance
- Tendências ao longo do tempo
- Ponto de inflexão crítico
- Comparação com benchmarks

---

### 4️⃣ ABA: ANÁLISE DE SEGMENTAÇÃO RFM

**Objetivo**: Segmentar clientes por Recência, Frequência e Valor Monetário

#### Gráficos Obrigatórios

1. **RFM Segmentation Matrix (3D ou Grid)**
   - Visualização dos 11 segmentos clássicos:
     - Champions
     - Loyal Customers
     - Potential Loyalists
     - Recent Customers
     - Promising
     - Need Attention
     - About to Sleep
     - At Risk
     - Can't Lose Them
     - Hibernating
     - Lost
   - Tamanho de cada segmento
   - Valor médio por segmento

2. **RFM Scatter Plot**
   - Eixo X: Recência
   - Eixo Y: Frequência
   - Tamanho da bolha: Valor monetário
   - Cores: Segmentos

3. **Distribution Charts**
   - 3 histogramas separados: R, F, M
   - Visualizar distribuição de cada dimensão

4. **Segment Performance**
   - Tabela comparativa de segmentos
   - Métricas: LTV, churn rate, ticket médio

5. **RFM Score Distribution**
   - Heatmap de scores (1-5 para cada dimensão)

#### Cálculo de RFM Scores
```javascript
// Exemplo de lógica
calculateRFMScore(customer) {
  const recencyScore = scoreRecency(daysSinceLastPurchase);
  const frequencyScore = scoreFrequency(totalPurchases);
  const monetaryScore = scoreMonetary(totalRevenue);
  
  return {
    R: recencyScore,  // 1-5
    F: frequencyScore, // 1-5
    M: monetaryScore,  // 1-5
    segment: determineSegment(recencyScore, frequencyScore, monetaryScore)
  };
}
```

#### Tabela de Segmentos
| Segmento | R Score | F Score | M Score | Descrição |
|----------|---------|---------|---------|-----------|
| Champions | 4-5 | 4-5 | 4-5 | Melhores clientes |
| Loyal | 2-5 | 3-5 | 3-5 | Compram regularmente |
| ... | ... | ... | ... | ... |

---

### 5️⃣ ABA: ANÁLISE DESCRITIVA - PARTE A

**Objetivo**: Análises estatísticas e exploratórias gerais

#### Gráficos Sugeridos

1. **Distribuição de Clientes por Canal de Aquisição**
   - Gráfico de pizza ou donut
   - Percentuais e valores absolutos

2. **Evolução de Vendas ao Longo do Tempo**
   - Gráfico de área ou linha
   - Tendência + sazonalidade

3. **Top 10 Produtos/Categorias**
   - Gráfico de barras horizontal
   - Ordenado por receita

4. **Distribuição Geográfica**
   - Mapa de calor (se aplicável)
   - Ou treemap de regiões

5. **Ticket Médio por Segmento**
   - Gráfico de barras comparativo

6. **Métricas por Período**
   - Tabela dinâmica com sparklines
   - Comparação MoM/YoY

#### Estatísticas Descritivas
- Média, mediana, moda
- Desvio padrão
- Percentis (P25, P50, P75)
- Outliers identificados

---

### 6️⃣ ABA: ANÁLISE DESCRITIVA - PARTE B

**Objetivo**: Análises complementares e métricas operacionais

#### Gráficos Sugeridos

1. **Customer Journey Timeline**
   - Sankey diagram ou funnel
   - Jornada do cliente desde aquisição

2. **CAC vs LTV**
   - Scatter plot ou barras agrupadas
   - Ratio e payback period

3. **Churn Rate Evolution**
   - Gráfico de linha com bandas
   - Alertas de threshold

4. **Frequency Distribution**
   - Histograma de frequência de compra
   - Identificar padrões

5. **Time Between Purchases**
   - Box plot ou violin plot
   - Distribuição de intervalos

6. **Customer Lifetime Value Distribution**
   - Histograma
   - Percentis destacados

#### Análises de Correlação
- Heatmap de correlação entre variáveis
- Scatter plots de relações importantes
- Análise de fatores críticos

---

## 💻 ESPECIFICAÇÕES TÉCNICAS JAVASCRIPT

### Arquitetura de Código

#### 1. Sistema de Módulos (ES6)
```javascript
// app.js - Entry point
import { Router } from './core/router.js';
import { State } from './core/state.js';
import { Navigation } from './components/navigation.js';
import * as sections from './sections/index.js';

class DashboardApp {
  constructor() {
    this.state = new State();
    this.router = new Router();
    this.init();
  }
  
  init() {
    this.router.registerRoutes({
      '/': sections.Presentation,
      '/problem': sections.BusinessProblem,
      '/cohort': sections.CohortAnalysis,
      '/rfm': sections.RFMAnalysis,
      '/descriptive-a': sections.DescriptiveA,
      '/descriptive-b': sections.DescriptiveB
    });
    
    new Navigation(this.router);
    this.router.navigate(window.location.hash || '/');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DashboardApp();
});
```

#### 2. Sistema de Roteamento
```javascript
// core/router.js
export class Router {
  constructor() {
    this.routes = {};
    this.currentSection = null;
    window.addEventListener('hashchange', () => this.handleRoute());
  }
  
  registerRoutes(routes) {
    this.routes = routes;
  }
  
  navigate(path) {
    window.location.hash = path;
  }
  
  handleRoute() {
    const path = window.location.hash.slice(1) || '/';
    const SectionClass = this.routes[path];
    
    if (SectionClass) {
      this.renderSection(new SectionClass());
    }
  }
  
  renderSection(section) {
    if (this.currentSection?.destroy) {
      this.currentSection.destroy();
    }
    
    this.currentSection = section;
    section.render();
  }
}
```

#### 3. Gerenciamento de Estado
```javascript
// core/state.js
export class State {
  constructor() {
    this.data = {
      filters: {},
      cache: {},
      user: {}
    };
    this.listeners = [];
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
  
  update(path, value) {
    // Deep update logic
    this.notify();
  }
  
  notify() {
    this.listeners.forEach(listener => listener(this.data));
  }
}
```

#### 4. Componente Base
```javascript
// Exemplo de estrutura de seção
export class CohortAnalysis {
  constructor() {
    this.container = document.getElementById('main-content');
    this.charts = {};
    this.data = null;
  }
  
  async render() {
    // Load data
    this.data = await this.loadData();
    
    // Render HTML
    this.container.innerHTML = this.template();
    
    // Initialize charts
    this.initCharts();
    
    // Setup event listeners
    this.setupListeners();
  }
  
  template() {
    return `
      <div class="section-cohort">
        <header class="section-header">
          <h1>Análise de Cohort</h1>
          <div class="filters">...</div>
        </header>
        <div class="charts-grid">
          <div class="chart-card">
            <canvas id="cohort-heatmap"></canvas>
          </div>
          <!-- More charts -->
        </div>
      </div>
    `;
  }
  
  async loadData() {
    // Fetch from API or JSON file
    const response = await fetch('./assets/data/cohort-data.json');
    return response.json();
  }
  
  initCharts() {
    this.charts.heatmap = new CohortHeatmap('#cohort-heatmap', this.data);
    // Initialize other charts
  }
  
  setupListeners() {
    // Event listeners setup
  }
  
  destroy() {
    // Cleanup charts and listeners
    Object.values(this.charts).forEach(chart => chart.destroy());
  }
}
```

### Padrões de Código

#### Naming Conventions
```javascript
// Classes: PascalCase
class CohortAnalysis {}

// Functions e métodos: camelCase
function calculateRetention() {}

// Constantes: SCREAMING_SNAKE_CASE
const MAX_COHORT_SIZE = 10000;

// Files: kebab-case
// cohort-analysis.js, rfm-segmentation.js
```

#### Comentários e Documentação
```javascript
/**
 * Calcula a taxa de retenção de um cohort
 * @param {Array<Customer>} customers - Array de clientes
 * @param {Date} cohortDate - Data do cohort
 * @param {number} period - Período de análise em dias
 * @returns {number} Taxa de retenção (0-100)
 */
function calculateRetentionRate(customers, cohortDate, period) {
  // Implementation
}
```

---

## 📈 BIBLIOTECA DE GRÁFICOS: CHART.JS

### Instalação e Setup
```html
<!-- Via CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

### Configuração Global
```javascript
// config/chartConfig.js
export const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: 'Inter',
          size: 12
        },
        usePointStyle: true,
        padding: 16
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        size: 14,
        weight: '600'
      },
      bodyFont: {
        size: 13
      },
      cornerRadius: 8
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      }
    }
  }
};

Chart.defaults.set(CHART_DEFAULTS);
```

### Exemplo: Cohort Heatmap
```javascript
// charts/cohortHeatmap.js
export class CohortHeatmap {
  constructor(selector, data) {
    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas.getContext('2d');
    this.data = data;
    this.chart = null;
    this.init();
  }
  
  init() {
    this.chart = new Chart(this.ctx, {
      type: 'matrix',
      data: this.prepareData(),
      options: this.getOptions()
    });
  }
  
  prepareData() {
    // Transform data for heatmap
    return {
      datasets: [{
        label: 'Retention Rate',
        data: this.data.cohorts.flatMap((cohort, cohortIndex) => 
          cohort.periods.map((period, periodIndex) => ({
            x: periodIndex,
            y: cohortIndex,
            v: period.retentionRate
          }))
        ),
        backgroundColor(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex].v;
          const alpha = value / 100;
          return `rgba(37, 99, 235, ${alpha})`;
        },
        width: ({ chart }) => chart.chartArea?.width / this.data.periods.length,
        height: ({ chart }) => chart.chartArea?.height / this.data.cohorts.length
      }]
    };
  }
  
  getOptions() {
    return {
      ...CHART_DEFAULTS,
      plugins: {
        ...CHART_DEFAULTS.plugins,
        tooltip: {
          callbacks: {
            title: (items) => {
              const item = items[0];
              return `Cohort: ${this.data.cohorts[item.parsed.y].label}`;
            },
            label: (item) => {
              return `Period ${item.parsed.x}: ${item.raw.v.toFixed(1)}%`;
            }
          }
        }
      }
    };
  }
  
  destroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
```

---

## 🎯 FUNCIONALIDADES AVANÇADAS

### 1. Sistema de Filtros Globais
```javascript
// components/filters.js
export class GlobalFilters {
  constructor(state) {
    this.state = state;
    this.filters = {
      dateRange: null,
      segment: 'all',
      channel: 'all'
    };
  }
  
  render() {
    return `
      <div class="global-filters">
        <div class="filter-group">
          <label>Período</label>
          <input type="date" id="date-start">
          <span>até</span>
          <input type="date" id="date-end">
        </div>
        <div class="filter-group">
          <label>Segmento</label>
          <select id="segment-filter">
            <option value="all">Todos</option>
            <option value="champions">Champions</option>
            <!-- More options -->
          </select>
        </div>
      </div>
    `;
  }
  
  apply() {
    this.state.update('filters', this.filters);
  }
}
```

### 2. Export de Dados
```javascript
// utils/exporters.js
export function exportToCSV(data, filename) {
  const csv = convertToCSV(data);
  downloadFile(csv, filename, 'text/csv');
}

export function exportToPNG(chartInstance, filename) {
  const url = chartInstance.toBase64Image();
  downloadFile(url, filename, 'image/png');
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
```

### 3. Animações e Transições
```css
/* utils/animations.css */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-enter {
  animation: fadeIn 0.4s ease-out;
}

.chart-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.chart-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.metric-card .value {
  transition: color 0.3s ease;
}

.metric-card.positive .value {
  color: var(--color-success);
}

.metric-card.negative .value {
  color: var(--color-danger);
}
```

### 4. Loading States
```javascript
// utils/loader.js
export class Loader {
  show(container) {
    container.innerHTML = `
      <div class="loader-container">
        <div class="spinner"></div>
        <p>Carregando dados...</p>
      </div>
    `;
  }
  
  hide(container) {
    const loader = container.querySelector('.loader-container');
    if (loader) {
      loader.remove();
    }
  }
}
```

---

## 📱 RESPONSIVIDADE

### Breakpoints
```css
/* utils/responsive.css */
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile First */
.sidebar {
  position: fixed;
  left: -280px;
  transition: left 0.3s ease;
}

.sidebar.open {
  left: 0;
}

/* Tablet */
@media (min-width: 768px) {
  .sidebar {
    left: 0;
    position: relative;
  }
  
  .charts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .charts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .metric-card {
    min-width: 200px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .charts-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## ✅ CHECKLIST DE QUALIDADE

### Performance
- [ ] Lazy loading de imagens
- [ ] Debounce em filtros
- [ ] Virtualização de listas grandes
- [ ] Code splitting por seção
- [ ] Minificação de assets
- [ ] Gzip compression
- [ ] Cache de dados

### Acessibilidade
- [ ] ARIA labels em gráficos
- [ ] Navegação por teclado
- [ ] Contraste adequado (4.5:1)
- [ ] Alt text em imagens
- [ ] Skip links
- [ ] Focus indicators visíveis
- [ ] Screen reader friendly

### SEO e Meta
```html
<head>
  <title>Dashboard Analytics - Análise de Cohort e RFM</title>
  <meta name="description" content="Dashboard profissional para análise de retenção, cohort e segmentação RFM">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Dashboard Analytics">
  <meta property="og:description" content="Análise profissional de dados">
  <meta property="og:image" content="./assets/images/og-image.png">
</head>
```

### Testes
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS e Android)
- [ ] Performance testing (Lighthouse score > 90)
- [ ] Accessibility testing (aXe, WAVE)

---

## 🚀 ENTREGA FINAL

### O que deve ser entregado:
1. ✅ Código-fonte completo e organizado
2. ✅ README.md com:
   - Instruções de instalação
   - Como usar
   - Estrutura do projeto
   - Tecnologias utilizadas
3. ✅ Dados mockados em JSON
4. ✅ Screenshots do dashboard
5. ✅ Link para demo hospedada (GitHub Pages, Netlify ou Vercel)

### Exemplo de README.md
```markdown
# Dashboard Analytics - Análise de Cohort e RFM

## 📊 Sobre o Projeto
Dashboard profissional para análise de retenção de clientes, utilizando metodologias de Cohort Analysis e Segmentação RFM.

## 🚀 Tecnologias
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla (ES6+)
- Chart.js 4.4.0

## 📁 Estrutura
[Descrever estrutura de pastas]

## 🎯 Funcionalidades
- Análise de Cohort com heatmap interativo
- Segmentação RFM com 11 segmentos
- Análises descritivas completas
- Sistema de filtros globais
- Export de dados (CSV, PNG)
- Design responsivo

## 💻 Como Usar
1. Clone o repositório
2. Abra o arquivo `index.html` em um servidor local
3. Navegue pelas abas usando a sidebar

## 📸 Screenshots
[Incluir imagens]

## 👤 Autor
[Seu nome]

## 📝 Licença
MIT
```

---

## 💡 DICAS FINAIS

### Para Design que NÃO Parece IA:
1. ❌ **Evite**: Gradientes arco-íris, sombras dramáticas, animações exageradas
2. ✅ **Use**: Cores neutras com accents, sombras sutis, animações suaves
3. ✅ **Inspire-se** em: Stripe, Linear, Vercel, GitHub, Notion
4. ✅ **Whitespace**: Não tenha medo de espaço em branco
5. ✅ **Consistência**: Mantenha padrões visuais em todo o dashboard

### Para Código Profissional:
1. ✅ Comentários em português explicando lógica complexa
2. ✅ Constantes extraídas para configuração
3. ✅ Funções pequenas e específicas (< 50 linhas)
4. ✅ Nomenclatura descritiva
5. ✅ Error handling adequado
6. ✅ Console.log removidos em produção

### Performance:
1. ✅ Lazy loading de imagens
2. ✅ Debounce em inputs de filtro
3. ✅ Throttle em scroll events
4. ✅ Cache de dados já carregados
5. ✅ Destruição de charts ao trocar de aba

---

## 📚 RECURSOS ADICIONAIS

### Referências de Design:
- [Dribbble - Dashboard Designs](https://dribbble.com/tags/dashboard)
- [Behance - Analytics Dashboard](https://www.behance.net/search/projects?search=analytics%20dashboard)
- [Mobbin - Dashboard Examples](https://mobbin.com/)

### Chart.js Plugins Úteis:
- chartjs-plugin-annotation
- chartjs-plugin-datalabels
- chartjs-plugin-zoom

### Ferramentas de Desenvolvimento:
- VS Code + Live Server extension
- Chrome DevTools
- Figma (para wireframes)
- ColorZilla (para paleta de cores)

---

## 🎓 CRITÉRIOS DE AVALIAÇÃO

Este dashboard será considerado **profissional** se:
- ✅ Design limpo e moderno (não genérico de IA)
- ✅ Código bem estruturado e comentado
- ✅ Funcionalidades todas operacionais
- ✅ Responsivo em todos os dispositivos
- ✅ Performance otimizada (< 3s load time)
- ✅ Acessível (WCAG AA)
- ✅ Documentação completa

---

**Agora é com você! Desenvolva um dashboard que seria orgulhosamente usado em uma empresa real. Boa sorte! 🚀**
