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
});