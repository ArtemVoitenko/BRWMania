$(function() {
var cartModal = $(".cart-modal");
var callPopUp = $(".call-popup");
var fancybox = $(".fancybox");
var galleryPopup = $(".gallery-popup");

$('.vertical-categories__item').hover(function() {
    var submenu = $(this).children("ul");
    submenu.toggle();
});
$(document).mouseup(function(e) {

    if (!cartModal.is(e.target) &&
        cartModal.has(e.target).length === 0) {
        cartModal.slideUp();
    }
});

$('.cart__open-btn').click(function() {
    cartModal.slideDown();
});

$('.button-request-call').click(function () {
	fancybox.slideDown();
	callPopUp.slideDown();
});
$(document).mouseup(function(e) {

    if (!callPopUp.is(e.target) &&
       callPopUp.has(e.target).length === 0) {
       callPopUp.fadeOut();
    fancybox.fadeOut();
    }
});
$("#close-call-popup").click(function () {
	callPopUp.fadeOut();
	fancybox.fadeOut();
});
$(".big-slide__wrapper--clickable").click(function () {
    galleryPopup.slideDown();
    fancybox.slideDown();
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
var horizontalCategories = $(".vertical-categories--popup");
$(".horizontal-categories__link--show-vertical").click(function () {
    horizontalCategories.slideDown();
    fancybox.slideDown();
})
$(document).mouseup(function(e) {

    if (!horizontalCategories.is(e.target) &&
       horizontalCategories.has(e.target).length === 0) {
       horizontalCategories.slideUp();
    fancybox.slideUp();
    }
});

});
