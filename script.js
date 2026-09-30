// Hero Слайдерын код
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function setSlide(index) {
    showSlide(index);
}

// 5 секунд тутамд автоматаар слайд шилжүүлэх
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}, 5000);