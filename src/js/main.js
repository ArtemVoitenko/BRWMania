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

$("#open-main-nav").on("click", function () {
    mainNav.toggle('slide','left');
});
$("#open-categories-button").on("click", function () {
    horizontalCategories.toggleClass("display-flex");
    });

$('.vertical-categories__item').hover(function() {
    var submenu = $(this).children("ul");
    submenu.toggle();
});
// $(document).mouseup(function(e) {

//     if (!cartModal.is(e.target) &&
//         cartModal.has(e.target).length === 0) {
//         cartModal.slideUp();
//     }
// });

$('.cart__open-btn').on("click", function() {
    cartModal.slideToggle();
});

$('.button-request-call').on("click", function () {
	fancybox.fadeIn();
	callPopUp.fadeIn();
});
$(document).mouseup(function(e) {

    if (!$(".common-popup").is(e.target) &&
       $(".common-popup").has(e.target).length === 0) {
       $(".common-popup").fadeOut();
    fancybox.fadeOut();
    }
});
$("body").on("click",".close-popup", function () {
    console.log($(this).parent());
	$(this).parent().fadeOut();
	fancybox.fadeOut();
});
$(".big-slide__wrapper--clickable").on("click", function () {
    galleryPopup.fadeIn();
    fancybox.fadeIn();
        if(galleryPopup.css('display') === 'block'){
        galleryPopup.css("display", "flex");
    }
});
$("#close-gallery").on("click", function () {
    galleryPopup.fadeOut();
    fancybox.fadeOut();

});
var productCardList = $(".product-card__wrapper");
$("#list-view").on("click", function () {
    console.log(productCardList);
    productCardList.addClass("list-view");
});
$("#grid-view").on("click", function () {
    productCardList.removeClass("list-view");
});
var paginationLink = $(".pagination__link");
paginationLink.on("click", function (e){
    e.preventDefault();
    paginationLink.removeClass("pagination__link--active");
    $(this).addClass("pagination__link--active");

});
var verticalCategories = $(".vertical-categories--popup");
$(".horizontal-categories__link--show-vertical").on("click", function (e) {
    e.preventDefault();
    verticalCategories.fadeIn();
    $(".fancybox-categories").fadeIn();
})
$(document).mouseup(function(e) {

    if (!verticalCategories.is(e.target) &&
       verticalCategories.has(e.target).length === 0) {
       verticalCategories.fadeOut();
    $(".fancybox-categories").fadeOut();
    }
});
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
    filters.slideToggle();
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

// buttonBuy.on("click", function () {
//     fancybox.fadeIn();
//     commonPopup.fadeIn();
//     var productName = $(this).parent().siblings(".product__link").children(".product-card__name").text();
//     commonPopup.children(".common-popup__title").text("Товар" + " " + productName + " " + "добавлен в корзину")
// });

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
$('#reg-number').inputmask("+380-(99)-99-99-999");
$('#input-telephone').inputmask("+380-(99)-99-99-999");
$('#phone-number-input').inputmask("+380-(99)-99-99-999");
$('#one-click-input').inputmask("+380-(99)-99-99-999");

$(".product-gallery__big-slider--clickable").click(function () {
    galleryPopup.fadeIn();
    fancybox.fadeIn();
        if(galleryPopup.css('display') === 'block'){
        galleryPopup.css("display", "flex");
    }
});

});
