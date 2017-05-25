$(function(){});
  $("#aboutMeSection").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-me").offset().top - 80
    }, 2000);
  });

  $("#cvSection").click(function() {
    $('html, body').animate({
        scrollTop: $(".curriculum").offset().top - 80
    }, 2000);
  });

  $("#portfolioSection").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top - 80
    }, 2000);
  });

  $("#toolsSection").click(function() {
    $('html, body').animate({
        scrollTop: $(".tools").offset().top - 80
    }, 2000);
  });
