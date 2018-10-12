$(function(){
  var bigSlide = $('#gallery-slide');
  var thumbs = $('#gallery-thumbs');
 bigSlide.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  prevArrow: "<button class='banner__button banner__button--prev big-slide__button'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_left'></use></svg></button>",
  nextArrow: "<button class='banner__button banner__button--next big-slide__button'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_right'></use></svg></button>",
  speed: 0,
  // asNavFor: '#gallery-thumbs'
});
thumbs.slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
  nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>",
  asNavFor: bigSlide,
  dots: false,
  speed: 0,
  focusOnSelect: true,
  draggable: false,
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
$(".banner__button.banner__button--next.big-slide__button.slick-arrow").click(function  ( ) {
  console.log("hello")
    thumbs.slick("slickNext");
});
$(".banner__button.banner__button--prev.big-slide__button.slick-arrow").click(function  ( ) {
  console.log("hello")
    thumbs.slick("slickPrev");
});
// $('#gallery-slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
//   $('#gallery-thumbs').slick('slickNext');
// });


//  $('#popup-gallery-slide').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   asNavFor: '#popup-gallery-thumbs'
// });
// $('#popup-gallery-thumbs').slick({
//   slidesToShow: 9,
//   slidesToScroll: 1,
//   // rows: 2,
//   // slidesPerRow: 1,
//   prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
//   nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>",
//   asNavFor: '#popup-gallery-slide',
//   dots: false,
//   focusOnSelect: true,

//   infinite: false,
//   arrows: true,
//   centerMode: false,
//    responsive: [
//     {
//       breakpoint: 1500,
//       settings: {
//         slidesToShow: 6

//       }
//   },
//       {
//       breakpoint: 1350,
//       settings: {
//         slidesToShow: 7,
//         draggable: true
//       }
//       },
//             {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 5
//       }
//       },
//             {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 5,
//         // arrows: false, 
//         // dots: true

//       }
//       },
//                   {
//       breakpoint: 460,
//       settings: {
//         slidesToShow: 3,
//         // arrows: false, 
//         // dots: true

//       }
//       }
//     ]

// });
});