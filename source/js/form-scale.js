const formContainer = document.querySelector('.join');

const nameField = formContainer.querySelector('#dream');
const amountField = formContainer.querySelector('#dream-goal');

const namePlace = formContainer.querySelector('.scale__title');
const amountPlace = formContainer.querySelector('.scale__goal');

const onNameUpdate = () => {
  namePlace.textContent = nameField.value;
};

const onAmountUpdate = () => {
  amountPlace.textContent = amountField.value;
};

const initiateFormScale = () => {
  nameField.addEventListener('input', onNameUpdate);
  amountField.addEventListener('input', onAmountUpdate);
};

export {initiateFormScale};
