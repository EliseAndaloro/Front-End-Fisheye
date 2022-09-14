import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';
//Mettre le code JavaScript lié à la page photographer.html
function loadPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    console.log(id);
    let photographer = PhotographersService
        .fetchPhotographer(id)
        .then( photographer => photographer);
    const photographerModel = photographerFactory(photographer);
    const photographerPageDom = photographerModel.getPhotographerPageDom();
}
loadPhotographer();