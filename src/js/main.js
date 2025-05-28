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

document.addEventListener('DOMContentLoaded', () => {
    const reviewsTab = document.getElementById('reviewsTab');
    const faqsTab = document.getElementById('faqsTab');
    const reviewsContent = document.getElementById('reviewsContent');
    const faqsContent = document.getElementById('faqsContent');

    // Cambiar entre Reviews y FAQs
    reviewsTab.addEventListener('click', () => {
        reviewsTab.classList.add('active');
        faqsTab.classList.remove('active');
        reviewsContent.classList.remove('hidden');
        faqsContent.classList.add('hidden');
    });

    faqsTab.addEventListener('click', () => {
        faqsTab.classList.add('active');
        reviewsTab.classList.remove('active');
        faqsContent.classList.remove('hidden');
        reviewsContent.classList.add('hidden');
    });

    // Acordeón para las FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const sectionTitle = document.querySelector('.section-title'); // Selecciona el título de la sección

    const titles = [
        "Novedad 1",
        "Novedad 2",
        "Novedad 3",
        "Novedad 4"
    ];

    let currentIndex = 0;

    // Función para mover el carrusel
    const moveToItem = (index) => {
        const itemWidth = items[0].getBoundingClientRect().width; // Calcula el ancho dinámicamente
        track.style.transform = `translateX(-${index * itemWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        sectionTitle.textContent = titles[index]; // Cambia el título de la sección
        currentIndex = index;
    };

    // Botón siguiente
    nextButton.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % items.length;
        moveToItem(nextIndex);
    });

    // Botón anterior
    prevButton.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        moveToItem(prevIndex);
    });

    // Navegación con los puntos
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index, 10);
            moveToItem(index);
        });
    });

    // Ajustar el carrusel al tamaño de la pantalla al cargar y al redimensionar
    window.addEventListener('resize', () => moveToItem(currentIndex));
});