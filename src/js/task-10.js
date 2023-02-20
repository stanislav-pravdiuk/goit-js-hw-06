function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  btnCreate: document.querySelector('#controls').children[1],
  btnDestroy: document.querySelector('#controls').lastElementChild,
  divBoxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('blur', createBoxes);

function createBoxes(amount) {
  
const lengthOfArray = amount.currentTarget.value;
const parsedLengthOfArray = parseInt(lengthOfArray);
const arrayForCycle = Array(parsedLengthOfArray);
let filledArrayForCycle = arrayForCycle.fill('1');

refs.btnCreate.addEventListener('click', addBoxes);
refs.input.removeEventListener('blur', createBoxes);
refs.btnDestroy.addEventListener('click', deleteBoxes);

  function addBoxes() {

  deleteBoxes()
    
  let size = 30;
  const createdElements =[];

  for (const el of filledArrayForCycle) {
  
    const createdElement = document.createElement('div');
      
    createdElement.style.background = getRandomHexColor();
    
    createdElement.style.height = `${size}px`;
    createdElement.style.width = `${size}px`;
    createdElement.classList
    
    size += 10;

    createdElements.push(createdElement)
  };
  refs.divBoxes.append(...createdElements)
  };
}; 

  function deleteBoxes() {
  refs.divBoxes.innerHTML = '';
};





