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
        link.setAttribute("href", "http://localhost/Front-End-Fisheye/photographer.html?id="+id);

        paragraph.textContent= data.city + ', ' + data.country;
        tagline.textContent = data.tagline;
        price.textContent = data.price + '€/jour';
        h2.textContent = data.name;

        link.appendChild(img)
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(paragraph);
        article.appendChild(tagline);
        article.appendChild(price);
        return (article);
    }

    function getPhotographerPageDom(){
        const header = document.getElementById('header');
        const h1 = document.createElement('h1');
        h1.textContent = data.name;
        header.appendChild(h1);
        return (header);
        }
    }

    return { name, picture, getUserCardDOM, getPhotographerPageDom }
}