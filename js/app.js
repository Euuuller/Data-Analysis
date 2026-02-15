/**
 * Application Entry Point
 * Initializes the dashboard application with routing and state management
 */

import { Router } from './core/router.js';
import { State } from './core/state.js';
import { Navigation } from './components/navigation.js';
import { Presentation } from './sections/presentation.js';
import { BusinessProblem } from './sections/businessProblem.js';
import { CohortAnalysis } from './sections/cohortAnalysis.js';
import { RFMAnalysis } from './sections/rfmAnalysis.js';
import { DescriptiveA } from './sections/descriptiveA.js';
import { DescriptiveB } from './sections/descriptiveB.js';

class DashboardApp {
    constructor() {
        this.state = new State();
        this.router = new Router();
        this.init();
    }

    init() {
        // Register all routes
        this.router.registerRoutes({
            '/': Presentation,
            '/problem': BusinessProblem,
            '/cohort': CohortAnalysis,
            '/rfm': RFMAnalysis,
            '/descriptive-a': DescriptiveA,
            '/descriptive-b': DescriptiveB
        });

        // Initialize navigation component
        new Navigation(this.router);

        // Setup theme toggle
        this.setupThemeToggle();

        // Setup mobile menu
        this.setupMobileMenu();

        // Navigate to initial route
        this.router.navigate(window.location.hash || '/');
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                themeToggle.querySelector('span').textContent = newTheme === 'dark' ? '☀️' : '🌙';
            });

            // Load saved theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                themeToggle.querySelector('span').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
            }
        }
    }

    setupMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const backdrop = document.getElementById('backdrop');

        if (sidebarToggle && sidebar && backdrop) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                backdrop.classList.toggle('active');
                sidebarToggle.classList.toggle('active');
            });

            backdrop.addEventListener('click', () => {
                sidebar.classList.remove('open');
                backdrop.classList.remove('active');
                sidebarToggle.classList.remove('active');
            });
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DashboardApp();
});
