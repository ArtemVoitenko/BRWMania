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