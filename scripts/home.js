$(window).scroll(function(){
  $(".about-header h1").css("opacity", 1 - $(window).scrollTop() / 180);
  $(".about-header h6").css("opacity", 1 - $(window).scrollTop() / 220);
  $(".about-header button").css("opacity", 1 - $(window).scrollTop() / 260);
  var scrollpos=$(window).scrollTop();
  if (scrollpos >320){
    $(".about-header .black-fade").css("opacity", (($(window).scrollTop()-400 )*0.0235));
  } else {
    $('.about-header .black').removeClass('fixed-header');
    $(".about-header .black-fade").css("opacity",  0)
  }
  if (scrollpos >440) {
    $('.clearfixx').addClass('black-header')
  } else {
    $('.clearfixx').removeClass('black-header')
  }
});

$(window).load(function() {
  $('.Countl').each(function() {
    var $this=$(this);
    jQuery({Counter: 0}).animate({Counter: $this.text()}, {
      duration: 1500,
      easing: 'swing',
      step: function() {
        var num=Math.ceil(this.Counter).toString();
        if(Number(num) > 999){
          while (/(\d+)(\d{3})/.test(num)) {
            num=num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
          }
        }
        $this.text(num);
      }
    });
  });
});

$(window).scroll(function(event) {

  if($(".hero").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    setTimeout(function () {
      $(".path.one").attr("class", "path one grown");
      $(".path.two").attr("class", "path two grown");
    }, 500);
  }

  if($(".second-section").offset().top == ($(window).scrollTop() + window.innerHeight)) {
    $('.Count').each(function() {
      var $this=$(this);
      jQuery({Counter: 0}).animate({Counter: $this.text()}, {
        duration: 1500,
        easing: 'swing',
        step: function() {
          var num=Math.ceil(this.Counter).toString();
          if(Number(num) > 999){
            while (/(\d+)(\d{3})/.test(num)) {
              num=num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
          }
          $this.text(num);
        }
      });
    });
  }
});

$(window).scroll(function() {
  if($('#blue1 .screenshot').visible()){
    setTimeout(function(){
      $('#blue1 .screenshot').show();
      $('#blue1 .screenshot').addClass('fadeInLeft animated')
    },1000)
  }
  if($('#first-card').visible()){
    setTimeout(function(){
      $('#blue3 .screenshot').show();
      $('#blue3 .screenshot').addClass('fadeInRight animated')
    },2000)
  }
});

$( window ).load(function() {
  $("#first-card").height($("#second-card").height());
});

$('.need-account').on('click', function(e){
  e.preventDefault();
  $('.modal-content').toggleClass('create-account');
  $('.name-form-group').toggleClass('expanded')
  $('.terms').toggleClass('expanded',100);
})

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal({
    starting_top: '4%', // Starting top style attribute
    ending_top: '-10%'
  });
});