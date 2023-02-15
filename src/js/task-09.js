function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyColor: document.querySelector('body')
} 

refs.changeBtn.addEventListener('click', changeColorLogColor)

function changeColorLogColor() {
  let color = getRandomHexColor();
  refs.spanColor.textContent = color;
  refs.bodyColor.style.background = color;
}