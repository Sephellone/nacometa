const dreamCards = document.querySelectorAll('.dream-card');

const growScaleBar = (collected, goal, destination) => {
  const widthPercent = Math.round(parseInt(collected.textContent) / parseInt (goal.textContent) * 100);
  const newWidth = widthPercent + "%";
  destination.style.width = newWidth;
}

const updateScalebars = () => {
  dreamCards.forEach((card) => {
    const progress = card.querySelector('.dream-card__progress-done');
    const dreamGoal = card.querySelector('.dream-card__funds-needed');
    const dreamCollected = card.querySelector('.dream-card__funds-collected-number');
    growScaleBar(dreamCollected, dreamGoal, progress);
  });
};

export {updateScalebars};
