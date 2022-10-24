function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    // Crée les éléments article qui contiennent les photographes
    function getUserCardDOM() {
        // Création de l'élément article
        const article = document.createElement( 'article' );
        // Création de l'élément img qui contient la photo de profil du photographe
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", "profile_photo");
        img.setAttribute("alt", data.name)

        // Création de l'élément h2 qui contient le nom du photographe
        const h2 = document.createElement( 'h2' );
        // Création de l'élément div qui contient la localisation, le slogan et le prix
        const description = document.createElement('div');
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', "localisation")
        const tagline = document.createElement('p');
        const price = document.createElement('p');
        price.setAttribute("class", "price");

        // Création du lien qui permet d'aller sur la page du photographe en question
        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id="+id);

        // Ajout des données du photographe aux éléments créés
        paragraph.textContent= data.city + ', ' + data.country;
        tagline.textContent = data.tagline;
        price.textContent = data.price + '€/jour';
        h2.textContent = data.name;

        // on ajoute l'img et le nom du photographe au lien créé
        link.appendChild(img)
        link.appendChild(h2);
        // on ajoute le lien à l'article créé
        article.appendChild(link);
        // on ajout la localisation, le slogan et le prix à la div description
        description.appendChild(paragraph);
        description.appendChild(tagline);
        description.appendChild(price);
        // on ajout la div description à l'article créé
        article.appendChild(description);
        // on return l'article créé avec tous les éléments
        return (article);
    }

    // Affiche le header de la page photographe
    function getPhotographerPageDom(){
        // on récupère le photographe
        const photographer = data[0];
        const picture = `assets/photographers/${photographer.portrait}`;
        // On récupère l'élement header de la page photographe
        const header = document.getElementById('header');
        // On récupère l'élement div qui contient la description de la page photographe
        const description = document.getElementById('description');
        // on créé un  élément h1 qui contient le nom du photographe
        const h1 = document.createElement('h1');
        // on crée un élément div qui contient la localisation et le slogan du photographe
        const text = document.createElement('div');
        // On récupère le titre de la modale du formulaire de contact
        const contactMe = document.getElementById("contactMe");
        contactMe.textContent = "Contactez-moi "+photographer.name;

        // on crée l'élément p qui contiendra la localisation
        const localisation = document.createElement('p');
        localisation.setAttribute("id", "localisation")
        localisation.textContent = photographer.city + " , " + photographer.country;

        // on crée l'élément p qui contiendra le slogan
        const tagline = document.createElement('p');
        tagline.textContent = photographer.tagline;

        // on ajout la localisation et le slogan à la div créé a cet effet
        text.appendChild(localisation);
        text.appendChild(tagline);

        // On crée l'élément img qui contient la photo de profil du photographe
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", "profile_photo");
        img.setAttribute("alt", photographer.name)

        // On ajoute le prix du photographe à coté de son nombre total de likes
        const likesPrice = document.getElementById("price");
        likesPrice.textContent = photographer.price + '€/jour';

        h1.textContent = photographer.name;
        // On ajoute le nom et la description du photographe à la div qui contient la description
        description.appendChild(h1);
        description.appendChild(text);
        // on ajout l'img au header
        header.appendChild(img);

        // on return le header avec tous les éléments créés
        return (header);
    }
    // On return les fonctions créées pour pouvoir s'en servir hors du fichier
    return { name, picture, getUserCardDOM, getPhotographerPageDom }
} export default photographerFactory;