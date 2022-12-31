import { toggleElement } from './toggler.js';

const diagram = document.querySelector('.diagram');
const diagramLevels = diagram.querySelectorAll('.diagram__level-wrapper');

const animateTooltips = () => {
diagramLevels.forEach((level) => {
  const button = level.querySelector('.diagram-level__button');
  const tooltip = level.querySelector('.tooltip');

  button.addEventListener('click', () => toggleElement(tooltip, 'diagram-level__tooltip--closed', 'diagram-level__tooltip--opened'));
});
};

export {animateTooltips};
