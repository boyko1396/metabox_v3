import Swiper, { Navigation, Pagination } from 'swiper';

class SliderInit {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    Swiper.use([Navigation, Pagination]);
    this.init();
  }

  init() {
    const sliderElement = document.querySelector(this.selector);
    if (sliderElement) {
      this.swiper = new Swiper(sliderElement, this.options);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const expertSlider = new SliderInit('.js-expert-slider-init', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: false,
    navigation: {
      nextEl: '.js-expert-slider-btn-next',
      prevEl: '.js-expert-slider-btn-prev',
    },
  });

  const reviewsSlider = new SliderInit('.js-reviews-slider-init', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.js-reviews-slider-btn-next',
      prevEl: '.js-reviews-slider-btn-prev',
    },
  });

  // add view reviews card
  var reviewCards = document.getElementsByClassName('reviews-slider__slide');
  var reviewsSectionSlider = document.querySelector('.reviews-section__slider');

  for (var i = 0; i < reviewCards.length; i++) {
    reviewCards[i].addEventListener('mouseover', function() {
      reviewsSectionSlider.classList.add('is-show');
    });
  }
});

export default SliderInit;