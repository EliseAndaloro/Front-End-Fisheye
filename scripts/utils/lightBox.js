// Récupération des éléments du DOM
const lightBox = document.getElementById("lightBox");
const prevBtn = document.getElementById('prev-image');
const nextBtn = document.getElementById('next-image');

// Ouverture de la lightbox
function openLightBox(i) {
    const main = document.getElementById("main");
    main.removeAttribute('aria-hidden');
    main.setAttribute("aria-hidden", "true");
    lightBox.setAttribute("aria-hidden", "false");
    lightBox.style.display = "block";

    // On cache toutes les photos présentes dans la lightbox
    hideAllItems();

    // Affichage de la i ème photo dans la lightbox
    document.getElementById('item-' + i).style.display = "block";
    // On compte le nombre de photos contenu dans la lightbox
    var maxItem = document.getElementsByClassName('item');

    // Au clique sur la flèche qui ramène à la photo précédente, appel de goTopreviousSlide()
    prevBtn.addEventListener("click", function(){
        if(i === 0) {
            i = maxItem.length;
        }
        i = goToPreviousSlide(i);
    });

    // Au clique sur la flèche qui amène à la photo suivante, appel de goToNextSlide()
    nextBtn.addEventListener("click", function(){
        if (i === maxItem.length - 1 ){
            i = -1;
        }
        
        i = goToNextSlide(i);
    });

    // Lorsque la lightbox est ouverte on regarde si on appuie sur les touches du clavier
    document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        // Si on appuie sur Echap => on ferme la lightbox
        if (keyCode === 27){
            closeLightBox();
        // Si on appuie sur la fleche de droite => on va à la photo suivante
        } else if ( keyCode === 39) {
            if (i === maxItem.length - 1 ){
                i = -1;
            }
            i = goToNextSlide(i);
        // Si on appuie sur la fleche de gauche => on affiche la photo précédente
        } else if (keyCode === 37){
            if(i === 0) {
                i = maxItem.length;
            }
            i = goToPreviousSlide(i);
        }
    });
}

// Affiche la photo précédente
function goToPreviousSlide(currentItemPosition) {
    var maxItem = document.getElementsByClassName('item');
    hideAllItems();
    var lastItem = document.getElementById('item-' + currentItemPosition);

    if(currentItemPosition === maxItem.length){
        currentItemPosition = maxItem.length - 1 ;
        lastItem = document.getElementById('item-' + 0);
        var currentItem = document.getElementById('item-'+ currentItemPosition );
    }
    else if (currentItemPosition === 0){
        currentItemPosition = maxItem.length - 1 ;
    }
     else {
        currentItemPosition = currentItemPosition - 1;
        var currentItem = document.getElementById('item-'+ currentItemPosition );
    }
    setNodeAttributes(lastItem, currentItem);
    return currentItemPosition;
}

// Affiche la photo suivante
function goToNextSlide(currentItemPosition) {
    hideAllItems();
    var maxItem = document.getElementsByClassName('item').length;
    var lastItem = document.getElementById('item-' + currentItemPosition);
    if (currentItemPosition < 0 ){
        currentItemPosition = maxItem - 1;
        lastItem = document.getElementById('item-' + currentItemPosition);
        currentItemPosition = 0;
        var currentItem = document.getElementById('item-'+ currentItemPosition);
    } else{
        currentItemPosition = currentItemPosition + 1;
        var currentItem = document.getElementById('item-'+ currentItemPosition );
    }
    setNodeAttributes(lastItem, currentItem);
    return currentItemPosition;
}

// Affiche la photo courante et cache la dernière affichée
function setNodeAttributes(lastItem, currentItem) {
    lastItem.style.display = "none";
    currentItem.style.display = "block";
    lastItem.setAttribute('aria-hidden', 'true')
    currentItem.setAttribute('aria-hidden', 'false')
}

// Ferme la lightbox
function closeLightBox(){
    const lightBox = document.getElementById("lightBox");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    lightBox.setAttribute("aria-hidden", "true");
    lightBox.style.display = "none";
}

// Cache toutes les photos de la lightbox
function hideAllItems(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = "none";
    });
}



