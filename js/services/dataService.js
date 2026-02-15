/**
 * Data Service
 * Handles data loading and caching
 */

import { DATA_PATHS } from '../config/constants.js';

class DataService {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Fetch data from JSON file
     * @param {string} path - Path to JSON file
     * @param {boolean} useCache - Whether to use cached data
     * @returns {Promise<Object>} Data object
     */
    async fetchData(path, useCache = true) {
        // Check cache first
        if (useCache && this.cache.has(path)) {
            return this.cache.get(path);
        }

        try {
            const response = await fetch(path);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Cache the data
            this.cache.set(path, data);

            return data;
        } catch (error) {
            console.error(`Error fetching data from ${path}:`, error);
            throw error;
        }
    }

    /**
     * Load cohort data
     * @returns {Promise<Object>} Cohort data
     */
    async loadCohortData() {
        return this.fetchData(DATA_PATHS.COHORT);
    }

    /**
     * Load RFM data
     * @returns {Promise<Object>} RFM data
     */
    async loadRFMData() {
        return this.fetchData(DATA_PATHS.RFM);
    }

    /**
     * Load descriptive data
     * @returns {Promise<Object>} Descriptive data
     */
    async loadDescriptiveData() {
        return this.fetchData(DATA_PATHS.DESCRIPTIVE);
    }

    /**
     * Clear cache
     * @param {string} path - Optional specific path to clear
     */
    clearCache(path = null) {
        if (path) {
            this.cache.delete(path);
        } else {
            this.cache.clear();
        }
    }

    /**
     * Preload all data
     * @returns {Promise<void>}
     */
    async preloadAll() {
        try {
            await Promise.all([
                this.loadCohortData(),
                this.loadRFMData(),
                this.loadDescriptiveData()
            ]);
            console.log('All data preloaded successfully');
        } catch (error) {
            console.error('Error preloading data:', error);
        }
    }
}

// Export singleton instance
export const dataService = new DataService();
