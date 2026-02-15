// ========================================
// APP ENTRY POINT
// ========================================
import { NavigationManager } from './modules/ui/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização
    NavigationManager.init();

    const updateEl = document.getElementById('last-update');
    if (updateEl) {
        updateEl.textContent = 'Última atualização: ' + new Date().toLocaleString('pt-BR');
    }

    console.log('✅ Dashboard Analytics Ultra Dark - Initialized (Modular)');
});
