function mediaFactory (data) {
    const { title, image, likes, date, price, video } = data;

    let media;
    let picture;
    if (typeof data.image == 'undefined'){
        media = data.video;
        picture =  `assets/photographers/${data.video}`;
    } else{
        media = data.image;
        picture =  `assets/photographers/${data.image}`;
    }

    // Crée les éléments articles qui contiennent les médias
    function getMediaCardDOM(i) {
        // Création du lien qui permet d'ouvrir la lightbox depuis le clavier
        const link = document.createElement('a');
        link.setAttribute("href", "#");
        link.setAttribute("alt", "Ouvrir la lightbox");
        link.addEventListener('focus', function () {
            document.addEventListener('keydown', function(e){
                const keyCode = e.keyCode ? e.keyCode : e.which;
                if (keyCode === 13){
                    openLightBox(i);
                }
            })
        });

        // Création de l'élément article
        const article = document.createElement('article');

        // Création de l'élément img ou vidéo
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        img.setAttribute("onclick", 'openLightBox('+i+');');
        img.setAttribute("alt", data.title+', closeup view');

        // Création de l'élément div qui contient le titre du média
        const imageDescription = document.createElement('div');
        imageDescription.setAttribute("class", "image_description");
        // Création de l'élement p qui contient le titre du média
        const title = document.createElement('p');
        title.textContent = data.title;

        // Création de l'élément img qui représente le coeur des likes
        const like = document.createElement('img');
        like.setAttribute("src", "assets/icons/heart.svg");
        like.setAttribute("class", "heart_icon");

        // Création de l'élément p qui contient le nombre de likes sur le média
        const likes = document.createElement('p');
        likes.setAttribute("id", "likes_photo_"+i);
        likes.setAttribute("aria-label", "likes");
        likes.textContent = data.likes;

        // Incrémentation du nombre de likes du média et du nombre de likes total du photographe au click sur "liker"
        // Chaque média peut être aimer une seule fois
        likes.addEventListener("click", function (e){
            likes.textContent = Number(likes.textContent) + Number(1);
            likes.appendChild(like);
            const black_heart = document.createElement('img');
            black_heart.setAttribute("src", "assets/icons/black_heart.svg");
            black_heart.setAttribute("class", "heart_icon");
            const likesPrice = document.getElementById("total_likes");
            let total_likes = document.getElementById("total_likes");
            total_likes.textContent = Number(total_likes.textContent) + Number(1);
            likesPrice.appendChild(black_heart);
            e.preventDefault();

        }, { once: true });

        // on ajoute l'image au lien créé
        link.appendChild(img);
        // on ajoute le coeur au nombre de likes du média
        likes.appendChild(like);
        // on ajoute le titre à la div qui sert de description du media
        imageDescription.appendChild(title);
        // on ajout le nombre de likes + l'icon coeur à la div qui sert de description du media
        imageDescription.appendChild(likes);
        // on ajoute la div de description au lien
        link.appendChild(imageDescription);
        // on ajout le lien créé dans l'article
        article.appendChild(link);

        // on return l'article avec tous les éléments créés
        return (article);
    }

    // Crée les li qui composeront le carrousel pour la lightbox
    function putMediaInLightBox(i) {
        // On crée l'élément li
        const li = document.createElement("li");
        // On lui ajoute une class "item" et un id "item-"+i pour savoir dequel li il s'agit
        li.setAttribute("class", "item");
        li.setAttribute("id", "item-" + i);

        // On crée un élément img ou video en fonction du média
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        img.setAttribute("class", "lightBox_img");
        img.setAttribute("alt", data.title);

        // On crée un élément p qui contiendra le titre du média
        const title = document.createElement('p');
        title.textContent = data.title;
        // on ajout l'img ou la vidéo au li créé
        li.appendChild(img);
        // on ajout l'élément p contenant le titre du média au li créé
        li.appendChild(title);

        // on return le li avec tous les éléments créés
        return (li);
    }

    // Crée un élément img ou video en fonction de l'extension du fichier
    function displayPhotoOrVideo(img) {
        const extension = img.substr(img.length - 3);
        if (extension === 'jpg') {
            return document.createElement('img');
        } else {
            var video = document.createElement("video");
            video.setAttribute('controls', true);
            return video;
        }
    }

    // On return les fonctions créées pour pouvoir s'en servir hors du fichier
    return { getMediaCardDOM, putMediaInLightBox }
}export default mediaFactory;