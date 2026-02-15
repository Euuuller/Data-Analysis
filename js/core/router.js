/**
 * Router Module
 * Handles hash-based routing for single-page application
 */

export class Router {
    constructor() {
        this.routes = {};
        this.currentSection = null;
        this.currentPath = null;

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    /**
     * Register routes with their corresponding section classes
     * @param {Object} routes - Object mapping paths to section classes
     */
    registerRoutes(routes) {
        this.routes = routes;
    }

    /**
     * Navigate to a specific path
     * @param {string} path - Route path to navigate to
     */
    navigate(path) {
        // Normalize path
        const normalizedPath = path.startsWith('#') ? path.slice(1) : path;
        window.location.hash = normalizedPath;
    }

    /**
     * Handle route changes
     */
    handleRoute() {
        const path = window.location.hash.slice(1) || '/';

        // Prevent re-rendering same section
        if (path === this.currentPath) {
            return;
        }

        const SectionClass = this.routes[path];

        if (SectionClass) {
            this.currentPath = path;
            this.renderSection(new SectionClass());
            this.updateBreadcrumb(path);
        } else {
            console.warn(`Route not found: ${path}`);
            this.navigate('/');
        }
    }

    /**
     * Render a section
     * @param {Object} section - Section instance to render
     */
    renderSection(section) {
        // Cleanup previous section
        if (this.currentSection?.destroy) {
            this.currentSection.destroy();
        }

        // Render new section
        this.currentSection = section;
        section.render();
    }

    /**
     * Update breadcrumb based on current path
     * @param {string} path - Current route path
     */
    updateBreadcrumb(path) {
        const breadcrumbMap = {
            '/': 'Apresentação',
            '/problem': 'Problema de Negócio',
            '/cohort': 'Análise de Cohort',
            '/rfm': 'Segmentação RFM',
            '/descriptive-a': 'Análise Descritiva A',
            '/descriptive-b': 'Análise Descritiva B'
        };

        const currentSection = document.getElementById('current-section');
        if (currentSection) {
            currentSection.textContent = breadcrumbMap[path] || 'Dashboard';
        }
    }

    /**
     * Get current route path
     * @returns {string} Current path
     */
    getCurrentPath() {
        return this.currentPath;
    }
}
