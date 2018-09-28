$(function(){
 $('#gallery-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#gallery-thumbs'
});
$('#gallery-thumbs').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
  nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>",
  asNavFor: '#gallery-slide',
  dots: false,
  focusOnSelect: true,
  infinite: false,
  arrows: true,
  centerMode: false,
   responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6

      }
  },
      {
      breakpoint: 1350,
      settings: {
        slidesToShow: 5,
        draggable: true
      }
      },
            {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8
      }
      },
            {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
      }
      },
                  {
      breakpoint: 460,
      settings: {
        slidesToShow: 3,


      }
      }
    ]

});
 $('#popup-gallery-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#popup-gallery-thumbs'
});
$('#popup-gallery-thumbs').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  // rows: 2,
  // slidesPerRow: 1,
  prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
  nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>",
  asNavFor: '#popup-gallery-slide',
  dots: false,
  focusOnSelect: true,

  infinite: false,
  arrows: true,
  centerMode: false,
   responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6

      }
  },
      {
      breakpoint: 1350,
      settings: {
        slidesToShow: 7,
        draggable: true
      }
      },
            {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
      },
            {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
        // arrows: false, 
        // dots: true

      }
      },
                  {
      breakpoint: 460,
      settings: {
        slidesToShow: 3,
        // arrows: false, 
        // dots: true

      }
      }
    ]

});
})