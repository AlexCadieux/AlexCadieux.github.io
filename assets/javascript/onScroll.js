$(function(){
  $('#main-header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 450)
    {
        if($('#main-header').data('size') == 'big')
        {
            $('#main-header').data('size','small');
            $('#main-header').addClass('sm-menu');
            // $('#main-header').stop().animate({
            //     height:'40px'
            // },600);
        }
    }
    else
    {
        if($('#main-header').data('size') == 'small')
        {
            $('#main-header').data('size','big');
            $('#main-header').removeClass('sm-menu');
            // $('#main-header').stop().animate({
            //     height:'100px'
            // },600);
        }
    }
});
