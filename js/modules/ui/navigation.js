// ========================================
// GERENCIADOR DE NAVEGAÇÃO
// ========================================
import { ChartRenderer } from '../charts/renderer.js';
import { SidebarManager } from './sidebar.js';

export const NavigationManager = {
    currentTab: 'tab-home',

    init: function () {
        // Desktop nav
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = item.dataset.tab;
                this.switchTab(targetTab);

                // Mobile: close sidebar on click
                SidebarManager.close();
            });
        });

        // Initialize sidebar logic
        SidebarManager.init();

        // Ativar tab inicial
        this.switchTab(this.currentTab);
    },

    switchTab: function (tabId) {
        // Ocultar todas as tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Deactivate nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Ativar tab selecionada
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('active');

            // Activate Item
            const navItem = document.querySelector(`[data-tab="${tabId}"]`);
            if (navItem) navItem.classList.add('active');

            // Renderizar conteúdo (lazy loading logic simulation)
            this.renderTabContent(tabId);

            this.currentTab = tabId;
        }
    },

    renderTabContent: function (tabId) {
        // Sempre garantimos renderização quando a tab abre
        if (tabId === 'tab-home') ChartRenderer.renderHomeTab();
        if (tabId === 'tab-problem') ChartRenderer.renderProblemTab();
        if (tabId === 'tab-cohort') ChartRenderer.renderCohortTab();
        if (tabId === 'tab-rfm') ChartRenderer.renderRFMTab();
        if (tabId === 'tab-sales') ChartRenderer.renderSalesTab();
        if (tabId === 'tab-demo') ChartRenderer.renderDemoTab();
    }
};
