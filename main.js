window.addEventListener('DOMContentLoaded', (event) =>{
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true)
      $('#js-global-menu').css('visibility', 'visible')
      $('#js-global-menu').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', false)
      $('#js-global-menu').css('visibility', 'hidden')
      $('#js-global-menu').attr('area-hidden','true')
    }
  })
 });
  var hdh = $('.header').height();
  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (hdh < top) {
      $('.header__nav').addClass('change-color');
      } else {
      $('.header__nav').removeClass('change-color');
    }
  });
  var hdh = $('.header').height();
  $(window).scroll(function() {
    var top = $(window).scrollTop();
  if (hdh < top) {
    $('.header__nav').css('top','0');
    } else {
    $('.header__nav').css('top','40px');
    }
  });

  var hdh = $('.header').height();
  $(window).scroll(function() {
    var top = $(window).scrollTop();
  if (hdh < top){
    $("#stylesheet").html('.hamburger-menu__line::before{background:#2b2b2b;}');
  }else{
    $("#stylesheet").html('.hamburger-menu__line::before{background:#fff;}');
  }
});

var hdh = $('.header').height();
  $(window).scroll(function() {
    var top = $(window).scrollTop();
  if (hdh < top){
    $("#style").html('.hamburger-menu__line::after{background:#2b2b2b;}');
  }else{
    $("#style").html('.hamburger-menu__line::after{background:#fff;}');
  }
});
  var hdh = $('.header').height();
  $(window).scroll(function() {
    var top = $(window).scrollTop();
  if (hdh < top) {
    $('.hamburger-menu__line').css('background','#2b2b2b');
    } else {
    $('.hamburger-menu__line').css('background','#fff');
    }
  });
});
