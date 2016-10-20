$('.option').on('click',function(){
 $('.option').toggleClass('selected')
})

$('#career').on('click',function(){
  $('#career').val('1').change();
})

$('#not-published').on('click',function(){
  $('#career').val('0').change();
})

$(window).scroll(function(){
  $(".about-header h1").css("opacity", 1 - $(window).scrollTop() / 150);
  $(".about-header h6").css("opacity", 1 - $(window).scrollTop() / 150);
  var scrollpos = $(window).scrollTop();
  if (scrollpos >257) {
    $(".about-header .black-fade").css("opacity",  (($(window).scrollTop()-257 )*0.0105));
  } else {
    $('.about-header .black').removeClass('fixed-header');
    $(".about-header .black-fade").css("opacity",  0)
  }
  if (scrollpos >600) {
    $('.clearfixx').addClass('black-header')
  } else {
    $('.clearfixx').removeClass('black-header')
  }
});

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal({
    starting_top: '4%', // Starting top style attribute
      ending_top: '-10%'
  });
});

$('.need-account').on('click',function(e){
  e.preventDefault();
  $('.modal-content').toggleClass('create-account');
  $('.name-form-group').toggleClass('expanded')
  $('.terms').toggleClass('expanded',100);
});