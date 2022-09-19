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

    function getMediaCardDOM() {
        const article = document.createElement('article');
        article.setAttribute("onclick", 'openLightBox();');
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);

        const imageDescription = document.createElement('div');
        imageDescription.setAttribute("class", "image_description");
        const title = document.createElement('p');
        title.textContent = data.title;

        const likes = document.createElement('p');
        likes.textContent = data.likes;

        const heart = document.createElement('i');
        heart.setAttribute("class", "fa-solid fa-heart");

        article.appendChild(img);
        imageDescription.appendChild(title);
        imageDescription.appendChild(likes);
        imageDescription.appendChild(heart);
        article.appendChild(imageDescription);

        return (article);
    }

    function putMediaInLightBox(i) {
        const carrousel = document.getElementById("carrousel");
        const li = document.createElement("li");
        li.setAttribute("class", "item-" + i);
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        li.appendChild(img);
        carrousel.appendChild(li);

        return (carrousel);
    }

    function displayPhotoOrVideo(img) {
        const extension = img.substr(img.length - 3);
        if (extension === 'jpg') {
            return document.createElement('img');
        } else {
            return document.createElement("video");
        }
    }

    return { getMediaCardDOM, putMediaInLightBox }
}export default mediaFactory;