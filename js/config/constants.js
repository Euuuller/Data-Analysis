/**
 * Global Constants
 * Application-wide configuration and constants
 */

// API Configuration (for future use)
export const API_CONFIG = {
    BASE_URL: '/api',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3
};

// Data File Paths
export const DATA_PATHS = {
    COHORT: './assets/data/sample-cohort.json',
    RFM: './assets/data/sample-rfm.json',
    DESCRIPTIVE: './assets/data/sample-descriptive.json'
};

// RFM Segment Definitions
export const RFM_SEGMENTS = {
    CHAMPIONS: {
        name: 'Champions',
        description: 'Melhores clientes - compram frequentemente e recentemente',
        color: '#10b981',
        criteria: { R: [4, 5], F: [4, 5], M: [4, 5] }
    },
    LOYAL: {
        name: 'Loyal Customers',
        description: 'Clientes fiéis - compram regularmente',
        color: '#2563eb',
        criteria: { R: [2, 5], F: [3, 5], M: [3, 5] }
    },
    POTENTIAL_LOYALIST: {
        name: 'Potential Loyalists',
        description: 'Clientes recentes com potencial',
        color: '#06b6d4',
        criteria: { R: [3, 5], F: [1, 3], M: [1, 3] }
    },
    RECENT_CUSTOMERS: {
        name: 'Recent Customers',
        description: 'Compraram recentemente pela primeira vez',
        color: '#8b5cf6',
        criteria: { R: [4, 5], F: [1, 1], M: [1, 1] }
    },
    PROMISING: {
        name: 'Promising',
        description: 'Clientes recentes com bom valor',
        color: '#14b8a6',
        criteria: { R: [3, 4], F: [1, 1], M: [2, 3] }
    },
    NEED_ATTENTION: {
        name: 'Need Attention',
        description: 'Acima da média mas não compraram recentemente',
        color: '#f59e0b',
        criteria: { R: [2, 3], F: [2, 3], M: [2, 3] }
    },
    ABOUT_TO_SLEEP: {
        name: 'About to Sleep',
        description: 'Abaixo da média, risco de perda',
        color: '#f97316',
        criteria: { R: [2, 3], F: [1, 2], M: [1, 2] }
    },
    AT_RISK: {
        name: 'At Risk',
        description: 'Gastaram muito mas há muito tempo',
        color: '#ef4444',
        criteria: { R: [1, 2], F: [2, 5], M: [2, 5] }
    },
    CANT_LOSE: {
        name: "Can't Lose Them",
        description: 'Eram os melhores, mas não compram há tempo',
        color: '#dc2626',
        criteria: { R: [1, 1], F: [4, 5], M: [4, 5] }
    },
    HIBERNATING: {
        name: 'Hibernating',
        description: 'Última compra há muito tempo, baixa frequência',
        color: '#9ca3af',
        criteria: { R: [1, 2], F: [1, 2], M: [1, 2] }
    },
    LOST: {
        name: 'Lost',
        description: 'Clientes perdidos',
        color: '#6b7280',
        criteria: { R: [1, 1], F: [1, 1], M: [1, 1] }
    }
};

// Chart Color Palettes
export const CHART_COLORS = {
    PRIMARY: ['#2563eb', '#60a5fa', '#93c5fd', '#dbeafe'],
    SUCCESS: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
    WARNING: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'],
    DANGER: ['#ef4444', '#f87171', '#fca5a5', '#fecaca'],
    MIXED: ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
};

// Date Format Options
export const DATE_FORMATS = {
    SHORT: 'DD/MM/YYYY',
    LONG: 'DD de MMMM de YYYY',
    MONTH_YEAR: 'MMM/YYYY'
};

// Number Format Options
export const NUMBER_FORMATS = {
    CURRENCY: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    },
    PERCENTAGE: {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    },
    DECIMAL: {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }
};

// Cohort Analysis Periods
export const COHORT_PERIODS = {
    '6m': { label: 'Últimos 6 meses', months: 6 },
    '12m': { label: 'Últimos 12 meses', months: 12 },
    '24m': { label: 'Últimos 24 meses', months: 24 }
};

// Chart Default Heights
export const CHART_HEIGHTS = {
    SMALL: 250,
    MEDIUM: 350,
    LARGE: 450,
    XLARGE: 550
};

// Animation Durations (ms)
export const ANIMATION_DURATION = {
    FAST: 200,
    NORMAL: 400,
    SLOW: 600
};

// Breakpoints (must match CSS)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536
};
