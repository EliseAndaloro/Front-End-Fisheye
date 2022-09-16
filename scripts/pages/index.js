import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        PhotographersService
            .fetchAllPhotographers()
            .then( photographers => displayData(photographers));

    };
    
    init();
    