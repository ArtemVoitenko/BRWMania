 $('.big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.small-slider'
});
$('.small-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  variableWidth: true,
  asNavFor: '.big-slider',
  infinite: true
});