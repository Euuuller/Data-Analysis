// ========================================
// RENDERIZADOR DE GRÁFICOS
// ========================================
import { CONFIG } from '../../core/config.js';
import { MOCK_DATA } from '../../data/mockData.js';
import { Utils } from '../../core/utils.js';

export const ChartRenderer = {
    charts: {},

    getChartConfig: function (type, data, optionsOverrides = {}) {
        return {
            type: type,
            data: data,
            options: {
                ...CONFIG.chartDefaults,
                ...optionsOverrides
            }
        };
    },

    destroyChart: function (chartId) {
        if (this.charts[chartId]) {
            this.charts[chartId].destroy();
            delete this.charts[chartId];
        }
    },

    renderHomeTab: function () {
        this.renderKPICards();

        this.destroyChart('homeRevenueChart');
        const ctx = document.getElementById('homeRevenueChart');
        if (ctx) {
            this.charts.homeRevenueChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: MOCK_DATA.salesTrend.labels.slice(-6),
                    datasets: [{
                        label: 'Receita (Últimos 6m)',
                        data: MOCK_DATA.salesTrend.sales.slice(-6),
                        borderColor: '#06FFA5',
                        backgroundColor: 'rgba(6, 255, 165, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: CONFIG.chartDefaults
            });
        }
    },

    renderKPICards: function () {
        const kpiContainer = document.getElementById('kpi-container');
        if (!kpiContainer || kpiContainer.children.length > 0) return; // Prevent dup

        const kpis = MOCK_DATA.kpis;

        Object.entries(kpis).forEach(([key, data]) => {
            const card = this.createKPICard(key, data);
            kpiContainer.appendChild(card);
        });
    },

    createKPICard: function (id, data) {
        const card = document.createElement('div');
        card.className = 'kpi-card';

        const growthClass = data.growth >= 0 ? 'positive' : 'negative';
        const growthIcon = data.growth >= 0 ? '↑' : '↓';

        const labels = {
            revenue: 'Receita Total',
            customers: 'Clientes Ativos',
            conversion: 'Taxa de Conversão',
            nps: 'NPS Score'
        };

        let formattedValue = data.value;
        if (id === 'revenue') formattedValue = Utils.formatCurrency(data.value);
        if (id === 'customers') formattedValue = Utils.formatNumber(data.value);
        if (id === 'conversion') formattedValue = data.value + '%';

        card.innerHTML = `
      <div class="kpi-header">
        <span class="kpi-icon">${id === 'revenue' ? '💰' : id === 'customers' ? '👥' : id === 'conversion' ? '🎯' : '❤️'}</span>
        <span class="kpi-label">${labels[id]}</span>
      </div>
      <div class="kpi-value">${formattedValue}</div>
      <div class="kpi-growth ${growthClass}">
        <span>${growthIcon} ${Utils.formatPercent(data.growth)}</span>
        <span class="kpi-growth-text">vs mês anterior</span>
      </div>
    `;
        return card;
    },

    renderProblemTab: function () {
        // Static content handles most, purely HTML structure
    },

    renderCohortTab: function () {
        const tableContainer = document.getElementById('cohort-table-container');
        if (!tableContainer || tableContainer.children.length > 0) return;

        const table = document.createElement('table');
        table.className = 'cohort-table';

        // Header
        const thead = document.createElement('thead');
        thead.innerHTML = `
      <tr>
        <th>Safra</th>
        <th>M+0</th>
        <th>M+1</th>
        <th>M+2</th>
        <th>M+3</th>
        <th>M+4</th>
        <th>M+5</th>
        <th>M+6</th>
      </tr>
    `;
        table.appendChild(thead);

        // Body
        const tbody = document.createElement('tbody');
        MOCK_DATA.cohortData.forEach(cohort => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td class="cohort-label">${cohort.cohort}</td>
        ${this.createCohortCell(cohort.m0)}
        ${this.createCohortCell(cohort.m1)}
        ${this.createCohortCell(cohort.m2)}
        ${this.createCohortCell(cohort.m3)}
        ${this.createCohortCell(cohort.m4)}
        ${this.createCohortCell(cohort.m5)}
        ${this.createCohortCell(cohort.m6)}
      `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        tableContainer.appendChild(table);
    },

    createCohortCell: function (value) {
        if (value === null) return '<td class="cohort-cell empty">-</td>';
        const color = Utils.getRetentionColor(value);
        return `<td class="cohort-cell" style="background-color: ${color};">${value}%</td>`;
    },

    renderRFMTab: function () {
        // Scatter
        this.destroyChart('rfmScatterChart');
        const ctxS = document.getElementById('rfmScatterChart');
        if (ctxS) {
            // Mock scatter data
            // Since scatter data wasn't in MOCK_DATA originally as a static block but generated, keep generating or move to MOCK_DATA.
            // For consistency, I'll generate here as in original code.
            const scatterData = Array.from({ length: 50 }, () => ({
                x: Math.floor(Math.random() * 60) + 1, // Recency
                y: Math.floor(Math.random() * 5000) + 100, // Monetary
                r: Math.floor(Math.random() * 20) + 2 // Frequency (Radius)
            }));

            this.charts.rfmScatterChart = new Chart(ctxS, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Clientes',
                        data: scatterData,
                        backgroundColor: 'rgba(0, 229, 255, 0.6)',
                        borderColor: '#00E5FF'
                    }]
                },
                options: {
                    ...CONFIG.chartDefaults,
                    scales: {
                        x: {
                            ...CONFIG.chartDefaults.scales.x,
                            title: { display: true, text: 'Recência (Dias)', color: '#A0A0A0' }
                        },
                        y: {
                            ...CONFIG.chartDefaults.scales.y,
                            title: { display: true, text: 'Valor Monetário (R$)', color: '#A0A0A0' }
                        }
                    }
                }
            });
        }

        // Donut
        this.destroyChart('rfmDonutChart');
        const ctxD = document.getElementById('rfmDonutChart');
        if (ctxD) {
            this.charts.rfmDonutChart = new Chart(ctxD, {
                type: 'doughnut',
                data: {
                    labels: MOCK_DATA.rfmSegments.map(s => s.name),
                    datasets: [{
                        data: MOCK_DATA.rfmSegments.map(s => s.pct),
                        backgroundColor: MOCK_DATA.rfmSegments.map(s => s.color),
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'right' } }
                }
            });
        }

        // Table Population
        const tableBody = document.getElementById('rfm-table-body');
        if (tableBody && tableBody.children.length === 0) {
            MOCK_DATA.rfmSegments.forEach(seg => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
             <td><span class="badge" style="color: ${seg.color}; border: 1px solid ${seg.color}">${seg.name}</span></td>
             <td>Definição composta baseada em score</td>
             <td class="numeric">${Utils.formatNumber(seg.count)}</td>
             <td class="numeric">${seg.pct}%</td>
             <td class="numeric">${Utils.formatCurrency(seg.avgValue)}</td>
             <td>${seg.action}</td>
          `;
                tableBody.appendChild(tr);
            });
        }
    },

    renderSalesTab: function () {
        this.destroyChart('salesLineChart');
        const ctxL = document.getElementById('salesLineChart');
        if (ctxL) {
            this.charts.salesLineChart = new Chart(ctxL, {
                type: 'line',
                data: {
                    labels: MOCK_DATA.salesTrend.labels,
                    datasets: [
                        {
                            label: 'Realizado',
                            data: MOCK_DATA.salesTrend.sales,
                            borderColor: '#00E5FF',
                            backgroundColor: 'rgba(0, 229, 255, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Meta',
                            data: MOCK_DATA.salesTrend.target,
                            borderColor: '#CCFF00',
                            borderDash: [5, 5],
                            fill: false
                        }
                    ]
                },
                options: CONFIG.chartDefaults
            });
        }

        this.destroyChart('categoryBarChart');
        const ctxB = document.getElementById('categoryBarChart');
        if (ctxB) {
            this.charts.categoryBarChart = new Chart(ctxB, {
                type: 'bar',
                data: {
                    labels: MOCK_DATA.categories.labels,
                    datasets: [{
                        label: 'Vendas por Categoria',
                        data: MOCK_DATA.categories.values,
                        backgroundColor: ['#00E5FF', '#9D4EDD', '#CCFF00', '#FF6B35', '#06FFA5', '#FF006E'],
                        borderRadius: 4
                    }]
                },
                options: {
                    ...CONFIG.chartDefaults,
                    indexAxis: 'y'
                }
            });
        }
    },

    renderDemoTab: function () {
        this.destroyChart('geoBarChart');
        const ctxG = document.getElementById('geoBarChart');
        if (ctxG) {
            this.charts.geoBarChart = new Chart(ctxG, {
                type: 'bar',
                data: {
                    labels: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'BH', 'Curitiba'],
                    datasets: [{
                        label: 'Clientes',
                        data: [2340, 1850, 920, 780, 650, 580, 520],
                        backgroundColor: 'rgba(0, 229, 255, 0.6)'
                    }]
                },
                options: {
                    ...CONFIG.chartDefaults,
                    indexAxis: 'y'
                }
            });
        }

        this.destroyChart('radarChart');
        const ctxR = document.getElementById('radarChart');
        if (ctxR) {
            this.charts.radarChart = new Chart(ctxR, {
                type: 'radar',
                data: {
                    labels: ['Engajamento', 'Frequência', 'Ticket Médio', 'Recomendação', 'Satisfação'],
                    datasets: [
                        {
                            label: 'Segmento Premium',
                            data: [85, 78, 92, 88, 90],
                            borderColor: '#00E5FF',
                            backgroundColor: 'rgba(0, 229, 255, 0.2)'
                        },
                        {
                            label: 'Segmento Standard',
                            data: [65, 70, 68, 72, 75],
                            borderColor: '#FF00FF',
                            backgroundColor: 'rgba(255, 0, 255, 0.2)'
                        }
                    ]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            grid: { color: 'rgba(255,255,255,0.1)' },
                            angleLines: { color: 'rgba(255,255,255,0.1)' },
                            pointLabels: { color: '#E0E0E0' }
                        }
                    },
                    plugins: { legend: { position: 'bottom' } }
                }
            });
        }
    }
};
