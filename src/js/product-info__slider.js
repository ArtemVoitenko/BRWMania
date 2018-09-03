
$('.small-slider').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  draggable: false,
  variableWidth: true,
  infinite: false,
  prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
  nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>"
});
var smallSlide = $(".small-slider__slide");
var productPicture = $(".big-slide__img");
smallSlide.on("click", function () {
  debugger;
  var src = $(this).children("img").attr("data-img-big");
  productPicture.attr("src", src);

})