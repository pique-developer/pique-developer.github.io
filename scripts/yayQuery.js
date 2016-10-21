
const home = {
  init() {
    if ($('#landing').length) {
      home.fadeHero()
      home.incrementCounter()
      home.drawPaths()
      home.animateImages()
    }
  },
  fadeHero() {
    $(window).scroll(_ => {
      const $windowScrollTop = $(window).scrollTop()
      $('.p-hero h1').css('opacity', 1 - $windowScrollTop / 180)
      $('.p-hero h6').css('opacity', 1 - $windowScrollTop / 220)
      $('.p-hero button').css('opacity', 1 - $windowScrollTop / 260)

      if ($windowScrollTop > 320) {
        $('.p-hero .p-fade').css('opacity', ($windowScrollTop - 400 ) * 0.0235)
      } else {
        $('.p-hero .black').removeClass('p-fixed')
        $('.p-hero .p-fade').css('opacity',  0)
      }

      if ($windowScrollTop > 440) {
        $('.p-header').addClass('p-fill')
      } else {
        $('.p-header').removeClass('p-fill')
      }
    })
  },
  incrementCounter() {
    $(window).load(function() {
      $('.Countl').each(function() {
        const $this = $(this)
        $({Counter: 0}).animate({Counter: $(this).text()}, {
          duration: 1500,
          easing: 'swing',
          step: function() {
            let num = Math.ceil(this.Counter).toString()
            if (Number(num) > 999) {
              while (/(\d+)(\d{3})/.test(num)) {
                num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
              }
            }
            $this.text(num)
          }
        })
      })
    })
  },
  drawPaths() {
    $(window).scroll(function(event) {
      const $windowScrollTop = $(window).scrollTop()
      const $windowOuterHeight = $(window).outerHeight()
      const windowInnerHeight = window.innerHeight

      if ($('.hero').offset().top < $windowScrollTop + $windowOuterHeight) {
        setTimeout(function () {
          $('.path.one').attr('class', 'path one grown')
          $('.path.two').attr('class', 'path two grown')
        }, 500)
      }

      if ($('.second-section').offset().top == ($windowScrollTop + windowInnerHeight)) {
        $('.Count').each(function() {
          const $this = $(this)
          $({Counter: 0}).animate({Counter: $this.text()}, {
            duration: 1500,
            easing: 'swing',
            step: function() {
              let num = Math.ceil(this.Counter).toString()
              if (Number(num) > 999) {
                while (/(\d+)(\d{3})/.test(num)) {
                  num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
                }
              }
              $this.text(num)
            }
          })
        })
      }
    })
  },
  animateImages() {
    $(window).scroll(_ => {
      const $imageL = $('#blue1 .screenshot')
      const $imageR = $('#blue3 .screenshot')

      if ($imageL.visible()) {
        setTimeout(_ => {
          $imageL.show()
          $imageL.addClass('fadeInLeft animated')
        }, 1000)
      }

      if ($('#first-card').visible()) {
        setTimeout(_ => {
          $imageR.show()
          $imageR.addClass('fadeInRight animated')
        }, 2000)
      }
    })

    $(window).load(_ => $('#first-card').height($('#second-card').height()))
  }
}

const about = {
  init() {
    if ($('#about-us').length) {
      about.fadeHero()
    }
  },
  fadeHero() {
    $(window).scroll(function(){
      const $windowScrollTop = $(window).scrollTop()
      $('.p-hero h1').css('opacity', 1 - $windowScrollTop / 150)

      if ($windowScrollTop > 139) {
        $('.p-hero .black-fade').css('opacity', ($windowScrollTop - 139) * 0.0105)
      } else {
        $('.p-hero .black').removeClass('p-fixed')
        $('.p-hero .p-fade').css('opacity',  0)
      }
      if ($windowScrollTop > 225) {
        $('.p-header').addClass('p-fill')
      } else {
        $('.p-header').removeClass('p-fill')
      }
    })
  }
}

const educators = {
  init() {
    if ($('#educators').length) {
      educators.controlFormEvents()
    }
  },
  controlFormEvents() {
    const $option = $('.option')
    const $career = $('#career')
    $option.on('click', _ => $option.toggleClass('selected'))
    $career.on('click', _ => $career.val('1').change())
    $('#not-published').on('click', _ => $career.val('0').change())
  }
}

const modal = {
  init() {
    $('.need-account').on('click', e => {
      e.preventDefault()
      $('.modal-content').toggleClass('create-account')
      $('.name-form-group').toggleClass('expanded')
      $('.terms').toggleClass('expanded', 100)
    })

    $('.modal-trigger').leanModal({starting_top: '4%', ending_top: '-10%'})
  }
}

const providers = {
  init() {
    if ($('#provider').length) {
      setInterval(providers.startCarouselInterval, 2500)
    }
  },
  startCarouselInterval() {
    if ($('.on').is('#one')) {
      $('#one').addClass('negative').removeClass('one on')
      $('#two').addClass('one on').removeClass('two')
      $('.step#two').addClass('header-on')
      $('#three').addClass('two').removeClass('three')
      $('.step#one').removeClass('header-on')
    } else if ($('.on').is('#two')) {
      $('#one').addClass('two').removeClass('negative')
      $('#two').addClass('negative').removeClass('one on')
      $('#three').addClass('one on').removeClass('two')
      $('.step#three').addClass('header-on')
      $('.step#two').removeClass('header-on')
    } else if ($('.on').is('#three')) {
      $('#one').addClass('one on').removeClass('two')
      $('#two').addClass('two').removeClass('negative')
      $('#three').addClass('negative').removeClass('one on')
      $('.step#three').removeClass('header-on')
      $('.step#one').addClass('header-on')
    }
  }
}

const students = {
  init() {
    if ($('#students').length) {
      students.animateImages()
      students.modifyHashLink()
    }
  },
  animateImages() {
    $(window).scroll(function(){
      const $windowScrollTop = $(window).scrollTop()
      const animateLeftClass = 'animated bounceInLeft'
      const animateRightClass = 'animated bounceInRight'

      if ($windowScrollTop > 1587 && $windowScrollTop < 2533) {
        $('#grad').addClass('fixed-grad')
        $('#grad').removeClass('end-grad')
      } else {
        $('#grad').removeClass('fixed-grad')
      }
      if ($windowScrollTop > 2533) {
        $('#grad').addClass('end-grad')
      }
      if ($windowScrollTop > 1122) {
        $('#request').show()
        $('#request').addClass(animateLeftClass)
      }
      if ($windowScrollTop > 1370) {
        $('#student-image').show()
        $('#student-image').addClass(animateRightClass)
      }
      if ($windowScrollTop > 1570) {
        $('#screenshot').show()
        $('#screenshot').addClass(animateLeftClass)
      }
      if ($windowScrollTop > 1700) {
        $('#find').show()
        $('#find').addClass(animateRightClass)
      }
      if ($windowScrollTop > 1950) {
        $('#reuse').show()
        $('#reuse').addClass(animateLeftClass)
      }
      if ($windowScrollTop > 2100) {
        $('#example').show()
        $('#example').addClass(animateRightClass)
      }
    })
  },
  modifyHashLink() {
    $(_ => {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (
          location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname
        ) {
          let $hash = $(this.hash)
          $hash = $hash.length ? $hash : $('[name=' + this.hash.slice(1) +']')
          if ($hash.length) {
            $('html, body').animate({scrollTop: $hash.offset().top - 150}, 1000)
            return false
          }
        }
      })
    })
  }
}

$(document).ready(_ => {
  home.init()
  modal.init()
  about.init()
  educators.init()
  providers.init()
  students.init()
})