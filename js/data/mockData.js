// ========================================
// DADOS MOCKADOS (Mock Data Layer)
// ========================================
export const MOCK_DATA = {
    kpis: {
        revenue: { value: 2456780, growth: 12.5 },
        customers: { value: 8947, growth: 8.2 },
        conversion: { value: 3.47, growth: -0.3 },
        nps: { value: 72, growth: 5 }
    },

    salesTrend: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        sales: [120000, 135000, 142000, 138000, 155000, 168000, 172000, 181000, 175000, 189000, 198000, 210000],
        target: [130000, 132000, 135000, 140000, 145000, 150000, 160000, 165000, 170000, 180000, 190000, 200000]
    },

    categories: {
        labels: ['Eletrônicos', 'Vestuário', 'Alimentos', 'Livros', 'Casa & Jardim', 'Esportes'],
        values: [450000, 380000, 320000, 180000, 165000, 142000]
    },

    cohortData: [
        { cohort: 'Jan/24', m0: 100, m1: 73, m2: 58, m3: 49, m4: 44, m5: 41, m6: 38 },
        { cohort: 'Fev/24', m0: 100, m1: 75, m2: 61, m3: 52, m4: 47, m5: 43, m6: null },
        { cohort: 'Mar/24', m0: 100, m1: 72, m2: 59, m3: 51, m4: 46, m5: null, m6: null },
        { cohort: 'Abr/24', m0: 100, m1: 71, m2: 57, m3: 48, m4: null, m5: null, m6: null },
        { cohort: 'Mai/24', m0: 100, m1: 76, m2: 63, m3: null, m4: null, m5: null, m6: null },
        { cohort: 'Jun/24', m0: 100, m1: 74, m2: null, m3: null, m4: null, m5: null, m6: null },
    ],

    rfmSegments: [
        { name: 'Campeões', count: 2684, pct: 30, avgValue: 5200, action: 'Upsell & Rewards', color: '#CCFF00' },
        { name: 'Leais', count: 2237, pct: 25, avgValue: 3800, action: 'Engajamento Contínuo', color: '#00E5FF' },
        { name: 'Em Risco', count: 1342, pct: 15, avgValue: 2100, action: 'Reativar Urgente', color: '#FF6B35' },
        { name: 'Novos', count: 1611, pct: 18, avgValue: 1200, action: 'Onboarding', color: '#FF00FF' },
        { name: 'Hibernando', count: 1073, pct: 12, avgValue: 450, action: 'Win-back Campaign', color: '#666666' }
    ]
};
