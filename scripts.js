// Простая смена слайда каждые 3 секунды
let current = 0;
const slides = document.querySelectorAll('.hero .hero-slide');
setInterval(() => {
  slides.forEach(s => s.style.opacity = 0);
  current = (current + 1) % slides.length;
  slides[current].style.opacity = 1;
}, 3000);
