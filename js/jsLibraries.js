let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
});





