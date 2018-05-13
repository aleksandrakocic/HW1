import '../vendor/slick.min';

$(document).ready(function(){
//   $('.your-class').slick({});
  $('.one-time').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   adaptiveHeight: true,

  });
});

