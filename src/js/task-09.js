
const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


function getRandomHexColor() {   //генерации случайного цвета используй функцию getRandomHexColor.
  return `#${Math.floor(Math.random()
    * 16777215).toString(16)
    .padStart(6, 0)}`;
}


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;  //изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
  colorValue.textContent = color; // выводит значение цвета в span.color.
})

