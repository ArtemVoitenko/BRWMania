$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // variableWidth: true,
    prevArrow: "<button class='slider__button slider__button--prev'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_left'></use></svg></button>",
    nextArrow: "<button class='slider__button slider__button--next'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_right'></use></svg></button>",
    responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 4

      }
  },
      {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        draggable: true
      }
      },
            {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
      },
            {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        arrows: false

      }
      },
    ]
});
$('.banner').slick({
	slidesToShow: 1,
	autoplay: true,
	fade: true,
	arrows: false,
	respondTo: "slider"
})