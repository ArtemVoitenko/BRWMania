 $('.big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.small-slider'
});
$('.small-slider').slick({
  slidesToScroll: 1,
  draggable: false,
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.big-slider',
});