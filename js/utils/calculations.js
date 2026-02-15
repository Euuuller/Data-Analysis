/**
 * Calculation Utility Functions
 * Statistical and business logic calculations
 */

/**
 * Calculate mean (average) of an array of numbers
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Mean value
 */
export function mean(values) {
    if (!values || values.length === 0) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
}

/**
 * Calculate median of an array of numbers
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Median value
 */
export function median(values) {
    if (!values || values.length === 0) return 0;

    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

/**
 * Calculate standard deviation
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Standard deviation
 */
export function standardDeviation(values) {
    if (!values || values.length === 0) return 0;

    const avg = mean(values);
    const squareDiffs = values.map(value => Math.pow(value - avg, 2));
    const avgSquareDiff = mean(squareDiffs);

    return Math.sqrt(avgSquareDiff);
}

/**
 * Calculate percentile
 * @param {Array<number>} values - Array of numbers
 * @param {number} percentile - Percentile to calculate (0-100)
 * @returns {number} Percentile value
 */
export function percentile(values, percentile) {
    if (!values || values.length === 0) return 0;

    const sorted = [...values].sort((a, b) => a - b);
    const index = (percentile / 100) * (sorted.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    const weight = index - lower;

    return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}

/**
 * Calculate retention rate
 * @param {number} activeUsers - Number of active users
 * @param {number} totalUsers - Total number of users
 * @returns {number} Retention rate (0-100)
 */
export function calculateRetentionRate(activeUsers, totalUsers) {
    if (totalUsers === 0) return 0;
    return (activeUsers / totalUsers) * 100;
}

/**
 * Calculate RFM score for a single dimension
 * @param {number} value - Value to score
 * @param {Array<number>} quartiles - Quartile boundaries [Q1, Q2, Q3, Q4]
 * @param {boolean} reverse - If true, lower values get higher scores
 * @returns {number} Score (1-5)
 */
export function calculateRFMScore(value, quartiles, reverse = false) {
    let score;

    if (value <= quartiles[0]) score = 1;
    else if (value <= quartiles[1]) score = 2;
    else if (value <= quartiles[2]) score = 3;
    else if (value <= quartiles[3]) score = 4;
    else score = 5;

    return reverse ? 6 - score : score;
}

/**
 * Calculate Customer Lifetime Value (LTV)
 * @param {number} avgOrderValue - Average order value
 * @param {number} purchaseFrequency - Purchases per year
 * @param {number} customerLifespan - Customer lifespan in years
 * @returns {number} LTV value
 */
export function calculateLTV(avgOrderValue, purchaseFrequency, customerLifespan) {
    return avgOrderValue * purchaseFrequency * customerLifespan;
}

/**
 * Calculate churn rate
 * @param {number} customersLost - Number of customers lost
 * @param {number} totalCustomers - Total customers at start
 * @returns {number} Churn rate (0-100)
 */
export function calculateChurnRate(customersLost, totalCustomers) {
    if (totalCustomers === 0) return 0;
    return (customersLost / totalCustomers) * 100;
}

/**
 * Calculate growth rate
 * @param {number} currentValue - Current value
 * @param {number} previousValue - Previous value
 * @returns {number} Growth rate (percentage)
 */
export function calculateGrowthRate(currentValue, previousValue) {
    if (previousValue === 0) return 0;
    return ((currentValue - previousValue) / previousValue) * 100;
}

/**
 * Calculate correlation coefficient between two arrays
 * @param {Array<number>} x - First array
 * @param {Array<number>} y - Second array
 * @returns {number} Correlation coefficient (-1 to 1)
 */
export function correlation(x, y) {
    if (!x || !y || x.length !== y.length || x.length === 0) return 0;

    const n = x.length;
    const meanX = mean(x);
    const meanY = mean(y);

    let numerator = 0;
    let denomX = 0;
    let denomY = 0;

    for (let i = 0; i < n; i++) {
        const diffX = x[i] - meanX;
        const diffY = y[i] - meanY;
        numerator += diffX * diffY;
        denomX += diffX * diffX;
        denomY += diffY * diffY;
    }

    const denominator = Math.sqrt(denomX * denomY);
    return denominator === 0 ? 0 : numerator / denominator;
}

/**
 * Sum array of numbers
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Sum
 */
export function sum(values) {
    if (!values || values.length === 0) return 0;
    return values.reduce((total, val) => total + val, 0);
}

/**
 * Find minimum value in array
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Minimum value
 */
export function min(values) {
    if (!values || values.length === 0) return 0;
    return Math.min(...values);
}

/**
 * Find maximum value in array
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Maximum value
 */
export function max(values) {
    if (!values || values.length === 0) return 0;
    return Math.max(...values);
}
