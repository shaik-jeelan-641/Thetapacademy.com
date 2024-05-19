
let currentIndex = 0; // Variable to keep track of the current slide index

// Function to show the current slide and hide others
function showSlides() {
    const slides = document.querySelectorAll('.slide-review-1');
    slides.forEach((slide, index) => {
        if (index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2 || index === currentIndex + 3) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Function to handle the next button click
function next() {
    currentIndex++;
    if (currentIndex > document.querySelectorAll('.slide-review-1').length - 3) {
        currentIndex = 0; // Reset to the first slide if at the end
    }
    showSlides();
}

// Function to handle the previous button click
function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.slide-review-1').length - 3; // Move to the last set of slides if at the beginning
    }
    showSlides();
}
setInterval(next, 2000);


showSlides();