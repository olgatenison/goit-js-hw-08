// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

//створюємо всі картки
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      
    </a>
  </li>`;
  })
  .join('');

// вставляємо в хтмл
gallery.insertAdjacentHTML('beforeend', markup);

// підключаємо галерею
const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
