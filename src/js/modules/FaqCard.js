export default class FaqCard {
  constructor() {
    this.faqCardBtnToggle = document.querySelectorAll('.js-faq-card-toggle');
    this.setupEventListeners();
  }

  toggleFaqCard(event) {
    const listItem = event.target.closest('.faq-card');
    listItem.classList.toggle('is-show');
  }

  setupEventListeners() {
    this.faqCardBtnToggle.forEach((button) => {
      button.addEventListener('click', this.toggleFaqCard);
    });
  }
}