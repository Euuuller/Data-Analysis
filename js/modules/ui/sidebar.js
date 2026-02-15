// ========================================
// SIDEBAR LOGIC
// ========================================
export const SidebarManager = {
    init: function () {
        const mobileToggle = document.getElementById('mobile-toggle');
        const sidebar = document.getElementById('sidebar');

        if (mobileToggle && sidebar) {
            mobileToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }

        // Auto-close on resize if needed or other interaction logic
    },

    close: function () {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
};
