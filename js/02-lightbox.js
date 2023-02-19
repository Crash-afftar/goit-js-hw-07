import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const mainGallery = document.querySelector('.gallery');

const galleryList = galleryItems
.map(image => `
  <a class="gallery__item" href='${image.original}'>
    <img
      class="gallery__image"
      src='${image.preview}'
      alt='${image.description}'
    />
  </a>
`)
.join('');


mainGallery.insertAdjacentHTML('afterbegin', galleryList);

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    close: true,
    captionsData: "alt",
    })

    // Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.