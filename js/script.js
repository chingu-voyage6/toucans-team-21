$(document).ready(function () {

    $('h1').delay(300).fadeTo(3000, 1);
    $('p.tagline').delay(400).fadeTo(3000, 1);
    $('.btn-cta-light').delay(700).fadeTo(3000, 1);
    $('.main-image').delay(700).fadeTo(4000, 1);
    $('h2').delay(800).fadeTo(3000, 1);

    $("a.scrollLink").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 400);
    });

    $('.btn-top').click(function(){
      $('html, body').animate({scrollTop:0}, 400);
      return false;
    });

    const $cardleft = $('.cardleft');
    const $cardmiddle = $('.cardmiddle');
    const $cardright = $('.cardright');

    $cardleft.waypoint(function () {
      $cardleft.addClass('js-cardleft-animate');
    }, { offset: '70%' });

    $cardmiddle.waypoint(function () {
      $cardmiddle.addClass('js-cardmiddle-animate');
    }, { offset: '70%' });

    $cardright.waypoint(function () {
      $cardright.addClass('js-cardright-animate');
      }, { offset: '70%' });

    $('.btn-top').waypoint(function() {
        $('.btn-top').addClass('btn-top-reveal');
      }, { offset: '64%' });

    $('.btn-top').waypoint(function() {
      $('.btn-top').removeClass('btn-top-reveal');
    }, { offset: '65%'});


});
