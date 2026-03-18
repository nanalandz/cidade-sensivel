// Abre imagem na frente da tela (modal e img)
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-zoom");
    const closeModal = document.querySelector(".close-modal");
    const body = document.body;

    const images = document.querySelectorAll(".card .fotos img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            console.log("Clique detectado na imagem: ", this.src); //test log
            modal.style.display = "block";
            modalImg.src = this.src;
            body.classList.add("no-scroll");
        });
    });

    function closeImage() {
        modal.style.display = "none";
        body.classList.remove("no-scroll");
    }

    closeModal.addEventListener("click", closeImage);

    modal.addEventListener("click", function (event) {
        if (event.target !== modalImg) {
            closeImage();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeImage()
        }
    });
});