const lightBox = document.getElementById("lightBox");
const prevBtn = document.getElementById('prev-image');
const nextBtn = document.getElementById('next-image');
const carouselItems = document.getElementsByClassName('item');


let carouselInterval;

function openLightBox(i) {
    lightBox.style.display = "block";
    hideAllItems();
    document.getElementById('item-' + i).style.display = "block";

    document.getElementById('prev-image').addEventListener("click", function(){
        goToPreviousSlide(i)
        i--;
    });
    document.getElementById('next-image').addEventListener("click", function(){
        goToNextSlide(i)
        i++;
    });

    document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode === 27){
            closeLightBox();
        } else if ( keyCode === 39) {
            goToNextSlide(i)
            i++;
        } else if (keyCode === 37){
            goToPreviousSlide(i)
            i--;
        }
    });
}

function goToPreviousSlide(currentItemPosition) {
    hideAllItems();
    const lastItem = document.getElementById('item-' + currentItemPosition);
    currentItemPosition = currentItemPosition - 1;
    const currentItem = document.getElementById('item-'+ currentItemPosition );
    setNodeAttributes(lastItem, currentItem);
}

function goToNextSlide(currentItemPosition) {
    hideAllItems();
    const lastItem = document.getElementById('item-' + currentItemPosition);
    currentItemPosition = currentItemPosition + 1;
    const currentItem = document.getElementById('item-'+ currentItemPosition );
    setNodeAttributes(lastItem, currentItem);
}


function setNodeAttributes(lastItem, currentItem) {
    lastItem.style.display = "none";
    currentItem.style.display = "block";
    lastItem.setAttribute('aria-hidden', 'true')
    currentItem.setAttribute('aria-hidden', 'false')
}

function closeLightBox(){
    const lightBox = document.getElementById("lightBox");
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    lightBox.setAttribute("aria-hidden", "true");
    lightBox.style.display = "none";
}

function hideAllItems(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = "none";
    });
}



