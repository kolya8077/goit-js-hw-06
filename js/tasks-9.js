const refs = {
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('.color')
};

refs.btn.addEventListener('click', onBackroundColor)

function onBackroundColor() {
  const color = getRandomHexColor()
  refs.span.textContent = color
  refs.body.style.backgroundColor = color;
  colorEl.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
