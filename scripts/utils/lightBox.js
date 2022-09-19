
function openLightBox() {
    const lightBox = document.getElementById("lightBox");
    const prevBtn = document.getElementsByClassName('.prev-image')
    const nextBtn = document.getElementsByClassName('.next-image')
    const carouselItems = document.getElementsByClassName('.item')

    let currentItemPosition = 0
    let carouselInterval

    const goToNextSlide = () => {
        if (currentItemPosition + 1 >=  carouselItems.length) {

            const lastItem = `.item-${currentItemPosition}`

            currentItemPosition = 0
            const currentItem = `.item-${currentItemPosition}`

            setNodeAttributes(lastItem, currentItem)
        } else {
            currentItemPosition += 1
            const lastItem = `.item-${currentItemPosition - 1}`
            const currentItem = `.item-${currentItemPosition}`

            setNodeAttributes(lastItem, currentItem)
        }
    }

    const goToPreviousSlide = () => {
        if (currentItemPosition - 1 >=  0) {
            currentItemPosition -= 1
            const currentItem = `.item-${currentItemPosition}`
            const lastItem = `.item-${currentItemPosition + 1}`

            setNodeAttributes(lastItem, currentItem)
        } else {
            const lastItem = `.item-${currentItemPosition}`

            currentItemPosition = 2
            const currentItem = `.item-${currentItemPosition}`

            setNodeAttributes(lastItem, currentItem)
        }
    }


    const setNodeAttributes = (lastItem, currentItem) => {
        $(lastItem).css('display', 'none')
        $(currentItem).css('display', 'block')
        $(lastItem).attr('aria-hidden', 'true')
        $(currentItem).attr('aria-hidden', 'false')
    }
    
    lightBox.style.display = "block";
}


