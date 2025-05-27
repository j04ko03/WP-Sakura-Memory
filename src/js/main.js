import { initPreloader } from './modules/Preloader.js';
import { ThemeManager } from './modules/ThemeManager.js';

// Inicializar componentes
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    const themeManager = new ThemeManager();
    
    // Exponer funciones globales para los botones
    window.changeTheme = (theme) => {
        themeManager.changeTheme(theme);
        themeManager.updatePageColors(); // Actualizar colores dinámicamente
    };

    window.setColorMode = (mode) => {
        themeManager.setColorMode(mode);
        themeManager.updatePageColors(); // Actualizar colores dinámicamente
    };
});

// Dropdown funcionalidad
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('themeDropdownBtn');
    const content = document.getElementById('themeDropdownContent');
    
    btn.onclick = function(e) {
        e.stopPropagation();
        content.classList.toggle('show');
    };
    
    document.body.onclick = function() {
        content.classList.remove('show');
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('themeDropdownBtn');
    const content = document.getElementById('themeDropdownContent');
    btn.onclick = function(e) {
        e.stopPropagation();
        content.classList.toggle('show');
    };
        document.body.onclick = function() {
        content.classList.remove('show');
    };
});