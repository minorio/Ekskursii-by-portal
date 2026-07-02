//Slider

const track = document.getElementById("reviews-track");
const btnPrev = document.getElementById("review-prev");
const btnNext = document.getElementById("review-next");
const slides = document.querySelectorAll(".slider-reviews__slide");

if (track && btnPrev && btnNext && slides.length > 0) {
  let currentIndex = 0;

  const getVisibleCount = () => (window.innerWidth >= 1024 ? 2 : 1);

  function moveSlider() {
    const step = getVisibleCount() === 2 ? 50 : 100;
    track.style.transform = `translateX(-${currentIndex * step}%)`;
    updateButtons();
  }

  function updateButtons() {
    const maxIndex = slides.length - getVisibleCount();

    btnPrev.style.opacity = currentIndex <= 0 ? "0.5" : "1";
    btnPrev.style.pointerEvents = currentIndex <= 0 ? "none" : "all";
    btnNext.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
    btnNext.style.pointerEvents = currentIndex >= maxIndex ? "none" : "all";
  }

  btnNext.addEventListener("click", () => {
    const maxIndex = slides.length - getVisibleCount();
    if (currentIndex < maxIndex) {
      currentIndex++;
      moveSlider();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlider();
    }
  });

  window.addEventListener("resize", () => {
    currentIndex = 0;
    moveSlider();
  });

  updateButtons();
}
