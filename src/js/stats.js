document.addEventListener("DOMContentLoaded", () => {
    const charts = document.querySelectorAll(".circle-chart");

    charts.forEach(chart => {
        const value = parseInt(chart.getAttribute("data-value"), 10);
        const max = parseInt(chart.getAttribute("data-max"), 10);
        const percentage = Math.min((value / max) * 100, 100); // Calcula el porcentaje (máximo 100%)

        const circle = chart.querySelector(".circle");
        circle.style.setProperty("--progress-value", `${percentage}`);

        // Aplica solo la animación progresiva
        circle.style.animation = `progress 2s ease-out forwards`;
    });
});