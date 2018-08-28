$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    prevArrow: "<button class='slider__button slider__button--prev'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_left'></use></svg></button>",
    nextArrow: "<button class='slider__button slider__button--next'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_right'></use></svg></button>"
});