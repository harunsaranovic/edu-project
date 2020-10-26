$(document).ready(function() {
    $("html, body").animate({ scrollTop: 0 });
});

$(document).ready(function(){

  setTimeout(function(){
    $('#loading').fadeOut(500);
  }, 2000);

  $('.active').hover(function() {
    //$(this).children('.click-for-more').css({opacity: 1});
    $(this).children('.click-for-more').stop( true, true ).animate({opacity: 1},300 );
  }, function() {
    $(this).children('.click-for-more').stop( true, true ).animate({opacity: 0}, 300);
  });


  $('.active').click(function() {
    //$('.networks-grid').animate({opacity: 0}, 100, function () {
    //})

    $('.networks-grid').fadeOut(300, function() {
      $('#data').fadeIn(300);
    });
  });

  $('#back').click(function() {
    $('.networks-grid').fadeIn(300, function() {
      $('#data').fadeOut(300);
    });
    $('header').removeClass('hideheader', 1000);
  });
/*
  $('#go-net').click(function() {
    //$([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+200}, 800);
    $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+90}, 800);
  });
*/
  $('.stake-now').click(function() {
    //$([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+200}, 800);
    if($(this).attr('id') == 'mobstake' || $(this).attr('id') == 'mobstake2')
      $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+150}, 800);
    else
      $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+90}, 800);
  });

  var menuOpen = false;
  $('#tab').click(function() {
    if(!menuOpen){
      $(this).addClass('menu-opener-active', 500);
      $('#menu').animate({left: 0},500);
      menuOpen = true;
    }else{
      $(this).removeClass('menu-opener-active', 500);
      $('#menu').animate({left: '100%'},500);
      menuOpen = false;
    }
  });
  $('.mobile-link').click(function() {
      $('.menu-opener').removeClass('menu-opener-active', 500);
      $('#menu').animate({left: '100%'},700);
      menuOpen = false;
      switch ($(this).parent('a').attr('id')) {
        case 'm-home':
          $([document.documentElement, document.body]).animate({scrollTop: 0}, 800);
          break;
        case 'm-networks':
          $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+150}, 800);
          break;
        case 'm-portfolio':
          $([document.documentElement, document.body]).animate({scrollTop: $("#portfolio").offset().top-50}, 800);
          break;
        case 'm-services':
          $([document.documentElement, document.body]).animate({scrollTop: $("#services").offset().top-50}, 800);
          break;
        case 'm-about':
          $([document.documentElement, document.body]).animate({scrollTop: $("#about").offset().top-50}, 800);
          break;
        case 'm-contact':
          $([document.documentElement, document.body]).animate({scrollTop: $("#contact").offset().top-50}, 800);
          break;
      }
  });
  $('.header-link').click(function() {
      $('.header-link').children('a').removeClass('activ');
      if($(this).attr('id') != 'snhd')
        $(this).children('a').addClass('activ');
      switch ($(this).children('a').attr('id')) {
        case 'd-home':
          $([document.documentElement, document.body]).animate({scrollTop: 0}, 800);
          break;
        case 'd-networks':
          $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+90}, 800);
          break;
        case 'd-portfolio':
          $([document.documentElement, document.body]).animate({scrollTop: $("#portfolio").offset().top-150}, 800);
          break;
        case 'd-services':
          $([document.documentElement, document.body]).animate({scrollTop: $("#services").offset().top-150}, 800);
          break;
        case 'd-about':
          $([document.documentElement, document.body]).animate({scrollTop: $("#about").offset().top-150}, 800);
          break;
        case 'd-contact':
          $([document.documentElement, document.body]).animate({scrollTop: $("#contact").offset().top-150}, 800);
          break;
      }
  });




});


var white = true;
var red = true;
var header = true;

var sidebarHeight = $('#sidebar').height();
var gameHeight = $('#game').height();
var sidebarTop = $( window ).height() * 0.3;
var gameTop = $('#game').offset().top;
var game = false;
$(window).scroll( function() {

    if($(this).scrollTop()+sidebarTop+sidebarHeight > gameTop){
      //$('.s-link').css({backgroundColor: 'red'});
      $('.sidebar').addClass('sidebar-w2', 100);
    }else{
      $('.sidebar').removeClass('sidebar-w2', 100);
    }
    if($(this).scrollTop()+sidebarTop-sidebarHeight-gameHeight > gameTop){
      //$('.s-link').css({backgroundColor: 'purple'});
      $('.sidebar').removeClass('sidebar-w2', 100);

    }

    if (($(this).scrollTop() > $( window ).height()/2 && white) ){
      $('.sidebar').removeClass('sidebar-w', 100);
      white = false;
    }else if(($(this).scrollTop() < $( window ).height()/2 && !white) ){
      $('.sidebar').addClass('sidebar-w', 100);
      white = true;
    }

    if (($(this).scrollTop() > $( window ).height()*0.95 && red) ){
      $('.menu-opener').addClass('menu-opener-red', 300);
      red = false;
    }else if(($(this).scrollTop() < $( window ).height()*0.95 && !red) ){
      $('.menu-opener').removeClass('menu-opener-red', 300);
      red = true;
    }


    if (($(this).scrollTop() > $( window ).height()*0.1 && header) ){
      $('header').addClass('header-bg', 100);
      $("#logo").attr("src","img/logo.svg");
      header = false;
    }else if (($(this).scrollTop() < $( window ).height()*0.1 && !header) ){
      $('header').removeClass('header-bg', 100);
      $("#logo").attr("src","img/logo-white.svg");
      header = true;
    }


});
$(document).bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 < 0) {
      if (($(this).scrollTop() > $('#networks').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-networks').addClass('activ');
      }
      if (($(this).scrollTop() > $('#game').offset().top) ){
        //$('header').removeClass('hideheader',100);
      }
      if (($(this).scrollTop() > $('#services').offset().top-200) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-services').addClass('activ');
        //$('header').removeClass('hideheader',100);
      }
      if (($(this).scrollTop() > $('#about').offset().top-200) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-about').addClass('activ');
      }
      if (($(this).scrollTop() > $('#contact').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-contact').addClass('activ');
      }
    }else{
      if (($(this).scrollTop() < $('#contact').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-about').addClass('activ');
      }
      if (($(this).scrollTop() < $('#about').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-services').addClass('activ');
      }
      if (($(this).scrollTop() < $('#services').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        $('#d-networks').addClass('activ');
      }
      if (($(this).scrollTop() < $('#networks').offset().top) ){
        $('.header-link').children('a').removeClass('activ');
        //$('header').removeClass('hideheader',100);
      }

}

});
