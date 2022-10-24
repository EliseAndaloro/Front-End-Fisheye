import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';

// Affiche les vignettes des photographes
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// Récupère les datas des photographes
async function init() {
    PhotographersService
        .fetchAllPhotographers()
        .then( photographers => displayData(photographers));
};

init();
    