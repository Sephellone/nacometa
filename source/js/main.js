import { updateScalebars } from './card-scale.js';
import { animateTooltips } from './diagram.js';
import { initiateDropZone } from './drop-zone.js';
import { initiateFaqCards } from './faq-buttons.js';
import { initiateFormScale } from './form-scale.js';
import { initiateMenu } from './menu-button.js';
import './slider.js';


animateTooltips();
initiateDropZone();
initiateFaqCards();
initiateMenu();
updateScalebars();
initiateFormScale();

const submitButton = document.querySelector('.form__submit-button');
submitButton.addEventListener('click', (evt) => evt.preventDefault());
submitButton.addEventListener('submit', (evt) => evt.preventDefault());
document.querySelector('.join__form').addEventListener('submit', (evt) => evt.preventDefault());

document.querySelectorAll('.footer__link').forEach((link) => {
  link.addEventListener('click', (evt) => evt.preventDefault());
})
