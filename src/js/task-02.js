// Напиши скрипт, который для каждого элемента массива ingredients:


"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const totalCategories = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
const elemLi = document.createElement('li'); // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().

 elemLi.textContent =(ingredient); // Добавит название ингредиента как его текстовое содержимое.
  elemLi.classList.add('.item');    // Добавит элементу класс item.
//  $elem.innerHTML 
 
  return elemLi;
});

totalCategories.append(...elements); // После чего вставит все <li> за одну операцию в список ul#ingredients.





 





