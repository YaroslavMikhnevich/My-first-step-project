$(document).ready(function () {
    $('.slider-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        centerMode:true,
        infinite:true,
        asNavFor:'.slider-wrapper-big', 
        focusOnSelect: true

    })
    $('.slider-wrapper-big').slick({
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        asNavFor:'.slider-wrapper', 

    })

})

