// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.



"use strict";

const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
   src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');

const imgGallery = images

  .map(({ src, alt }) =>
    `<li class='gallery_img'>
    <img
        src="${src}"
        width = '350'
        heith = '100'
        alt="${alt}"
     ></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", imgGallery);  //Все элементы галереи должны добавляться в DOM за одну операцию вставки.

  //Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const pictures = document.querySelectorAll('.picture')

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap-reverse';
gallery.style.galleryStyle = 'none';
gallery.style.gap = '20px';
gallery.style.justifyContent = 'center';








