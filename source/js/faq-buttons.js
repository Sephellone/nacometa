import { toggleElement } from './toggler.js';

const faqCards = document.querySelectorAll('.faq__item');

const initiateFaqCards = () => {
  faqCards.forEach((faqCard) => {
    const faqButton = faqCard.querySelector('.faq__button');
    const faqText = faqCard.querySelector('.faq__description');

    faqButton.addEventListener('click', () => {
      toggleElement(faqButton, 'faq__button--closed', 'faq__button--opened');
      toggleElement(faqText, 'faq__description--closed', 'faq__description--opened');
    });
  })
};

export {initiateFaqCards};
