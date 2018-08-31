
$('.small-slider').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  draggable: false,
  variableWidth: true,
  infinite: false,
  arrows: false
});
var smallSlide = $(".small-slider__slide");
var productPicture = $(".product-picture");
smallSlide.on("click", function () {
  var src = $(this).children("img").attr("data-img-big");
  console.log(src);
  productPicture.attr("src", src);

})