const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const btnEl = document.querySelector('#counter');
const btnInc = btnEl.lastElementChild
const btnDec = btnEl.firstElementChild

const valueEl = document.querySelector('#value');

btnDec.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

btnInc.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});
