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

const decrementBtn = document.querySelector('#decrement');
const increment = document.querySelector("#increment");
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener("click", decrement)