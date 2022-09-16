import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';
import mediaFactory from '../factories/media.js';
//Mettre le code JavaScript lié à la page photographer.html
function loadPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let photographer = PhotographersService
        .fetchPhotographer(id)
        .then( photographer => photographerFactory(photographer).getPhotographerPageDom());
}

function loadMediaOfPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let medias = PhotographersService
    .fetchPhotographerMedia(id)
    .then(medias => displayMedia(medias) );
}

function displayMedia(medias){
    const mediaSection = document.querySelector(".media_section");

        medias.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            mediaSection.appendChild(mediaCardDOM);
        });
}
loadPhotographer();
loadMediaOfPhotographer();