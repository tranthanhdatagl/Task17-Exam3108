jQuery(function ($) {
    $('.c-mainvisual__draggable').slick({
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: false,
      dots: false,
      arrows: false,
      infinite: true
    });

    var url = "#";
    $('.c-news__table tr').click(function(){
      window.location = url;
    })

    $('.c-pickup__box').slick({
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow:'<button class="slick-prev"><img src="./assets/img/icon_prev.png" alt="Icon Slick Prev"></button>',
      nextArrow:'<button class="slick-next"><img src="./assets/img/icon_next.png" alt="Icon Slick Next"></button>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
              slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
          }
        },
      ]
  });
});

 
  