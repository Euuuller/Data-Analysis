/**
 * State Management Module
 * Centralized state management with observable pattern
 */

export class State {
    constructor() {
        this.data = {
            filters: {
                dateRange: null,
                segment: 'all',
                channel: 'all',
                cohortPeriod: '12m'
            },
            cache: {},
            user: {
                theme: 'light'
            }
        };
        this.listeners = [];
    }

    /**
     * Subscribe to state changes
     * @param {Function} listener - Callback function to be called on state changes
     * @returns {Function} Unsubscribe function
     */
    subscribe(listener) {
        this.listeners.push(listener);

        // Return unsubscribe function
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    /**
     * Update state at a specific path
     * @param {string} path - Dot-notation path to update (e.g., 'filters.dateRange')
     * @param {*} value - New value
     */
    update(path, value) {
        const keys = path.split('.');
        let current = this.data;

        // Navigate to the parent of the target property
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }

        // Update the value
        current[keys[keys.length - 1]] = value;

        // Notify listeners
        this.notify();
    }

    /**
     * Get state value at a specific path
     * @param {string} path - Dot-notation path (e.g., 'filters.dateRange')
     * @returns {*} Value at path
     */
    get(path) {
        const keys = path.split('.');
        let current = this.data;

        for (const key of keys) {
            if (current === undefined || current === null) {
                return undefined;
            }
            current = current[key];
        }

        return current;
    }

    /**
     * Get entire state
     * @returns {Object} Complete state object
     */
    getState() {
        return this.data;
    }

    /**
     * Set entire state (use with caution)
     * @param {Object} newState - New state object
     */
    setState(newState) {
        this.data = newState;
        this.notify();
    }

    /**
     * Notify all listeners of state changes
     */
    notify() {
        this.listeners.forEach(listener => {
            try {
                listener(this.data);
            } catch (error) {
                console.error('Error in state listener:', error);
            }
        });
    }

    /**
     * Reset filters to default
     */
    resetFilters() {
        this.data.filters = {
            dateRange: null,
            segment: 'all',
            channel: 'all',
            cohortPeriod: '12m'
        };
        this.notify();
    }
}
