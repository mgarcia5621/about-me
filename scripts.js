// Owl Carousel
$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true,
        },
        600: {
            items: 2,
            nav: true,
            dots: true,
        },
        1000: {
            items: 3,
            nav: true,
            dots: true,
        }
    }
});

const sideImages = [
    "house-view.png", "village-view.png", "Mateomayo.png", "me_mom_jennifer.jpg", "family.jpg"
]

for (let i = 0; i < sideImages.length; i++) {
    const element = sideImages[i];

    let imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML += `<img class="clickable-image" src="/images/${element}" alt="${element}">`
}

let selectedImage = document.querySelectorAll('.clickable-image')

for (let i = 0; i < selectedImage.length; i++) {
    const element = selectedImage[i]
    element.addEventListener('click', (e) => {
        e.preventDefault()
        let modalImg = document.querySelector('.modal-image-container')
            // Get the modal to display larger image
        let modal = document.getElementById('myModal')
        let captionText = document.getElementById('caption')
        modal.style.display = 'block'

        modalImg.innerHTML = element.outerHTML
        captionText.textContent = element.alt
    })
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    let modal = document.getElementById('myModal')
    modal.style.display = "none";
}