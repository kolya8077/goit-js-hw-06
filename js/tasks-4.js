const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const refs = {
    btnEl: document.querySelector('#counter'),
    valueEl: document.querySelector('#value'),
    btnInc: document.querySelector('[data-action="increment"]'),
    btnDec: document.querySelector('[data-action="decrement"]'),
};

refs.btnDec.addEventListener('click', function () {
    counterValue.decrement();
    refs.valueEl.textContent = counterValue.value;
});

refs.btnInc.addEventListener('click', function () {
    counterValue.increment();
    refs.valueEl.textContent = counterValue.value;
});
