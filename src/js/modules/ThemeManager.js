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
}