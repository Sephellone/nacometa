const diagram = document.querySelector('.diagram');
const diagramLevels = diagram.querySelectorAll('.diagram__level-wrapper');

const tooltipToggle = (element) => {
  if (element.classList.contains('diagram-level__tooltip--closed')) {
    element.classList.remove('diagram-level__tooltip--closed');
    element.classList.add('diagram-level__tooltip--opened');
  } else {
    element.classList.add('diagram-level__tooltip--closed');
    element.classList.remove('diagram-level__tooltip--opened');
  }
}
const animateTooltips = () => {
diagramLevels.forEach((level) => {
  const button = level.querySelector('.diagram-level__button');
  const tooltip = level.querySelector('.tooltip');

  button.addEventListener('click', () => tooltipToggle(tooltip));
});
};

export {animateTooltips};
