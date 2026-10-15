document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkTheme = document.body.classList.toggle('dark-theme');
            themeToggle.setAttribute('aria-pressed', String(isDarkTheme));
            themeToggle.setAttribute(
                'aria-label',
                isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'
            );
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('ph-sun', isDarkTheme);
                icon.classList.toggle('ph-moon', !isDarkTheme);
            }
        });
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute(
                'aria-label',
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
            );
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('ph-list', !isOpen);
                icon.classList.toggle('ph-x', isOpen);
            }
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('ph-list');
                    icon.classList.remove('ph-x');
                }
            });
        });
    }
});
