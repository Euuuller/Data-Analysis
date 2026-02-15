/**
 * Chart.js Configuration
 * Global chart defaults and common configurations
 */

import { CHART_COLORS } from './constants.js';

// Set Chart.js global defaults
if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#6b7280';
    Chart.defaults.responsive = true;
    Chart.defaults.maintainAspectRatio = false;
}

/**
 * Common chart options
 */
export const CHART_DEFAULTS = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    family: 'Inter',
                    size: 12,
                    weight: '500'
                },
                usePointStyle: true,
                padding: 16,
                color: '#374151'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: 12,
            titleFont: {
                size: 14,
                weight: '600'
            },
            bodyFont: {
                size: 13
            },
            cornerRadius: 8,
            displayColors: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 11
                },
                color: '#9ca3af'
            }
        },
        y: {
            grid: {
                color: 'rgba(0, 0, 0, 0.05)',
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 11
                },
                color: '#9ca3af'
            }
        }
    }
};

/**
 * Line chart configuration
 */
export const LINE_CHART_CONFIG = {
    ...CHART_DEFAULTS,
    elements: {
        line: {
            tension: 0.4,
            borderWidth: 2
        },
        point: {
            radius: 4,
            hoverRadius: 6,
            borderWidth: 2,
            backgroundColor: '#ffffff'
        }
    }
};

/**
 * Bar chart configuration
 */
export const BAR_CHART_CONFIG = {
    ...CHART_DEFAULTS,
    elements: {
        bar: {
            borderRadius: 6,
            borderWidth: 0
        }
    }
};

/**
 * Pie/Doughnut chart configuration
 */
export const PIE_CHART_CONFIG = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                font: {
                    family: 'Inter',
                    size: 12
                },
                padding: 16,
                usePointStyle: true,
                generateLabels: (chart) => {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map((label, i) => {
                            const value = data.datasets[0].data[i];
                            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return {
                                text: `${label} (${percentage}%)`,
                                fillStyle: data.datasets[0].backgroundColor[i],
                                hidden: false,
                                index: i
                            };
                        });
                    }
                    return [];
                }
            }
        },
        tooltip: {
            ...CHART_DEFAULTS.plugins.tooltip,
            callbacks: {
                label: function (context) {
                    const label = context.label || '';
                    const value = context.parsed;
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${label}: ${value.toLocaleString('pt-BR')} (${percentage}%)`;
                }
            }
        }
    }
};

/**
 * Get color palette for charts
 * @param {string} type - Color palette type
 * @param {number} count - Number of colors needed
 * @returns {Array} Array of color strings
 */
export function getChartColors(type = 'MIXED', count = 6) {
    const palette = CHART_COLORS[type] || CHART_COLORS.MIXED;

    if (count <= palette.length) {
        return palette.slice(0, count);
    }

    // Generate more colors if needed
    const colors = [...palette];
    while (colors.length < count) {
        colors.push(...palette);
    }

    return colors.slice(0, count);
}

/**
 * Create gradient for chart backgrounds
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @param {string} color - Base color
 * @returns {CanvasGradient} Gradient object
 */
export function createGradient(ctx, color) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color + '80');
    gradient.addColorStop(1, color + '00');
    return gradient;
}
