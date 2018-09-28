$(function () {
$('.quantity-switch__less').on('click', function(e) {
    e.preventDefault();
    var quantityInput = $(this).siblings('.quantity-switch__number');
    var quantityValue = quantityInput.val();
    if (quantityValue > 1) {
        quantityValue --;
        $(quantityInput).val(quantityValue);
    }
    // $(".btn .btn-primary").click();
});

$('.quantity-switch__more').on('click', function(e) {
    e.preventDefault();
    var quantityInput = $(this).siblings('.quantity-switch__number');
    var quantityValue = quantityInput.val();
    if (quantityValue <= 9) {
        quantityValue ++;
        $(quantityInput).val(quantityValue);
    }
    // $(".btn .btn-primary").click();
});
});