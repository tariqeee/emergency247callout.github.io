(function() {

	"use strict";

	var NioBis7 = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.videoBox();
				this.Niobisrecommend();
				this.NioEigMianSlider();
				this.NioEigStickyHeader();
				this.NioEigMobileMenu();
				this.NioEigcounterUp();
				this.NioEidPortfolioSlide();
				this.NioEigPartnerSlide();
				this.NioEigTeamslider();
				this.NioEigTestimonialSlide();
				this.NioEigBloglider();
			},
			Niobisrecommend: function (){
				if(jQuery('.wow').length){
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
				jQuery('[data-background]').each(function() {
					jQuery(this).css('background-image', 'url('+ jQuery(this).attr('data-background') + ')');
				});
			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			NioEigMianSlider: function (){
				jQuery('#nio-eig-main-slider').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				});
			},
			NioEigStickyHeader: function (){
				if (jQuery('.nio-eig-header-style-eight').hasClass('sticky-open')) {
					jQuery(window).on('scroll', function () {
						if (jQuery(window).scrollTop() > 250) {
							jQuery('.nio-eig-header-style-eight').addClass('sticky-on')
						} else {
							jQuery('.nio-eig-header-style-eight').removeClass('sticky-on')
						}
					})
				}
			},
			NioEigMobileMenu: function (){
				jQuery('.nio-eig-open_mobile_menu').on("click", function() {
					jQuery('.nio-eig-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				jQuery('.nio-eig-open_mobile_menu').on('click', function () {
					jQuery('body').toggleClass('mobile_menu_overlay_on');
				});
				if(jQuery('.nio-eig-mobile_menu li.dropdown ul').length){
					jQuery('.nio-eig-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					jQuery('.nio-eig-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						jQuery(this).prev('ul').slideToggle(500);
					});
				}
			},
			NioEigcounterUp: function (){
				jQuery('.nio-count').counterUp({
					delay: 50,
					time: 2000,
				});
			},
			NioEidPortfolioSlide: function (){
				jQuery('#nio-eig-portfolio-slide').owlCarousel({
					margin:0,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				});
			},
			NioEigPartnerSlide: function (){
				jQuery('#nio-eig-partner-slide-id').owlCarousel({
					margin: 50,
					autoplay: true,
					loop: true,
					responsiveClass:true,
					nav: false,
					dots: false,
					slideTransition:'linear',
					autoplayTimeout: 10,
					autoplayHoverPause:false,
					autoplaySpeed:4500,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:3,
						},
						1000:{
							items:5,

						}
					},
				})
			},
			NioEigTeamslider: function (){
				if (jQuery('#nio-eig-team-slide').length) {
					jQuery('#nio-eig-team-slide').owlCarousel({
						loop:true,
						nav:true,
						margin:30,
						autoplay: 0,
						smartSpeed: 500,
						navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},
							600:{
								items:1
							},
							700:{
								items:2
							},
							800:{
								items:2
							},
							900:{
								items:3
							},
							1024:{
								items:4
							}
						}
					});    		
				}
			},
			NioEigTestimonialSlide: function (){
				jQuery('#nio-eig-testimonial-slide').owlCarousel({
					margin:35,
					responsiveClass:true,
					nav: false,
					dots: true,
					autoplay: false,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,
						}
					},
				})
			},
			NioEigBloglider: function (){
				if (jQuery('#nio-eig-blog-slide').length) {
					jQuery('#nio-eig-blog-slide').owlCarousel({
						loop:true,
						nav:false,
						dots: true,
						margin:30,
						autoplay: false,
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},
							600:{
								items:1
							},
							700:{
								items:1
							},
							800:{
								items:2
							},
							900:{
								items:2
							},
							1024:{
								items:3
							}
						}
					});    		
				}
			},
		}
	}
	jQuery(document).ready(function (){
		NioBis7.init();
	});

})();