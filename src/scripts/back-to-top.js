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