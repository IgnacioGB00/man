document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close");

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none"; // Oculta el popup
    });
});
