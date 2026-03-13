// backToTop BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// MAIN

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