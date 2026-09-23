const galleryImages = document.querySelectorAll("#galeri img");
const galleryModal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const closeGalleryModal = document.getElementById("closeGalleryModal");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        galleryModal.classList.remove("hidden");
    });
});

closeGalleryModal.addEventListener("click", () => {
    galleryModal.classList.add("hidden");
});