jQuery(function ($) {
  $(".c-header__itemnavbar").click(function(){
    $(".c-header__side").addClass("c-active");
    $('body').css("overflow","hidden");
  });

  $(".c-header__btnclose").click(function(){
    $(".c-header__side").removeClass("c-active");
    $('body').removeAttr( 'style');
  });

  $(".c-header__terserwrapclose").click(function(){
    $(".c-header__side").removeClass("c-active");
    $('body').removeAttr( 'style');
  });

  $(".c-post__contactphone").click(function(){
    if($(window).width() <= 767){
      window.location.assign('tel:089-847-1411');
    }
  });

  $(".c-backtotop").click(function () {
    $("html, body").animate({
      scrollTop: 0},1500);
      return false;
  });    
});
