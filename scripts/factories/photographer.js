function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", "profile_photo");
        img.setAttribute("alt", data.name)

        const h2 = document.createElement( 'h2' );
        const description = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', "localisation")
        const tagline = document.createElement('p');
        const price = document.createElement('p');
        price.setAttribute("class", "price");
        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id="+id);

        paragraph.textContent= data.city + ', ' + data.country;
        tagline.textContent = data.tagline;
        price.textContent = data.price + '€/jour';
        h2.textContent = data.name;

        link.appendChild(img)
        link.appendChild(h2);
        article.appendChild(link);
        description.appendChild(paragraph);
        description.appendChild(tagline);
        description.appendChild(price);
        article.appendChild(description);
        return (article);
    }

    function getPhotographerPageDom(){
        const photographer = data[0];
        const picture = `assets/photographers/${photographer.portrait}`;
        const header = document.getElementById('header');
        const description = document.getElementById('description');
        const h1 = document.createElement('h1');
        const text = document.createElement('div');
        const contactMe = document.getElementById("contactMe");
        contactMe.textContent = "Contactez-moi "+photographer.name;

        const localisation = document.createElement('p');
        localisation.setAttribute("id", "localisation")
        localisation.textContent = photographer.city + " , " + photographer.country;
        
        const tagline = document.createElement('p');
        tagline.textContent = photographer.tagline;

        text.appendChild(localisation);
        text.appendChild(tagline);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", "profile_photo");
        img.setAttribute("alt", photographer.name)

        const likesPrice = document.getElementById("price");
        likesPrice.textContent = photographer.price + '€/jour';

        h1.textContent = photographer.name;
        description.appendChild(h1);
        description.appendChild(text);
        header.appendChild(img);
        return (header);
    }

    return { name, picture, getUserCardDOM, getPhotographerPageDom }
} export default photographerFactory;