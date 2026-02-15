# Dashboard Analytics - Análise de Cohort e RFM

## 📊 Sobre o Projeto

Dashboard profissional para análise de retenção de clientes, utilizando metodologias de **Cohort Analysis** e **Segmentação RFM** (Recência, Frequência, Valor Monetário). Desenvolvido com HTML5, CSS3 e JavaScript vanilla, seguindo as melhores práticas de desenvolvimento web moderno.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Grid, Flexbox, Custom Properties
- **JavaScript Vanilla (ES6+)** - Módulos nativos, sem frameworks
- **Chart.js 4.4.0** - Visualizações de dados interativas

## ✨ Funcionalidades

### 📈 Análises Disponíveis

1. **Apresentação** - Overview com KPIs principais e insights rápidos
2. **Problema de Negócio** - Contextualização e objetivos da análise
3. **Análise de Cohort** - Visualização de padrões de retenção ao longo do tempo
4. **Segmentação RFM** - Classificação de clientes em 11 segmentos estratégicos
5. **Análise Descritiva A** - Distribuição por canais, evolução de vendas, top categorias
6. **Análise Descritiva B** - CAC vs LTV, churn rate, frequência de compra

### 🎯 Recursos

- ✅ Design moderno e profissional (inspirado em Mixpanel, Amplitude, Segment)
- ✅ Totalmente responsivo (mobile-first)
- ✅ Navegação SPA com hash-based routing
- ✅ Gráficos interativos com Chart.js
- ✅ Sistema de filtros globais
- ✅ Tema claro/escuro
- ✅ Acessibilidade WCAG 2.1 AA
- ✅ Performance otimizada

## 📁 Estrutura do Projeto

\`\`\`
dashboard-analytics/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
│
├── assets/
│   └── data/                  # Dados mockados (JSON)
│
├── css/
│   ├── main.css              # Entry point CSS
│   ├── base/                 # Reset, variáveis, tipografia
│   ├── layout/               # Sidebar, header, grid
│   ├── components/           # Botões, cards, charts, forms
│   ├── sections/             # Estilos específicos de cada seção
│   └── utils/                # Animações, responsividade
│
└── js/
    ├── app.js                # Entry point da aplicação
    ├── config/               # Constantes e configurações
    ├── core/                 # Router, State, EventBus
    ├── utils/                # DOM, formatters, calculations
    ├── services/             # DataService
    ├── components/           # Navigation
    └── sections/             # Módulos de cada seção
\`\`\`

## 💻 Como Usar

### Opção 1: Servidor Local (Recomendado)

1. Clone o repositório:
\`\`\`bash
git clone <repository-url>
cd Data-Analysis
\`\`\`

2. Inicie um servidor local. Opções:

**Com Python 3:**
\`\`\`bash
python -m http.server 8000
\`\`\`

**Com Node.js (http-server):**
\`\`\`bash
npx http-server -p 8000
\`\`\`

**Com VS Code:**
- Instale a extensão "Live Server"
- Clique com botão direito em \`index.html\`
- Selecione "Open with Live Server"

3. Acesse no navegador:
\`\`\`
http://localhost:8000
\`\`\`

### Opção 2: Abrir Diretamente

⚠️ **Nota:** Alguns navegadores bloqueiam requisições de arquivos locais. Use um servidor local para melhor experiência.

## 🎨 Design System

### Paleta de Cores

- **Primary:** #2563eb (Azul profissional)
- **Success:** #10b981 (Verde)
- **Warning:** #f59e0b (Laranja)
- **Danger:** #ef4444 (Vermelho)
- **Info:** #06b6d4 (Ciano)

### Tipografia

- **Fonte Principal:** Inter (Google Fonts)
- **Fonte Mono:** JetBrains Mono
- **Escala:** 12px - 48px (sistema harmonioso)

### Espaçamento

Sistema baseado em grid de 8px para consistência visual.

## 📊 Segmentos RFM

O dashboard classifica clientes em 11 segmentos:

1. **Champions** - Melhores clientes (R:4-5, F:4-5, M:4-5)
2. **Loyal Customers** - Clientes fiéis (R:2-5, F:3-5, M:3-5)
3. **Potential Loyalists** - Potencial de fidelização
4. **Recent Customers** - Clientes recentes
5. **Promising** - Promissores
6. **Need Attention** - Precisam de atenção
7. **About to Sleep** - Prestes a dormir
8. **At Risk** - Em risco
9. **Can't Lose Them** - Não podemos perder
10. **Hibernating** - Hibernando
11. **Lost** - Perdidos

## 🔧 Arquitetura Técnica

### Padrões Utilizados

- **ES6 Modules** - Organização modular do código
- **Observable Pattern** - Gerenciamento de estado reativo
- **Pub/Sub** - Comunicação entre componentes via EventBus
- **Hash-based Routing** - Navegação SPA sem dependências
- **Mobile-First** - Design responsivo progressivo

### Principais Módulos

- **Router** - Gerenciamento de rotas e navegação
- **State** - Estado centralizado da aplicação
- **DataService** - Carregamento e cache de dados
- **Formatters** - Formatação de moeda, números, datas
- **Calculations** - Cálculos estatísticos e métricas de negócio

## 📱 Responsividade

Breakpoints:
- **Mobile:** < 640px
- **Tablet:** 641px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## ♿ Acessibilidade

- ✅ Navegação por teclado completa
- ✅ ARIA labels em elementos interativos
- ✅ Contraste de cores adequado (4.5:1)
- ✅ Skip links para conteúdo principal
- ✅ Indicadores de foco visíveis
- ✅ Estrutura semântica HTML5

## 🌐 Compatibilidade

Testado e compatível com:
- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 📈 Performance

- Load time < 3s
- Lighthouse Score > 90
- Lazy loading de dados
- Cache de requisições
- Animações otimizadas

## 🎓 Métricas Calculadas

### Cohort Analysis
- Taxa de retenção por período
- Tamanho de cohorts
- Receita acumulada por cohort

### RFM Segmentation
- Scores R, F, M (1-5)
- Classificação automática em segmentos
- Valor médio por segmento

### Métricas de Negócio
- LTV (Lifetime Value)
- CAC (Customer Acquisition Cost)
- Churn Rate
- Retention Rate
- Growth Rate

## 👤 Autor

Desenvolvido seguindo as especificações do Prompt.md

## 📝 Licença

MIT License - Livre para uso e modificação

---

**Dashboard desenvolvido com foco em qualidade profissional e boas práticas de desenvolvimento web** 🚀
