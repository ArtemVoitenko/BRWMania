$(function () {
    var quantityValue;
    var quantityInput;
$('.quantity-switch__less').on('click', function(e) {
    quantityInput = $(this).siblings('.quantity-switch__number');
    quantityValue = quantityInput.val();
    if (quantityValue > 1) {
        quantityValue --;
        $(quantityInput).val(quantityValue);
    }
    // $(".btn .btn-primary").click();
});

$('.quantity-switch__more').on('click', function(e) {
    if(quantityValue < 100){
    quantityInput = $(this).siblings('.quantity-switch__number');
    quantityValue = quantityInput.val();
    
        quantityValue ++;
        $(quantityInput).val(quantityValue);
    }
  // $('body').on('change','.quantity-switch__number',function(){
  //      if(quantityValue > 100){
  //       $(quantityInput).val(99);
  //      }
  //       });
    // $(".btn .btn-primary").click();
});
});