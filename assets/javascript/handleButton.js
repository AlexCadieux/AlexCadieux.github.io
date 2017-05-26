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

  $(window).scroll(function(){
      if($(document).scrollTop() > $(".about-me").offset().top - 81 && $(document).scrollTop() < $(".curriculum").offset().top - 80)
      {
        $('#aboutMeSection').addClass('activated');
      }
      else
      {
        $('#aboutMeSection').removeClass('activated')
      }

      if($(document).scrollTop() > $(".curriculum").offset().top - 81 && $(document).scrollTop() < $(".portfolio").offset().top - 80)
      {
        $('#cvSection').addClass('activated');
      }
      else
      {
        $('#cvSection').removeClass('activated')
      }

      if($(document).scrollTop() > $(".portfolio").offset().top - 81 && $(document).scrollTop() < $(".tools").offset().top - 150)
      {
        $('#portfolioSection').addClass('activated');
      }
      else
      {
        $('#portfolioSection').removeClass('activated')
      }

      if($(document).scrollTop() > $(".tools").offset().top - 151 && $(document).scrollTop() < $(".main-footer").offset().top - 80)
      {
        $('#toolsSection').addClass('activated');
      }
      else
      {
        $('#toolsSection').removeClass('activated')
      }
  });
