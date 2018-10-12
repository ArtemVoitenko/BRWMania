$(function() {
var cartModal = $(".cart-modal");
var callPopUp = $(".call-popup");
var fancybox = $(".fancybox");
var galleryPopup = $(".gallery-popup");
var filtersList = $(".filters__list");
var filtersHide = $("#filters__hide");
var filtersMore = $("#filters__show-more");
var mainNav = $(".main-nav");
var horizontalCategories = $(".horizontal-categories");
var filters = $(".filters");
var review = $(".review--catalog");
var homeAdress = $(".ordering-form__home-adress");
var postAdress = $(".ordering-form__post-adress");
var curierDelivery = $("#curier-delivery");
var postDelivery = $("#post-delivery");
var buttonBuy = $(".product-card__cart-button");
var commonPopup = $(".common-popup");
var commonPopupContinue = $(".common-popup__button-continue");
var paginationLink = $(".pagination__link");
var productCardList = $(".product-card__wrapper");
var brandsPopup = $(".brands-popup");

$("#open-main-nav").on("click", function () {
    mainNav.toggle('slide','left');
});
if($(window).width() < 768) {
  $(document).mouseup(function(e) {
    if (!mainNav.is(e.target) &&
       mainNav.has(e.target).length === 0) {
       mainNav.hide('slide', {direction: 'left'}, 500);
    }
});

}

$("#open-categories-button").on("click", function () {
    horizontalCategories.toggleClass("display-flex");
    });

$('.vertical-categories__item').hover(function() {
    var submenu = $(this).children("ul");
    submenu.toggle();
});

$('.cart__open-btn').on("click", function() {
    cartModal.slideToggle();
});

$('.button-request-call').on("click", function () {
	fancybox.fadeIn();
	callPopUp.fadeIn();
});

$("body").on("click",".close-popup", function () {
    console.log($(this).parent());
	$(this).parent().fadeOut();
	fancybox.fadeOut();
});

$("#close-gallery").on("click", function () {
    galleryPopup.fadeOut();
    fancybox.fadeOut();
});
$(".gallery-popup__cart-button").on("click", function () {
  galleryPopup.fadeOut();
  fancybox.fadeOut();
})


$("#list-view").on("click", function () {
    console.log(productCardList);
    productCardList.addClass("list-view");
});

$("#grid-view").on("click", function () {
    productCardList.removeClass("list-view");
});

paginationLink.on("click", function (e){
    paginationLink.removeClass("pagination__link--active");
    $(this).addClass("pagination__link--active");
});

var verticalCategories = $(".vertical-categories--popup");
$(".horizontal-categories__link--show-vertical").on("click", function (e) {
    e.preventDefault();
    verticalCategories.fadeIn();
    $(".fancybox-categories").fadeIn();
})
filtersMore.on("click", function () {
    filtersList.removeClass("filters__list--compressed");
    filtersMore.hide();
    filtersHide.show();
})
filtersHide.on("click", function () {
    filtersList.addClass("filters__list--compressed");
    filtersHide.hide();
    filtersMore.show();
});
$(".footer__title").on("click", function () {
    $(this).next(".footer__list").slideToggle();
});
$(".filters__show-button").on("click", function () {
    filters.toggleClass("filters--visible");
});
$(".cart-modal__delete-item").on("click", function () {
    $(this).parent().remove();
});
$(".product-comments__link").on("click", function () {
    review.slideToggle();
});
curierDelivery.on("change", function () {
    homeAdress.show();
    postAdress.hide();
});
postDelivery.on("change", function () {
    postAdress.show();
    homeAdress.hide();
});
$(".vertical-categories__hide-item").on("click", function () {
        verticalCategories.fadeOut();
    fancybox.fadeOut();
});
$("body").on("click", ".common-popup__button-continue", function () {
    $(".common-popup").fadeOut();
    fancybox.fadeOut();
});
$("body").on("click", ".product-card__buy-button", function () {
    $(".one-click-modal").fadeIn();
    fancybox.fadeIn();
});
$(".main-header__show-phones").on("click", function () {
    $(".phones").fadeIn();
    fancybox.fadeIn();
});
$('.zoom').zoom({
  magnify: 1.5
});
function initializeGalleryPopup() {
  $('#popup-gallery-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<button class='banner__button banner__button--prev big-slide__button'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_left'></use></svg></button>",
  nextArrow: "<button class='banner__button banner__button--next big-slide__button'><svg class='banner__button-icon centered' width='15' height = '20'><use xlink:href='#icon_arrow_right'></use></svg></button>",
  speed: 0
  // asNavFor: '#popup-gallery-thumbs'
});

$('#popup-gallery-thumbs').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<button class='small-slider__button small-slider__button--prev'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_left_slider'></use></svg></button>",
  nextArrow: "<button class='small-slider__button small-slider__button--next'><svg class='small-slider__button-icon' width='10' height = '20'><use xlink:href='#icon_arrow_right_slider'></use></svg></button>",
  asNavFor: '#popup-gallery-slide',
  speed: 0,
  dots: false,
  focusOnSelect: true,
  infinite: false,
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
};
$(".product-gallery__big-slider--clickable").click(function () {
    galleryPopup.fadeIn();
    fancybox.fadeIn();
    setTimeout(initializeGalleryPopup, 10)
}).children("button").click(function(e) {
  e.stopImmediatePropagation();
});
$(document).mouseup(function(e) {
    if ((!$(".common-popup").is(e.target) &&
       $(".common-popup").has(e.target).length === 0) && (!galleryPopup.is(e.target) &&
       galleryPopup.has(e.target).length === 0) && (!$(".search-wrap").is(e.target) &&
       $(".search-wrap").has(e.target).length === 0)) {
       $(".common-popup").fadeOut();
     galleryPopup.fadeOut();
    fancybox.fadeOut();
    }
});
$(document).mouseup(function(e) {
    if (!$(".cart-modal").is(e.target) &&
       $(".cart-modal").has(e.target).length === 0) {
       $(".cart-modal").fadeOut();
    }
});
$(document).mouseup(function(e) {

    if (!verticalCategories.is(e.target) &&
       verticalCategories.has(e.target).length === 0) {
       verticalCategories.fadeOut();
    $(".fancybox-categories").fadeOut();
    }
});
$(document).mouseup(function(e) {

    if (!brandsPopup.is(e.target) &&
       brandsPopup.has(e.target).length === 0) {
       brandsPopup.fadeOut();
    brandsPopup.fadeOut();
    }
});
// inputmask********************************
$('#reg-number').inputmask("+380-(99)-99-99-999");
$('#input-telephone').inputmask("+380-(99)-99-99-999");
$('#phone-number-input').inputmask("+380-(99)-99-99-999");
$('#one-click-input').inputmask("+380-(99)-99-99-999");
// *******************

$(".show-all-brands").on("click", function (e) {
  e.preventDefault();
  brandsPopup.toggle();
  console.log("hello");
});
$(".product-params2__element").on("mouseover",function () {
    $(this).children(".product-params2__double-image").show();
});
$(".product-params2__element").on("mouseout",function () {
    $(this).children(".product-params2__double-image").hide();
});
});
