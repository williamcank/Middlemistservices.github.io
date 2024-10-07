document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Change slides every 8 seconds
    setInterval(nextSlide, 8000);
});
