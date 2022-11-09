import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageMarkup = createImageList(galleryItems);
gallery.insertAdjacentHTML('beforeend', imageMarkup);
gallery.addEventListener('click', onOpenEveryImg);

function createImageList(e) {
    return e.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${preview}"
    />
  </a>
</div>
        `
    })
        .join('');
}

function onOpenEveryImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
    instance.show();

    }

