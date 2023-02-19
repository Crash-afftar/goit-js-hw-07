import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const mainGallery = document.querySelector('.gallery');

const galleryList = galleryItems
.map(image => `
<div class="gallery__item">
  <a class="gallery__link" href='${image.original}'>
    <img
      class="gallery__image"
      src='${image.preview}'
      data-source='${image.original}'
      alt='${image.description}'
    />
  </a>
</div>`)
.join('');

mainGallery.insertAdjacentHTML('afterbegin', galleryList);

mainGallery.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const imgOriginalImg = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img
      src = '${imgOriginalImg}'
      alt='${event.description}'
    />`,
    {onShow: (instance) => {document.addEventListener('keydown', onEscapeKeypress)},
    onClose: (instance) => {document.removeEventListener('keydown', onEscapeKeypress)}}   
)

instance.show();

function onEscapeKeypress(event) {
    if (event.code === 'Escape') {
        instance.close();
    };
  }
  }
)

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
