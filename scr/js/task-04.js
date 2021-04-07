let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const count = document.querySelector('#value');

const decrementValue = () =>  {
    counterValue -= 1
      value.textContent=counterValue;
};
decrement.addEventListener('click', decrementValue);

const incrementValue = () =>  {
      counterValue += 1
    value.textContent=counterValue;
};
increment.addEventListener('click', incrementValue);


increment.addEventListener('click', () => {
    console.log('Клик +');
});
decrement.addEventListener('click', () => {
    console.log('Клик -');
});