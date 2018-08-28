$('.vertical-categories__item').hover(function () {
	var submenu = $(this).children("ul");
	submenu.slideToggle();
});


var cartModal = $(".cart-modal");
$(document).mouseup(function (e){ // событие клика по веб-документу
		
		if (!cartModal.is(e.target) // если клик был не по нашему блоку
		    && cartModal.has(e.target).length === 0) { // и не по его дочерним элементам
			cartModal.hide(); // скрываем его
		}
	});

$('.cart__open-btn').click(function(){
	cartModal.show();
});