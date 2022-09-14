function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        const paragraph = document.createElement('p');
        const tagline = document.createElement('p');
        const price = document.createElement('p');
        const link = document.createElement('a');
        link.setAttribute("href", "www.google.com");

        paragraph.textContent= data.city + ', ' + data.country;
        tagline.textContent = data.tagline;
        price.textContent = data.price + '€/jour';
        link.textContent = data.name;

        h2.appendChild(link);    
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(paragraph);
        article.appendChild(tagline);
        article.appendChild(price);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}