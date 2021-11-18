$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
});


$("#LIZ .owl-carousel").owlCarousel({
   loop: true,
   nav: false,
   dots: false,
   responsive : {
       0: {
           items: 3
       },
       600: {
           items: 5
       },
       1000 : {
           items: 7
       }
   }
});