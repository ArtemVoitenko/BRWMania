$('.vertical-categories__item').hover(function() {
    var submenu = $(this).children("ul");
    submenu.toggle();
});


var cartModal = $(".cart-modal");
$(document).mouseup(function(e) {

    if (!cartModal.is(e.target) &&
        cartModal.has(e.target).length === 0) {
        cartModal.hide();
    }
});

$('.cart__open-btn').click(function() {
    cartModal.show();
});