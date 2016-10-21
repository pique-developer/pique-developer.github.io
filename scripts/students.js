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
  var scrollpos=$(window).scrollTop();
  if(scrollpos >257){
    $(".about-header .black-fade").css("opacity",  (($(window).scrollTop()-257 )*0.0105));
  }else{
    $('.about-header .black').removeClass('fixed-header');
    $(".about-header .black-fade").css("opacity",  0)
  }
  if(scrollpos >600){
    $('.clearfixx').addClass('black-header')
  }else{
    $('.clearfixx').removeClass('black-header')
  }
});

 $(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target=$(this.hash);
    target=target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 150
      }, 1000);
      return false;
    }
  }
});
});

$(window).scroll(function(){
  var scrollpos=$(window).scrollTop();

  if(scrollpos >1587 && scrollpos <2533){
    $('#grad').addClass('fixed-grad')
    $('#grad').removeClass('end-grad')

  }else{
    $('#grad').removeClass('fixed-grad')
  }
  if (scrollpos >2533){
    $('#grad').addClass('end-grad')
  }
  if (scrollpos > 1122){
    $('#request').show();
    $('#request').addClass('animated bounceInLeft');
  }
  if (scrollpos > 1370){
    $('#student-image').show();
    $('#student-image').addClass('animated bounceInRight');
  }
  if (scrollpos > 1570){
    $('#screenshot').show();
    $('#screenshot').addClass('animated bounceInLeft');
  }
  if (scrollpos > 1700){
    $('#find').show();
    $('#find').addClass('animated bounceInRight');
  }
  if (scrollpos > 1950){
    $('#reuse').show();
    $('#reuse').addClass('animated bounceInLeft');
  }
  if (scrollpos > 2100){
    $('#example').show();
    $('#example').addClass('animated bounceInRight');
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
})