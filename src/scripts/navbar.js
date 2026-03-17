// menu sanduíche

function toggleMenu() {
    const menu = document.getElementById("menu-list");
    const toggle = document.querySelector(".menu-toggle");

    if (menu && toggle) {
        menu.classList.toggle("show")
        toggle.classList.toggle("active");
    }
};

document.addEventListener("click", function() {
    const menu = document.getElementById("menu-list");
    const toggle = document.querySelector(".menu-toggle");
    const subtoggle = document.querySelector(".expo_submenu");

    if (event.target.closest("#menu-list a")) {
        menu.classList.remove("show");
        toggle.classList.remove("active");
        subtoggle.classList.remove("submenu-open");
    }
});