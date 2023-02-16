function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  btnCreate: document.querySelector('#controls').children[1],
  btnDestroy: document.querySelector('#controls').lastElementChild,
  divBoxes: document.querySelector('#boxes'),
};
// console.log(refs.btnCreate);

refs.input.addEventListener('input', createBoxes);
// refs.btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const lengthOfArray = amount.currentTarget.value;
  const parsedLengthOfArray = parseInt(lengthOfArray);
  const arrayForCycle = Array(parsedLengthOfArray);
  const filledArrayForCycle = arrayForCycle.fill('div')
  
  for (const el of filledArrayForCycle) {
    const createdElement = document.createElement('div');
    createdElement.style.background = getRandomHexColor();
    createdElement.style.height = "30px";
    createdElement.style.width = "30px";
    return createdElement;
  } 
};

// console.log(createBoxes())
