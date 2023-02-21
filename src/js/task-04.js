let counterValue = 0;
console.log(counterValue);

const button = document.querySelector('#value');
console.log(button);

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

increment.addEventListener('click', onClick);
decrement.addEventListener('click', offClick);

function onClick() {
    counterValue++;
    button.textContent = counterValue;
};

function offClick() {
    counterValue--;
    button.textContent = counterValue;
};
