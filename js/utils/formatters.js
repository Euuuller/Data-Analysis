/**
 * Formatter Utility Functions
 * Functions for formatting numbers, currency, dates, etc.
 */

/**
 * Format number as Brazilian currency (R$)
 * @param {number} value - Number to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

/**
 * Format number as percentage
 * @param {number} value - Number to format (0-100 or 0-1)
 * @param {number} decimals - Number of decimal places
 * @param {boolean} isDecimal - If true, value is 0-1, else 0-100
 * @returns {string} Formatted percentage string
 */
export function formatPercentage(value, decimals = 1, isDecimal = false) {
    const percentage = isDecimal ? value * 100 : value;
    return `${percentage.toFixed(decimals)}%`;
}

/**
 * Format large numbers with abbreviations (K, M, B)
 * @param {number} value - Number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted number string
 */
export function formatNumber(value, decimals = 1) {
    if (value === 0) return '0';

    const absValue = Math.abs(value);
    const sign = value < 0 ? '-' : '';

    if (absValue >= 1e9) {
        return sign + (absValue / 1e9).toFixed(decimals) + 'B';
    } else if (absValue >= 1e6) {
        return sign + (absValue / 1e6).toFixed(decimals) + 'M';
    } else if (absValue >= 1e3) {
        return sign + (absValue / 1e3).toFixed(decimals) + 'K';
    }

    return sign + absValue.toLocaleString('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals
    });
}

/**
 * Format number with thousands separator
 * @param {number} value - Number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted number string
 */
export function formatNumberWithSeparator(value, decimals = 0) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

/**
 * Format date to Brazilian format
 * @param {Date|string} date - Date to format
 * @param {string} format - Format type ('short', 'long', 'month')
 * @returns {string} Formatted date string
 */
export function formatDate(date, format = 'short') {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    const formats = {
        short: { day: '2-digit', month: '2-digit', year: 'numeric' },
        long: { day: '2-digit', month: 'long', year: 'numeric' },
        month: { month: 'short', year: 'numeric' }
    };

    return new Intl.DateTimeFormat('pt-BR', formats[format] || formats.short).format(dateObj);
}

/**
 * Format duration in milliseconds to human readable
 * @param {number} ms - Duration in milliseconds
 * @returns {string} Formatted duration string
 */
export function formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncate(text, maxLength = 50) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
}

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
