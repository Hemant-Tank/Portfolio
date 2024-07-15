 // Banner Typing effect

var typingEffect = new Typed(".txt_anime",{
    strings :["Front-End Developer.","Web Developer.","Manual Tester."],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,

})

 // Owl Caraousel

$('.owl-carousel').owlCarousel({
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000
        },
        600: {
            items: 3,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000
        },
        1000: {
            items: 4,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000,
        }
    }
})
