// menu sanduíche

function toggleMenu() {
    const menu = document.getElementById("menu-list");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("show")

    toggle.classList.toggle("active");
}

// Carrocel

let count = 1;
document.getElementById("radio1").checked = true;

let timer = setInterval(function() {
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

function resetTimer(n) {
    count = n;
    clearInterval(timer);
    timer = setInterval(function() {
        nextImage();
    }, 5000);
}