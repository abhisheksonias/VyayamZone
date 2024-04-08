 jQuery(document).ready(function($){
  document.querySelector(".year").innerHTML = new Date().getFullYear();

  // init 
    $('.slideVisible').on('init', function () {
        $('.slideVisible').css({"visibility" : "visible"});
    });
    // slider content
    $('.slider-content').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    //button slide event
    $('a[data-slide]').click(function(e) {
     e.preventDefault();
     var slideno = $(this).data('slide');
     $('.slider-content').slick('slickGoTo', slideno - 1);
   });
    
  });