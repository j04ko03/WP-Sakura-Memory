export function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');

    if (!preloader || !mainContent) {
        console.error('Preloader or main content not found in the DOM.');
        return;
    }

    // Esperar a que la página cargue completamente
    window.addEventListener('load', () => {
        // Esperar a que las animaciones del preloader terminen
        const logo = preloader.querySelector('.logo');
        logo.addEventListener('animationend', () => {
            preloader.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');

            // Eliminar el preloader del DOM después de la transición
            preloader.addEventListener('transitionend', () => {
                preloader.remove();
            });
        });
    });

    // Sistema de respaldo: eliminar el preloader después de 3 segundos si algo falla
    setTimeout(() => {
        preloader.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');
        preloader.remove();
    }, 3000);
}