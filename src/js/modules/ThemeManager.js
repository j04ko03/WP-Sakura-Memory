export class ThemeManager {
    constructor() {
        this.loadSavedPreferences();
    }

    loadSavedPreferences() {
        const savedTheme = localStorage.getItem('theme') || 'day';
        const savedColorMode = localStorage.getItem('colorMode') || 'default';
        
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.setAttribute('data-color-mode', savedColorMode);
        this.updateThemeIcon(savedTheme);
    }

    changeTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon(theme);
    }

    setColorMode(mode) {
        document.documentElement.setAttribute('data-color-mode', mode);
        localStorage.setItem('colorMode', mode);
    }

    updateThemeIcon(theme) {
        const icon = theme === 'day' ? '🌞' : '🌙';
        document.getElementById('theme-icon').textContent = icon;
    }

    // NUEVA FUNCIÓN: Actualizar colores dinámicamente
    updatePageColors() {
        const theme = document.documentElement.getAttribute('data-theme');
        const colorMode = document.documentElement.getAttribute('data-color-mode');

        // Cambiar colores de elementos específicos si es necesario
        const header = document.querySelector('.main-header');
        const footer = document.querySelector('footer');

        if (theme === 'night') {
            header.style.backgroundColor = '#333333';
            footer.style.backgroundColor = '#111111';
        } else {
            header.style.backgroundColor = '';
            footer.style.backgroundColor = '';
        }

        // Puedes agregar más lógica aquí para personalizar otros elementos
    }
}