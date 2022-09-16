function mediaFactory (data) {
    const { title, image, likes, date, price } = data;

    const picture =  `assets/photographers/${data.image}`;

    function getMediaCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement( 'img' );
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

    return { getMediaCardDOM }
}export default mediaFactory;