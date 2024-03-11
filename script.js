// createCarousel(document.querySelector('.carousel'), 4300, true);
createCarousel(document.querySelector('.carousel:nth-of-type(2)'), 0, false);

function createCarousel(rootElement, time, isCycled) {

  const buttonRight = rootElement.querySelector('.carousel__button:nth-of-type(2)');
  buttonRight.addEventListener('click', moveRight);
  const buttonLeft = rootElement.querySelector('.carousel__button:nth-of-type(1)');
  buttonLeft.addEventListener('click', moveLeft);

  let carouselCurrent = rootElement.querySelector('.carousel__current');
  const totalSlides = rootElement.querySelectorAll('.carousel__slide').length;

  const slides = rootElement.querySelector('.carousel__viewport');
  let currentSlide = 1;

  if (time) {
    setInterval(() => buttonRight.click(), time);
  }

  if (!isCycled) {
    buttonLeft.style.visibility = 'hidden';
  }

  function moveRight() {
    if (currentSlide === totalSlides) {
      currentSlide = 1;
    } else {
      currentSlide = currentSlide + 1;
    }
    carouselCurrent.textContent = currentSlide;
    slides.style.transform = 'translateX(' + (currentSlide - 1) * (-100) + '%)';
    if (currentSlide === totalSlides && isCycled === false) {
      buttonRight.style.visibility = 'hidden';
    }
    if (currentSlide !== 1 && isCycled === false) {
      buttonLeft.style.visibility = 'visible';

    }
  }

  function moveLeft() {
    if (currentSlide === 1) {
      currentSlide = totalSlides;
    } else {
      currentSlide = currentSlide - 1;
    }
    carouselCurrent.textContent = currentSlide;
    slides.style.transform = 'translateX(' + (currentSlide - 1) * (-100) + '%)'
    if (currentSlide !== totalSlides && isCycled === false) {
      buttonRight.style.visibility = 'visible';
    }

    if (currentSlide === 1 && isCycled === false) {
      buttonLeft.style.visibility = 'hidden';
    }
  }




}

