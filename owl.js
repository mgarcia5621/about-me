// Owl Carousel
$('.owl-carousel').owlCarousel({
    center: false,
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