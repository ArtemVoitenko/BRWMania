$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
  prevArrow : "<button class='slider__button slider__button--prev'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_left'></use></svg></button>", 
  nextArrow : "<button class='slider__button slider__button--next'><svg class='slider__button-icon' width='10' height = '10'><use xlink:href='#icon_arrow_right'></use></svg></button>"
});

$('.vertical-categories__item').hover(function () {
	var submenu = $(this).children("ul");
	submenu.slideToggle();
});

var currentQuantity = 1;
    $('.quantity-switch__less').on('click', function (e) {
        e.preventDefault();
        if (currentQuantity > 1) {
            currentQuantity -= 1;
            $(".quantity-switch__number").val(currentQuantity);
        }
    });
    
    $('.quantity-switch__more').on('click', function (e) {
        e.preventDefault();
        if(currentQuantity <= 9){
        currentQuantity += 1;
        $(".quantity-switch__number").val(currentQuantity);
        }
    });