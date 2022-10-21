import PhotographersService from '../services/photographers.service.js';
import photographerFactory from '../factories/photographer.js';
import mediaFactory from '../factories/media.js';

const sortBy = document.getElementById("select-custom");

function loadPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    PhotographersService
        .fetchPhotographer(id)
        .then( photographer => photographerFactory(photographer).getPhotographerPageDom());
}

function loadMediaOfPhotographer() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    PhotographersService
    .fetchPhotographerMedia(id)
    .then(medias => displayMedia(medias) );
}

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

function displaySortMedia(medias){
    const mediaSection = document.querySelector(".media_section");
    mediaSection.innerHTML ="";
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
    const likesPrice = document.getElementById("total_likes");
    likesPrice.innerHTML ="";
    displayTotalLikes(totalLikes);
}

sortBy.addEventListener("click", function (){
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let sortBySelected = document.getElementsByClassName('same-as-selected')[0];
    PhotographersService
        .fetchPhotographerMediaSortBy(id, sortBySelected.textContent)
        .then(medias => displaySortMedia(medias) );
});

loadPhotographer();
loadMediaOfPhotographer();