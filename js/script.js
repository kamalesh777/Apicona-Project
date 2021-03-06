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
    dots: 0,
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

//Team Slider
$('.teamSlider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items: 4,
        }
    }
})
//Banner Part
$('.bannerSlider').owlCarousel({
    loop:true,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    dots: false,
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

//Banner Tab
//open and close tab menu
$('.nav-tabs-dropdown')
    .on("click", "li:not('.active') a", function(event) {  $(this).closest('ul').removeClass("open");
    })
    .on("click", "li.active a", function(event) {        $(this).closest('ul').toggleClass("open");
});