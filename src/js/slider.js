$(function () {
$(".top-sell__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // variableWidth: true,
    prevArrow: "<button class='slider__button slider__button--prev'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_left'></use></svg></button>",
    nextArrow: "<button class='slider__button slider__button--next'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_right'></use></svg></button>",
    responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 3

      }
  },
        {
      breakpoint: 1151,
      settings: {
        slidesToShow: 4,
        draggable: true
      }
      },
      {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        draggable: true
      }
      },
            {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        // arrows: false, 
        // dots: true

      }
      },
    ]
});
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
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        draggable: true
      }
      },

            {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        // arrows: false, 
        // dots: true

      }
      },
    ]
});
$('.banner').slick({
	slidesToShow: 1,
	autoplay: true,
	fade: true,
	
  prevArrow: "<button class='banner__button banner__button--prev'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_left'></use></svg></button>",
  nextArrow: "<button class='banner__button banner__button--next'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_right'></use></svg></button>"
});
});

