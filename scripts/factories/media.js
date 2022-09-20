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

    function getMediaCardDOM(i) {
        const article = document.createElement('article');
        article.setAttribute("onclick", 'openLightBox('+i+');');
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);

        const imageDescription = document.createElement('div');
        imageDescription.setAttribute("class", "image_description");
        const title = document.createElement('p');
        title.textContent = data.title;

        const likes = document.createElement('p');
        likes.textContent = data.likes;

        article.appendChild(img);
        imageDescription.appendChild(title);
        imageDescription.appendChild(likes);
        article.appendChild(imageDescription);

        return (article);
    }

    function putMediaInLightBox(i) {
        //const carrousel = document.getElementById("carrousel");
        const li = document.createElement("li");
        li.setAttribute("class", "item");
        li.setAttribute("id", "item-" + i);

        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        img.setAttribute("class", "lightBox_img");

        const title = document.createElement('p');
        title.textContent = data.title;
        li.appendChild(img);
        li.appendChild(title);

        return (li);
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