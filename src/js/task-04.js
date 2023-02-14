const counter = {
    value: 0,
    increment() {
        console.log("increment -> this", this);
        this.value += 1;
    },
    decrement() {
        console.log("decrement -> this", this);
        this.value -= 1;
    }
}

const decrementBtn = document.querySelector('button');

// const incrementBtn = document.querySelector("button");
// console.log(incrementBtn)
// const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value
});

// incrementBtn.addEventListener('click',  function () {
//     counter.increment();
//     valueEl.textContent = counter.value
// });