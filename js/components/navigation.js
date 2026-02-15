/**
 * Navigation Component
 * Handles sidebar navigation and active link highlighting
 */

export class Navigation {
    constructor(router) {
        this.router = router;
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        // Add click listeners to nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.router.navigate(route);
                this.updateActiveLink(route);
                this.closeMobileMenu();
            });
        });

        // Set initial active link
        const currentPath = window.location.hash.slice(1) || '/';
        this.updateActiveLink(currentPath);

        // Listen for route changes
        window.addEventListener('hashchange', () => {
            const path = window.location.hash.slice(1) || '/';
            this.updateActiveLink(path);
        });
    }

    /**
     * Update active link styling
     * @param {string} path - Current route path
     */
    updateActiveLink(path) {
        this.navLinks.forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            if (linkRoute === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Close mobile menu after navigation
     */
    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('backdrop');
        const toggle = document.getElementById('sidebar-toggle');

        if (sidebar && backdrop && toggle) {
            sidebar.classList.remove('open');
            backdrop.classList.remove('active');
            toggle.classList.remove('active');
        }
    }
}
