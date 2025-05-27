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

        // Restablecer el modo de color al valor predeterminado
        if (theme === 'day' || theme === 'night') {
            document.documentElement.setAttribute('data-color-mode', 'default');
            localStorage.setItem('colorMode', 'default');
        }

        this.updateThemeIcon(theme);
        this.updatePageColors(); // Asegúrate de actualizar los colores dinámicamente
    }

    setColorMode(mode) {
        document.documentElement.setAttribute('data-color-mode', mode);
        localStorage.setItem('colorMode', mode);
        this.updatePageColors();
    }

    updateThemeIcon(theme) {
        const icon = theme === 'day' ? '🌞' : '🌙';
        document.getElementById('theme-icon').textContent = icon;
    }

    // NUEVA FUNCIÓN: Actualizar colores dinámicamente
    updatePageColors() {
        const theme = document.documentElement.getAttribute('data-theme');
        const colorMode = document.documentElement.getAttribute('data-color-mode');

        const header = document.querySelector('.main-header');
        const footer = document.querySelector('footer');

        // Cambiar colores según el tema y el modo de color
        if (theme === 'night') {
            header.style.backgroundColor = '#333333';
            footer.style.backgroundColor = '#111111';
        } else if (theme === 'day') {
            header.style.backgroundColor = '';
            footer.style.backgroundColor = '';
        }

        // Opcional: Cambiar colores adicionales según el modo de color
        if (colorMode === 'protanopia') {
            document.body.style.filter = 'protanopia-filter'; // Ejemplo
        } else if (colorMode === 'deuteranopia') {
            document.body.style.filter = 'deuteranopia-filter'; // Ejemplo
        } else {
            document.body.style.filter = ''; // Restablecer
        }
    }
}