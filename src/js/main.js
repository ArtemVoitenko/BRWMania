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


$("#open-main-nav").click (function () {
    mainNav.slideToggle();
});
$("#open-categories-button").click(function () {
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

$('.cart__open-btn').click(function() {
    cartModal.slideToggle();
});

$('.button-request-call').click(function () {
	fancybox.fadeIn();
	callPopUp.fadeIn();
});
// $(document).mouseup(function(e) {

//     if (!callPopUp.is(e.target) &&
//        callPopUp.has(e.target).length === 0) {
//        callPopUp.fadeOut();
//     fancybox.fadeOut();
//     }
// });
$(".close-popup").click(function () {
    console.log($(this).parent());
	$(this).parent().fadeOut();
	fancybox.fadeOut();
});
$(".big-slide__wrapper--clickable").click(function () {
    galleryPopup.fadeIn();
    fancybox.fadeIn();
        if(galleryPopup.css('display') === 'block'){
        galleryPopup.css("display", "flex");
    }
})
$("#close-gallery").click(function () {
    galleryPopup.fadeOut();
    fancybox.fadeOut();

});
var productCardList = $(".product-card__wrapper")
$("#list-view").on("click", function () {
    console.log(productCardList);
    productCardList.addClass("list-view");
});
$("#grid-view").on("click", function () {
    productCardList.removeClass("list-view");
});
var paginationLink = $(".pagination__link");
paginationLink.click(function (e){
    e.preventDefault();
    paginationLink.removeClass("pagination__link--active");
    $(this).addClass("pagination__link--active");

});
var verticalCategories = $(".vertical-categories--popup");
$(".horizontal-categories__link--show-vertical").click(function (e) {
    e.preventDefault();
    verticalCategories.fadeIn();
    fancybox.fadeIn();
})
// $(document).mouseup(function(e) {

//     if (!verticalCategories.is(e.target) &&
//        verticalCategories.has(e.target).length === 0) {
//        verticalCategories.slideUp();
//     fancybox.fadeOut();
//     }
// });
filtersMore.click(function () {
    filtersList.removeClass("filters__list--compressed");
    filtersMore.hide();
    filtersHide.show();
})
filtersHide.click(function () {
    filtersList.addClass("filters__list--compressed");
    filtersHide.hide();
    filtersMore.show();
})

$(".footer__title").click(function () {
    $(this).next(".footer__list").slideToggle();
})
$(".filters__show-button").click(function () {
    filters.slideToggle();
})

$(".cart-modal__delete-item").click(function () {
    $(this).parent().remove();
});
$(".product-comments__link").click(function () {
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

$(".vertical-categories__hide-item").click(function () {
        verticalCategories.fadeOut();
    fancybox.fadeOut();
});


});
