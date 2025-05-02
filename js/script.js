const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) currentIndex = slides.length - 1;
  else if (index >= slides.length) currentIndex = 0;
  else currentIndex = index;

  carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(() => {
  showSlide(currentIndex + 1);
}, 6000);
