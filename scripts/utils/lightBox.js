const lightBox = document.getElementById("lightBox");
const prevBtn = document.getElementById('prev-image');
const nextBtn = document.getElementById('next-image');

function openLightBox(i) {
    const main = document.getElementById("main");
    main.removeAttribute('aria-hidden');
    main.setAttribute("aria-hidden", "true");
    lightBox.setAttribute("aria-hidden", "false");
    lightBox.style.display = "block";
    
    hideAllItems();
    document.getElementById('item-' + i).style.display = "block";
    var maxItem = document.getElementsByClassName('item');

    prevBtn.addEventListener("click", function(){
        if(i === 0) {
            i = maxItem.length;
        }
        i = goToPreviousSlide(i);
    });
    nextBtn.addEventListener("click", function(){
        if (i === maxItem.length - 1 ){
            i = -1;
        }
        
        i = goToNextSlide(i);
    });

    document.addEventListener("keydown", e => {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if (keyCode === 27){
            closeLightBox();

        } else if ( keyCode === 39) {
            if (i === maxItem.length - 1 ){
                i = -1;
            }
            i = goToNextSlide(i);

        } else if (keyCode === 37){
            if(i === 0) {
                i = maxItem.length;
            }
            i = goToPreviousSlide(i);
        }
    });
}

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



