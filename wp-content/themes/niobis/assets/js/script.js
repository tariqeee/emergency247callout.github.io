(function ($) {
"use strict"; 
 
    $(document).ready(function() {

      var a = $(".khb-mobilenav");
      a.length && (a.children("li").addClass("menu-item-parent"), a.find(".menu-item-has-children > a").on("click", function(e) {
          e.preventDefault();
          $(this).toggleClass("opened");
          var n = $(this).next(".sub-menu"),
              s = $(this).closest(".menu-item-parent").find(".sub-menu");
          a.find(".sub-menu").not(s).slideUp(250), n.slideToggle(250)
      }));

      $('.khbtap').on('click',function(){
        $('html').removeClass('menu-is-closed').addClass('menu-is-opened');
        
      });

      $('.menu-close, .click-capture').on('click', function(){
        $('html').removeClass('menu-is-opened').addClass('menu-is-closed');
      });

      $('.toggle-overlay').on('click', function() {
          $('.search-body').toggleClass('search-open');
      }); 

      if ($('.blog-grids').hasClass('masonry-container')) {
          var container = $('.blog-grids');
          container.imagesLoaded(function() {
              container.masonry({
                  itemSelector: '.single-blog-style-one',
                  isAnimated: true
              });
          });

      }            
      $(".spinwrap").fadeOut("slow");

        jQuery(window).on('load', function(){
            if($('.wow').length){
                var wow = new WOW(
                    {
                        boxClass:     'wow',
                        animateClass: 'animated',
                        offset:       0,
                        mobile:       true,
                        live:         true
                    }
                );
                wow.init();
            }
        });

    });

})(jQuery);