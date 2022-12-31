import { toggleElement } from './toggler.js';

const header = document.querySelector('.main-header');

const menu = header.querySelector('.main-header__nav-wrapper');
const menuButton = header.querySelector('.main-header__navigation-toggle');



const toggleMenu = () => {
  toggleElement(menu, 'main-header__nav-wrapper--closed', 'main-header__nav-wrapper--opened');
};

const toggleButton = () => {
  toggleElement(menuButton, 'main-header__navigation-toggle--burger', 'main-header__navigation-toggle--cross')
};

const initiateMenu = () => {
  menuButton.addEventListener('click', () => {
    toggleMenu();
    toggleButton();
  })
};

export {initiateMenu};
