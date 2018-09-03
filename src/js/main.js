$(function() {
var cartModal = $(".cart-modal");
var callPopUp = $(".call-popup");
var fancybox = $(".fancybox");

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

$(".call-popup__close-button").click(function () {
	callPopUp.fadeOut();
	fancybox.fadeOut();
});
var productCardList = $(".product-card__wrapper")
$("#list-view").on("click", function () {
    console.log(productCardList);
    productCardList.addClass("list-view");
});
$("#grid-view").on("click", function () {
    productCardList.removeClass("list-view");
})
});
// $(".big-slide__zoom").ZooMove({
//     scale : 2
// });