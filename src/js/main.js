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

$(".sliderRange").slider({
        range: true,
        min: 1,
        max: 10000,
        values: [100, 2000],
        slide: function(event, ui) {
            $("#amountMin").val(ui.values[0]);
            $("#amountMax").val(ui.values[1]);
        }
    });
    $("#amountMin").val($(".sliderRange").slider("values", 0));
    $("#amountMax").val($(".sliderRange").slider("values", 1));