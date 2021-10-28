$(function(){

$('#market-item_1').click(function(){
    $('#market-popup_safety').fadeIn(600);
});

$('.popup-close_btn').click(function(){
    $('#market-popup_safety').fadeOut(600);
});


$('#market-item_2').click(function(){
    $('#market-popup_participation').fadeIn(600);
});

$('.popup-close_btn').click(function(){
    $('#market-popup_participation').fadeOut(600);
});


$('#market-item_3').click(function(){
    $('#market-popup_radical').fadeIn(600);
});

$('.popup-close_btn').click(function(){
    $('#market-popup_radical').fadeOut(600);
});

$('#market-item_4').click(function(){
    $('#market-popup_thinking').fadeIn(600);
});

$('.popup-close_btn').click(function(){
    $('#market-popup_thinking').fadeOut(600);
});


$(".markets-inner_item").on("click", function () {
    $("html").addClass("lock");
  });

  $(".popup-close_btn").on("click", function () {
    $("html").removeClass("lock");
  });


});