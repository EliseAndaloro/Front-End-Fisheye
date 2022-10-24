import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';
import mediaFactory from '../factories/media.js';

//const sortBy = document.getElementById("filter");
const sortBy = document.getElementById("select-custom");

// Récupération des données du photographe en fonction de son id et affichage du Header sur la page photographe
function loadPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    PhotographersService
        .fetchPhotographer(id)
        .then( photographer => photographerFactory(photographer).getPhotographerPageDom());
}

// Récupération des médias d'un photographe en fonction de son id
function loadMediaOfPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    PhotographersService
    .fetchPhotographerMedia(id)
    .then(medias => displayMedia(medias) );
}

// Affichage des médias
function displayMedia(medias){
    const mediaSection = document.querySelector(".media_section");
    const lightBox = document.getElementById("carrousel");
    let i = 0;
    let totalLikes = 0;

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(i);
        const lightBoxDOM = mediaModel.putMediaInLightBox(i);
        mediaSection.appendChild(mediaCardDOM);
        lightBox.appendChild(lightBoxDOM);
        totalLikes += media.likes;
        i++;
    });
    displayTotalLikes(totalLikes);
}

// Affichage du nombre total de likes
function displayTotalLikes(totalLikes) {
    const likesPrice = document.getElementById("total_likes");
    const totalLikesSpan = document.createElement("span");
    const like = document.createElement('img');
    like.setAttribute("src", "assets/icons/black_heart.svg");
    like.setAttribute("class", "heart_icon");
    totalLikesSpan.textContent = totalLikes;
    likesPrice.appendChild(totalLikesSpan);
    likesPrice.appendChild(like);
}

// Affichage des médias triés
function displaySortMedia(medias){
    const mediaSection = document.querySelector(".media_section");
    mediaSection.innerHTML ="";
    const lightBox = document.getElementById("carrousel");
    let i = 0;
    let totalLikes = 0;

    // Création des éléments du DOM pour chaque média
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(i);
        const lightBoxDOM = mediaModel.putMediaInLightBox(i);
        mediaSection.appendChild(mediaCardDOM);
        lightBox.appendChild(lightBoxDOM);
        totalLikes += media.likes;
        i++;
    });
    const likesPrice = document.getElementById("total_likes");
    likesPrice.innerHTML ="";
    displayTotalLikes(totalLikes);
}

// Tri des médias lorsque le select change
sortBy.addEventListener("click", function (){
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let sortBySelected = document.getElementsByClassName('same-as-selected')[0];

    // Suppression du carrousel + création d'un nouveau pour reremplir la lightbox avec les médias triés
    let prevImgArrow = document.getElementById('prev-image');
    let carrousel = document.getElementById('carrousel');
    document.getElementById("carrousel_content").removeChild(carrousel);
    let newCarrousel = document.createElement('ul');
    newCarrousel.setAttribute('id', 'carrousel');
    prevImgArrow.parentNode.insertBefore(newCarrousel, prevImgArrow.nextSibling);

    // Récupération des médias triés
    PhotographersService
        .fetchPhotographerMediaSortBy(id, sortBySelected.textContent)
        .then(medias => displaySortMedia(medias));
});

loadPhotographer();
loadMediaOfPhotographer();