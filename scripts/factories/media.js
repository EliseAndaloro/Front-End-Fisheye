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

        const article = document.createElement('article');
        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        img.setAttribute("onclick", 'openLightBox('+i+');');
        img.setAttribute("alt", data.title+', closeup view');

        const imageDescription = document.createElement('div');
        imageDescription.setAttribute("class", "image_description");
        const title = document.createElement('p');
        title.textContent = data.title;

        const like = document.createElement('img');
        like.setAttribute("src", "assets/icons/heart.svg");
        like.setAttribute("class", "heart_icon");

        const likes = document.createElement('p');
        likes.setAttribute("id", "likes_photo_"+i);
        likes.setAttribute("aria-label", "likes");
        likes.textContent = data.likes;
        likes.addEventListener("click", function (){
            likes.textContent = Number(likes.textContent) + Number(1);
            likes.appendChild(like);
            const black_heart = document.createElement('img');
            black_heart.setAttribute("src", "assets/icons/black_heart.svg");
            black_heart.setAttribute("class", "heart_icon");
            const likesPrice = document.getElementById("total_likes");
            let total_likes = document.getElementById("total_likes");
            total_likes.textContent = Number(total_likes.textContent) + Number(1);
            likesPrice.appendChild(black_heart);

        }, { once: true });

        link.appendChild(img);
        likes.appendChild(like);
        imageDescription.appendChild(title);
        imageDescription.appendChild(likes);
        link.appendChild(imageDescription);
        article.appendChild(link);

        return (article);
    }

    function putMediaInLightBox(i) {
        const li = document.createElement("li");
        li.setAttribute("class", "item");
        li.setAttribute("id", "item-" + i);

        const img = displayPhotoOrVideo(media);
        img.setAttribute("src", picture);
        img.setAttribute("class", "lightBox_img");
        img.setAttribute("alt", data.title);

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
            var video = document.createElement("video");
            video.setAttribute('controls', true);
            return video;
        }
    }

    return { getMediaCardDOM, putMediaInLightBox }
}export default mediaFactory;