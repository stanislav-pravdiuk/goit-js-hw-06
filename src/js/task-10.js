function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  btnCreate: document.querySelector('#controls').children[1],
  btnDestroy: document.querySelector('#controls').lastElementChild,
  divBoxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', createBoxes);

function createBoxes(amount) {
  // при вводе значения в "инпут", создаю массив длинной равной єтому значению
  const lengthOfArray = amount.currentTarget.value;
  const parsedLengthOfArray = parseInt(lengthOfArray);
  const arrayForCycle = Array(parsedLengthOfArray);
  const filledArrayForCycle = arrayForCycle.fill('div');
  // вешаю слушателя на кнопку "создать"
  refs.btnCreate.addEventListener('click', addBoxes);
  // перебираю массив и добавляю єлементы
  function addBoxes() {
    for (const el of filledArrayForCycle) {
    const createdElement = document.createElement('div');
    createdElement.style.background = getRandomHexColor();
    createdElement.style.height = "30px";
    createdElement.style.width = "30px";
    // return createdElement;
    refs.divBoxes.append(createdElement)
    };
  };
};




