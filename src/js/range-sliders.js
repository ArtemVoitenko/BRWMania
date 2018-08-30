$(function() {
    // body...
$("#price-slider").slider({
    range: true,
    min: 1,
    max: 3000,
    values: [600, 2000],
    slide: function(event, ui) {
        $("#priceMin").val(ui.values[0]);
        $("#priceMax").val(ui.values[1]);
    }
});

$("#priceMin").val($("#price-slider").slider("values", 0));
$("#priceMax").val($("#price-slider").slider("values", 1));


$("#deep-slider").slider({
    range: true,
    min: 1,
    max: 3000,
    values: [600, 2000],
    slide: function(event, ui) {
        $("#deepMin").val(ui.values[0]);
        $("#deepMax").val(ui.values[1]);
    }
});
$("#deepMin").val($("#deep-slider").slider("values", 0));
$("#deepMax").val($("#deep-slider").slider("values", 1));


$("#width-slider").slider({
    range: true,
    min: 1,
    max: 3000,
    values: [600, 2000],
    slide: function(event, ui) {
        $("#widthMin").val(ui.values[0]);
        $("#widthMax").val(ui.values[1]);
    }
});
$("#widthMin").val($("#width-slider").slider("values", 0));
$("#widthMax").val($("#width-slider").slider("values", 1));
});