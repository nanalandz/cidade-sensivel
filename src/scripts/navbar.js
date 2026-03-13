// menu sanduíche
function toggleMenu() {
    const menu = document.getElementById("menu-list");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("show")

    toggle.classList.toggle("active");
}