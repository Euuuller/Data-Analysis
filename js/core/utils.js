// ========================================
// UTILITIES (Helper Functions)
// ========================================
export const Utils = {
    formatCurrency: (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0
        }).format(value);
    },

    formatNumber: (value) => {
        return new Intl.NumberFormat('pt-BR').format(value);
    },

    formatPercent: (value) => {
        return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
    },

    getRetentionColor: (percentage) => {
        if (percentage >= 70) return '#CCFF00'; // Lime
        if (percentage >= 50) return '#06FFA5'; // Teal
        if (percentage >= 30) return '#FFBA08'; // Amber
        if (percentage >= 15) return '#FF6B35'; // Orange
        return '#FF006E'; // Pink
    }
};
