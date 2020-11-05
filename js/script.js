//About Slider
$('.aboutslide').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items: 1,
        }
    }
})
// Blog Slider
$('.blogSlider').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items: 3,
        }
    }
})