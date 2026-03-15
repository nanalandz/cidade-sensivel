function loadComponent(id, file) {
    fetch(file).then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;

        if (id === "navbar") {
            initNavbar();
        }
    });
}

function initNavbar() {
    document.querySelectorAll(".submenu-toggle").forEach(btn => {
        btn.addEventListener("click", function () {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("submenu-open");
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar", "src/components/navbar.html");
    loadComponent("rodape-holder", "src/components/rodape.html");
})