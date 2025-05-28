const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");

window.onload = function() {
    overlay.classList.add("active");
};

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
});
