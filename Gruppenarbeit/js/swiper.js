/**
 * SLIDER WITH SWIPERJS
 * 1. Read the get started guide at https://swiperjs.com/get-started/
 * 2. Initialize the swiper element with the class ".swiper-container" with pagination as type fraction
 * 
 * https://swiperjs.com/api/
 * https://swiperjs.com/demos/
 * 
 */


document.addEventListener('DOMContentLoaded', init);

function init() {
 // console.log('DOM ready');
  document.querySelector(".swiper-button-next").style.color="#718096";
  document.querySelector(".swiper-button-prev").style.color="#718096";

  
  
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  mySwiper.slideNext();
}

