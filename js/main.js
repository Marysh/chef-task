$(function () {
    $('.hdr_nav-list li').on('click', function () {
       $(this).addClass('active').siblings().removeClass('active')
    });

    $('a.anchor[href^="#"]').on('click',function (){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

    var swiper = new Swiper('#testimonials-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: '#testimonials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#testimonials-slider .swiper-button-next',
            prevEl: '#testimonials-slider .swiper-button-prev',
        },
    });
    var swiperTwo = new Swiper('#classes-slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '#classes-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#classes-slider .swiper-button-next',
            prevEl: '#classes-slider .swiper-button-prev',
        },
    });

    $('.popup-modal').magnificPopup({
        type: 'inline'
    });
});