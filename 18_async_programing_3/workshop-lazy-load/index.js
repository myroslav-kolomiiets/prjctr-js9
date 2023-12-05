import {ImagesGallery} from './ImagesGallery.js';

(async () => {
    const imagesGalleryContainer = document.querySelector('.images-gallery');
    const loaderElement = document.querySelector('.loader');
    const imageGallery = new ImagesGallery(imagesGalleryContainer);

    await imageGallery.fetchImages();

    const intersectionObserver = new IntersectionObserver(async (entries) => {
        if (entries[0].intersectionRatio <= 0) {
            return;
        }

        await imageGallery.fetchImages();
    });

    if(!loaderElement) {
        throw new Error('Loader is not found');
    }

    intersectionObserver.observe(loaderElement);
})()
