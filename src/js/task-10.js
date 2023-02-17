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
  
let heightDiv = 20;
let widthDiv = 20;
  
function makeBigger() {
  heightDiv += 10;
  widthDiv += 10;
}

function addBoxes() {
    
  for (const el of filledArrayForCycle) {
  
    const createdElement = document.createElement('div');
      
      createdElement.style.background = getRandomHexColor();
    
      makeBigger();
      
      createdElement.style.height = `${heightDiv}px`;
    createdElement.style.width = `${widthDiv}px`;
    createdElement.classList
    
    refs.divBoxes.append(createdElement)
    
  }; 
  };
}; 


refs.btnDestroy.addEventListener('click', deleteBoxes);


function deleteBoxes() {
  let delDivBoxes = document.querySelector('#boxes');
  delDivBoxes.innerHTML = '';
}


