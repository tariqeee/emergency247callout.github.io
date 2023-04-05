(function ($) {
"use strict";

    var NioChart = function ($scope, $) {

        $scope.find('.niobis-chart').each(function () {

            var settings = $(this).data('xld');

            if ($("#chart-area").length) {
                var $chart = $("#chart-area");
                $chart.appear();
                $(document.body).on('appear', '#chart-area', function() {
                    var current_item = $(this);

                    if (!current_item.hasClass('appeared')) {
                        current_item.addClass('appeared');

                        var ctx = document.getElementById("chart-area");
                        var chart_area = new Chart(ctx, {
                            type: 'doughnut',
                            data: {
                                datasets: [{
                                    data: [33.33,33.33,33.33],
                                    backgroundColor: [
                                    '#f3525a',
                                    '#007bbf',
                                    '#152440',
                                    ],
                                    label: 'Dataset 1'
                                }],
                                labels: [
                                'Engagement',
                                'Team Members',
                                'Projects Done'
                                ] 
                            },
                            options: {
                                responsive: true,
                                legend: {
                                    display: false,
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true
                                }
                            }

                        });
                    }                
                });
            };

            if ($("#nio_chart").length) {

                var $chart = $("#nio_chart");
                $chart.appear();

                $(document.body).on('appear', '#nio_chart', function() {
                    var current_item = $(this);

                    if (!current_item.hasClass('appeared')) {
                        current_item.addClass('appeared');

                        var ctx = document.getElementById("nio_chart");
                        var nio_chart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                                datasets: [{
                                    label: 'Our Profit Level',
                                    data: [40, 50.1, 40.8, 30.8, 30.2, 20.5, 30.7, 50, 50.5, 80, 90, 100],
                                    lineTension: 0.1,
                                    backgroundColor: 'rgba(219, 6, 45, 0.5)',
                                    borderColor: 'rgba(219, 6, 45, 1)',
                                    borderCapStyle: 'butt',
                                    borderWidth: 1,
                                    PointBorderCoolor: 'rgba(219, 6, 45, 1)',
                                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                                    pointBorderWidth: 8,
                                    poitHoverBackgroundColor: 'rgba(219, 6, 45, 1)',
                                }]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            fontColor: "white",
                                            fontSize: 12,
                                        },
                                        gridLines: {
                                            color: "rgba(219, 6, 45, 0.2)",
                                            zeroLineColor: 'rgba(219, 6, 45, 1)',
                                            zeroLineWidth: 5,
                                        },

                                    }],
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "white",
                                            fontSize: 12,
                                        },
                                        gridLines: {
                                            color: "rgba(219, 6, 45, 0.2)",
                                            zeroLineColor: 'rgba(219, 6, 45, 1)',
                                            zeroLineWidth: 5,
                                        },
                                    }],
                                    animateScale : true,
                                },
                                legend: {
                                    display: false,
                                },
                                maintainAspectRatio: false,
                                animation: {
                                    duration: 2500,
                                }

                            }

                        });
                    }                
                });
            };
                
        });

    };


    var NBProject = function ($scope, $) {

        $scope.find('.project_slide_area').each(function () {

            var settings = $(this).data('xld');

            $('#project_slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                center: true,
                autoplay: false,
                navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
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
                        items:2,
                    },
                    1000:{
                        items:2,

                    }
                },
            })

        });

    };

    var NBClient = function ($scope, $) {

        $scope.find('.client-list').each(function () {

            var settings = $(this).data('xld');

            $('#client_slide').owlCarousel({
                margin: 30,
                loop:true,
                responsiveClass:true,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 1000,
                responsive:{
                    0:{items:1},
                    480:{items:2},
                    787:{items:settings['mitem']},
                    1240:{items:settings['item']}
                }
            })

        });

    };

    var FilterFolio = function ($scope, $) {

        $scope.find('.filter-service').each(function () {

        $('.nav-item').click(function(){
            $('.nav-item').removeClass("active");
            $(this).addClass("active");
            return false;
        });
            
        $(function() {
            var selectedClass = "";
            $(".nav-item").click(function(){
                selectedClass = $(this).attr("data-rel");
                $(".portfolio li").fadeOut(300);
                $(".portfolio li." + selectedClass).delay(300).fadeIn(300);
            });
        });

        });

    };

    var NBSrvSlid2 = function ($scope, $) {

        $scope.find('.service_slide2').each(function () {

            var settings = $(this).data('xld');

            $('#service_item2').owlCarousel({
                items:1,
                nav: true,
                margin: 0,
                dots: false,
                autoplay: false,
                smartSpeed: 1000,
                responsiveClass:true,
                navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            })

        });

    };

    var MainSlide = function ($scope, $) {

        $scope.find('#slider').each(function () {

            var settings = $(this).data('xld');

            $('#slide_wrapper').owlCarousel({
                items: 1,
                loop: true, 
                nav: false,
                dots: true,
                autoplay: false,
            });

        });

    };

    var H5tam = function ($scope, $) {

        $scope.find('#nio-con-team-slider').each(function () {

            var settings = $(this).data('xld');

                $('#nio-con-team-slider').owlCarousel({
                    margin: 30,
                    responsiveClass:true,
                    nav: false,
                    dots: true,
                    loop:true,
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
                            items:2,
                        },
                        700:{
                            items:2,
                        },
                        1000:{
                            items:3,

                        },
                        1300:{
                            items: 3,

                        },
                        1600:{
                            items: 3,

                        },
                    },
                });

                $('.nio-con-team-img-social').on("click", function() {
                    if ( $(this).hasClass('social-show') ) {
                        $(this).removeClass('social-show');
                    } else {
                        $('nio-con-team-img-social.social-show').removeClass('social-show');
                        $(this).addClass('social-show');    
                    }
                });
                
        });

    };


    var Slidr5 = function ($scope, $) {

        $scope.find('#nio-con-slider-id').each(function () {

            var settings = $(this).data('xld');

                jQuery('#nio-con-slider-id').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    navSpeed: 1000,
                    smartSpeed: 2000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                });

        });

    };

    var Slidr6 = function ($scope, $) {

        $scope.find('.nw-slider-section').each(function () {

            var settings = $(this).data('xld');

            jQuery('#nw-slider-id').owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: false,
                autoplay: false,
                navSpeed: 1000,
                smartSpeed: 2000,
                navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });

        });
 
    };

    var Header6 = function ($scope, $) {

        $scope.find('.fifth_header').each(function () {

            var settings = $(this).data('xld');

                $('.fifth-sidebar-icon.open_bar').on("click", function() {
                    $('.wide_sidebar').toggleClass("wide_sidebar_open");
                });

                $('.side_bar_overlay,.wide_sidebar_collapse').on("click", function() {
                    $('.wide_sidebar').toggleClass("wide_sidebar_open");
                });

                $('.fifth-navigation-sidebar-icon').on('click', function () {
                    $('body').toggleClass('sidebar_overlay_open');
                });

                if($('.soft-m-mobile-main-navigation li.dropdown ul').length){
                    $('.soft-m-mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
                    $('.soft-m-mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
                $(".dropdown-btn").on("click", function () {
                    $(this).toggleClass("toggle-open");
                });

                var nav = $('.main-header');
                if ($(window).width() > 300) {
                    $(window).on("scroll", function() {
                        if ($(this).scrollTop() > 200) {
                            nav.addClass("f-nav UpToDown");
                        } else {
                            nav.removeClass("f-nav UpToDown");
                        }
                    });
                }

        });

    };



    var H5Testi = function ($scope, $) {

        $scope.find('#nio-con-testimonial').each(function () {

            var settings = $(this).data('xld');

                jQuery('#nio-con-testimonial-slide').owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: false,
                    dots: true,
                    navSpeed: 800,
                    autoplay: false,
                    smartSpeed: 2000,
                    animateOut: 'slideOutLeft',
                    animateIn: 'slideInRight',
                });

        });

    };


    var Home6Slid = function ($scope, $) {

        $scope.find('.home_slide5').each(function () {

            var settings = $(this).data('xld');

            jQuery('#five_slide_wrapper').owlCarousel({
                items: 1,
                animateIn: 'lightSpeedIn',
                loop: true,
                nav: false,
                dots: true,
                autoplay: false,
            });

        });

    };
    var Home6port = function ($scope, $) {

    $scope.find('.portfolio_section_h5').each(function () {

     var settings = $(this).data('xld');

        var filterizd2 = $('.portfolio_section_h5 .filtr-container');

        if (filterizd2.length) {
            filterizd2.filterizr({

            });
            $('.single-port-list').on('click', function() {
                $('.single-port-list.active').removeClass('active');
                $(this).addClass('active');
            });
        }
        });

    };
    var Home6circle = function ($scope, $) {

        $scope.find('.faq_section_5').each(function () {

            var settings = $(this).data('xld');
    if ($('.project-done-box-circle')) {
        ;(function() {
            var proto = $.circleProgress.defaults,
                originalDrawEmptyArc = proto.drawEmptyArc;

            proto.emptyThickness = 5;

            proto.drawEmptyArc = function(v) {
                var oldGetThickness = this.getThickness,
                    oldThickness = this.getThickness(),
                    emptyThickness = this.emptyThickness || _oldThickness.call(this),
                    oldRadius = this.radius,
                    delta = (oldThickness - emptyThickness) / 2;

                this.getThickness = function() {
                    return emptyThickness;
                };

                this.radius = oldRadius - delta;
                this.ctx.save();
                this.ctx.translate(delta, delta);

                originalDrawEmptyArc.call(this, v);

                this.ctx.restore();
                this.getThickness = oldGetThickness;
                this.radius = oldRadius;
            };
        })();

        $('.project-done-box-circle').circleProgress({
            startAngle: -Math.PI / 4 * 1.9,
            value: 0.92,
            emptyThickness: 3,
            size: 140,
            thickness: 10,
            lineCap: 'round',
            emptyFill: '#f5f5f5',
            fill: {color: '#d83030'},
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(92 * progress) + '<span>%</span>');
        });
        var el = $('.project-done-box-circle'),
            inited = false;
        el.appear({ force_process: true });

        el.on('appear', function() {
            if (!inited) {
                el.circleProgress();
                inited = true;
            }
        });
    }
        });

    };
    var H5folio = function ($scope, $) {

        $scope.find('#nio-con-portfolio-slider').each(function () {

            var settings = $(this).data('xld');

                $('#nio-con-portfolio-slider').owlCarousel({
                    margin: 30,
                    responsiveClass:true,
                    nav: true,
                    dots: false,
                    loop:true,
                    autoplay: false,
                    navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
                    smartSpeed: 1000,
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
                            items:2,
                        },
                        1000:{
                            items:3,

                        },
                        1300:{
                            items: 3,

                        },
                        1600:{
                            items: 4,

                        },
                    },
                })

        });

    };
    

    var Header5 = function ($scope, $) {

        $scope.find('.header-style-five').each(function () {

            var settings = $(this).data('xld');

                $('.nio-con-open_mobile_menu').on("click", function() {
                    $('.nio-con-mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.nio-con-open_mobile_menu').on('click', function () {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if($('.nio-con-mobile_menu li.dropdown ul').length){
                    $('.nio-con-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
                    $('.nio-con-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
                $(".dropdown-btn").on("click", function () {
                    $(this).toggleClass("toggle-open");
                });

                jQuery(window).on('scroll', function() {
                    if (jQuery(window).scrollTop() > 100) {
                        jQuery('.header-style-five').addClass('nio-con-sticky-header-overlay')
                    } else {
                        jQuery('.header-style-five').removeClass('nio-con-sticky-header-overlay')
                    }
                })
                
        });

    };



    var Header = function ($scope, $) {

        $scope.find('#header-id').each(function () {

            var settings = $(this).data('xld');
            var slider_elem = $(this);

            $('.open_bar').on("click", function() {
                $('.wide_sidebar').toggleClass("wide_sidebar_open");
            });
            $('.open_bar').on('click', function () {
                $('body').toggleClass('sidebar_overlay_open');
            });
           
            if($('.mobile-menu-nav li.dropdown ul').length){
                $('.mobile-menu-nav li.dropdown').append('<div class="dropdown-btn">+</div>');
                $('.mobile-menu-nav li.dropdown .dropdown-btn').on('click', function() {
                    $(this).prev('ul').slideToggle(500);
                });
            };

            if (slider_elem.hasClass( "stickyon" )){

                var nav = $('.main-header');
                if ($(window).width() > 300) { 
                    $(window).on("scroll", function() {
                        if ($(this).scrollTop() > 200) {
                            nav.addClass("f-nav UpToDown");
                        } else {
                            nav.removeClass("f-nav UpToDown");
                        }
                    });
                };
            
            }

        });

    };

    var NBCounter = function ($scope, $) {

        $scope.find('.counter_content').each(function () {
            var settings = $(this).find('.client_counterup').data('options');
            var num = settings['size'];
            var prefix = settings['pre'];
            var dotpercent = '.'+num+'';
            //console.log(settings['thk']);
            var ourtarget = $(this).find('.circle');
            if(ourtarget.length){
                ;(function() {
                    var proto = $.circleProgress.defaults,
                    originalDrawEmptyArc = proto.drawEmptyArc;

                    proto.emptyThickness = 5; 
                    proto.drawEmptyArc = function(v) {
                        var oldGetThickness = this.getThickness, 
                        oldThickness = this.getThickness(),
                        emptyThickness = this.emptyThickness || _oldThickness.call(this),
                        oldRadius = this.radius,
                        delta = (oldThickness - emptyThickness) / 2;

                        this.getThickness = function() {
                            return emptyThickness;
                        };

                        this.radius = oldRadius - delta;
                        this.ctx.save();
                        this.ctx.translate(delta, delta);

                        originalDrawEmptyArc.call(this, v);

                        this.ctx.restore();
                        this.getThickness = oldGetThickness;
                        this.radius = oldRadius;
                    };
                })();

                ourtarget.circleProgress({
                    emptyThickness: settings['ethk'],
                    size: 210,
                    thickness: settings['thk'],
                    lineCap: 'round',
                    emptyFill:settings['sclr'],
                    fill: {
                        //gradient: ['#fff', ['#000', 0.7]],
                        color: settings['pclr'],
                        gradientAngle: Math.PI * -0.3
                    }  
                }); 

                ourtarget.circleProgress({
                    value: dotpercent
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(num * progress) + '<span class="prefix">' + prefix + '</span>');
                });

                var el = ourtarget,
                inited = false;
                el.appear({ force_process: true });

                el.on('appear', function() {
                    if (!inited) {
                        el.circleProgress();
                        inited = true;
                    }
                });
            };

        });

    };



    var NBTeam = function ($scope, $) {

        $scope.find('#team').each(function () {

            var settings = $(this).data('xld');
            $('#team_slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                autoplay: false,
                navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
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
                        items:2,
                    },
                    1000:{
                        items:3,

                    }
                },
            })

        });

    };

    var NBSrvSlid = function ($scope, $) {

        $scope.find('.niobis-service.has-slide').each(function () {

            var settings = $(this).data('xld');

            $('#service_slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                autoplay: false,
                navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
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
                        items:2,
                    },
                    1000:{
                        items:3,

                    }
                },
            })
                
        });

    };

    var NBTesti = function ($scope, $) {

        $scope.find('.niobis-testimonial').each(function () {

            var settings = $(this).data('xld');

            $('#testimonial_slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                autoplay: false,
                navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
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
            })

        });

    };

    var Niobisheader7 = function ($scope, $) {

        $scope.find('.nio-eig-header-style-eight').each(function () {

            var settings = $(this).data('xld');

            // JS

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
            if (jQuery('.nio-eig-header-style-eight').hasClass('sticky-open')) {
                jQuery(window).on('scroll', function () {
                    if (jQuery(window).scrollTop() > 250) {
                        jQuery('.nio-eig-header-style-eight').addClass('sticky-on')
                    } else {
                        jQuery('.nio-eig-header-style-eight').removeClass('sticky-on')
                    }
                })
            }
            //js end
        });

    };
  var Niobisslider7 = function ($scope, $) {

        $scope.find('.nio-eig-slider-section').each(function () {

            var settings = $(this).data('xld');

            // JS

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

            //js end
        });

    };
  var Niobisinit = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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

            $('[data-background]').each(function() {
                $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
            });

            //js end

    };
  var Niobis7team = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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
            //js end

    };
  var Niobis7portfolio = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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
            //js end

    };
  var Niobis7partner = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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
            //js end

    };
  var Niobis7testimonial = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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
            //js end

    };
  var Niobis7blog = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
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
            //js end

    };
  var Niobis8header = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
              $('.soft-m-open_mobile_menu-six').on("click", function() {
                  $('.soft-m-mobile_menu_wrap-six').toggleClass("mobile_menu_on-six");
              });
              $('.soft-m-open_mobile_menu-six').on('click', function () {
                  $('body').toggleClass('mobile_menu_overlay_on-six');
              });
              if($('.soft-m-mobile_menu-six li.dropdown ul').length){
                  $('.soft-m-mobile_menu-six li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
                  $('.soft-m-mobile_menu-six li.dropdown .dropdown-btn').on('click', function() {
                      $(this).prev('ul').slideToggle(500);
                  });
              }
              $(".dropdown-btn").on("click", function () {
                  $(this).toggleClass("toggle-open");
              });

              $('.toggle-overlay-six').on('click', function(e) {
                  e.preventDefault();
                  $('.search-body-six').toggleClass('search-open-six');
              });

              var nav = $('.six_header');
              if ($(window).width() > 300) {
                  $(window).on("scroll", function() {
                      if ($(this).scrollTop() > 200) {
                          nav.addClass("f-nav UpToDown");
                      } else {
                          nav.removeClass("f-nav UpToDown");
                      }
                  });
              }
            //js end

    };
  var Niobis8slider = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
              jQuery('.six_slide_wrapper').owlCarousel({
                  items: 1,
                  loop: true,
                  nav: false,
                  dots: true,
                  autoplay: false,
              });
              jQuery('.six_slide_wrapper').on('translate.owl.carousel', function () {
                  jQuery('.slider-six-small-title').removeClass('animated fadeInDown').css("opacity", "0");
                  jQuery('.slider-six-big-title').removeClass('animated fadeInUp').css("opacity", "0");
                  jQuery('.curve-border-six').removeClass('animated fadeInUp').css("opacity", "0");
                  jQuery('.slider-six-text p').removeClass('animated fadeInUp').css("opacity", "0");
                  jQuery('.slider-six-text ul').removeClass('animated fadeInDown').css("opacity", "0");
              });
              jQuery('.six_slide_wrapper').on('translated.owl.carousel', function () {
                  jQuery('.slider-six-small-title').addClass('animated fadeInDown').css("opacity", "1");
                  jQuery('.slider-six-big-title').addClass('animated fadeInUp').css("opacity", "1");
                  jQuery('.curve-border-six').addClass('animated fadeInUp').css("opacity", "1");
                  jQuery('.slider-six-text p').addClass('animated fadeInUp').css("opacity", "1");
                  jQuery('.slider-six-text ul').addClass('animated fadeInDown').css("opacity", "1");
              });
            //js end

    };
  var Niobis8news = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
              $('.news-six-slider-wrapper').owlCarousel({
                  margin: 30,
                  loop:true,
                  responsiveClass:true,
                  nav: false,
                  dots: true,
                  autoplay: true,
                  smartSpeed: 1000,
                  responsive:{
                      0:{items:1},
                      480:{items:2},
                      600:{items:2},
                      800:{items:2},
                      1024:{items:3}
                  }
              })
            //js end

    };
  var Niobis8service = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
              $('.service-six-slide').owlCarousel({
                  margin:30,
                  responsiveClass:true,
                  nav: true,
                  dots: false,
                  autoplay: false,
                  navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
                  smartSpeed: 1000,
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
                          items:2,
                      },
                      1000:{
                          items:3,

                      }
                  },
              })
            //js end

    };
  var Niobis8testimonial = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
                  $('.testimonial-wrapper').owlCarousel({
                      margin:30,
                      responsiveClass:true,
                      nav: true,
                      dots: false,
                      autoplay: false,
                      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
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
                  })
            //js end

    };
  var Niobis9nav = function ($scope, $) {

      $scope.find('.nio-mark-header-wrap').each(function () {

            var settings = $(this).data('xld');

            // JS
              $('.open_nio-mark-mobile_menu').on("click", function() {
                  $('.nio-mark-mobile_menu_wrap').toggleClass("nio-mark-mobile_menu_on");
              });
              $('.open_nio-mark-mobile_menu').on('click', function () {
                  $('body').toggleClass('nio-mark-mobile_menu_overlay_on');
              });
              if($('.nio-mark-mobile_menu-dropdown li.dropdown ul').length){
                  $('.nio-mark-mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                  $('.nio-mark-mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
                      $(this).prev('ul').slideToggle(500);
                  });
              }
              $(".nio-mark-header-wrap .dropdown-btn").on("click", function () {
                  $(this).toggleClass("toggle-open");
              });

              jQuery(window).on('scroll', function() {
                  if (jQuery(window).scrollTop() > 250) {
                      jQuery('.nio-mark-sticky').addClass('nio-mark-sticky-on')
                  } else {
                      jQuery('.nio-mark-sticky').removeClass('nio-mark-sticky-on')
                  }
              });
            //js end
    });
};
var Niobis9slider = function ($scope, $) {

      $scope.find('.nio-mark-slider-section').each(function () {

            var settings = $(this).data('xld');

            // JS
              jQuery('.nio-mark-slider-wrapper').owlCarousel({
                  items: 1,
                  loop: true,
                  nav: true,
                  dots: false,
                  autoplay: true,
                  navSpeed: 800,
                  smartSpeed: 1000,
                  animateOut: 'fadeOut',
                  animateIn: 'fadeIn',
                  navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
              });
            //js end
    });
};

var Niobis9project = function ($scope, $) {

      $scope.find('.nio-mark-project-content').each(function () {

            var settings = $(this).data('xld');

            // JS
              $('.nio-mark-project-slider').owlCarousel({
                  margin: 0,
                  items: 1,
                  loop: true,
                  nav: true,
                  dots: false,
                  autoplay: true,
                  animateOut: 'zoomOut',
                  animateIn: 'zoomIn',
                  transitionStyle : "goDown",
                  navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
              })
            //js end
    });
};

var Niobis9test = function ($scope, $) {

      $scope.find('.nio-mark-testimonial-content').each(function () {

            var settings = $(this).data('xld');

            // JS
          $('.nio-mark-testimonial-slider').owlCarousel({
              margin: 0,
              items: 1,
              loop: true,
              nav: false,
              dots: false,
              autoplay: true,
          })
            //js end
    });
};

var Niobis9tabs = function ($scope, $) {

      $scope.find('.nio-mark-service-section').each(function () {

            var settings = $(this).data('xld');

            // JS
          if ($(".progress-bar").length) {
              var $progress_bar = $('.progress-bar');
              $progress_bar.appear();
              $(document.body).on('appear', '.progress-bar', function() {
                  var current_item = $(this);
                  if (!current_item.hasClass('appeared')) {
                      var percent = current_item.data('percent');
                      current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
                  }

              });
          };
            //js end
    });
};
var Niobis9scroll = function ($scope, $) {

            var settings = $(this).data('xld');

            // JS
            $(window).on("scroll", function() {
                if ($(this).scrollTop() > 200) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });
            //js end

};

var nio11progress = function ($scope, $) {
    $scope.find('.nio-dia-skill-progress-bar').each(function () {
        var settings = $(this).data('xld');

        // JS
        if ($(".progress-bar").length) {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function () {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
                }

            });
        }
        //js end
    });

};

var NioDiaTestimonial11 = function ($scope, $) {
    $scope.find('.nio-dia-testimonial-content').each(function () {
        var settings = $(this).data('xld');

        // JS
        $('.nio-dia-testimonials-slide').owlCarousel({
            margin:30,
            responsiveClass:true,
            nav: false,
            dots: true,
            loop:true,
            autoplay: false,
            smartSpeed: 300,
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
                    items:2,
                },
                1000:{
                    items:2,

                },
                1300:{
                    items:2,
                }

            },
        })
        //js end
    });

};
    var CircleCounter = function ($scope, $){
        $scope.find('.counter-boxed').each(function () {
            var settings = $(this).data('xld');

        if($('.count-box').length){
            $('.count-box').appear_c(function (){
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }
            },{accY: 0});
        };
        if($('.dial').length){
            $('.dial').appear_c(function (){
                var elm = $(this);
                var color = elm.attr('data-fgColor');
                var perc = elm.attr('value');
                var thickness = elm.attr('thickness');
                elm.knob({
                    'value': 0,
                    'min':0,
                    'max':100,
                    'skin':'tron',
                    'readOnly':true,
                    'thickness':thickness,
                    'dynamicDraw': true,
                    'displayInput':false
                });
                $({value: 0}).animate({ value: perc }, {
                    duration: 3500,
                    easing: 'swing',
                    progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            },{accY: 0});
        }

        });
    };

    var NioDiaTestimonial12 = function ($scope, $) {
        $scope.find('.nio-ins-testimonial-slide-wrapper').each(function () {
            var settings = $(this).data('xld');

            // JS
            $('.nio-ins-testimonial-slide').owlCarousel({
                items: 1,
                nav: false,
                dots: true,
                loop:true,
                autoplay: false,
                smartSpeed: 300,
            })
            //js end
        });

    };





                    
    $(window).on('elementor/frontend/init', function () {

        if (elementorFrontend.isEditMode()) {

            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom12testimonial.default', NioDiaTestimonial12);
            elementorFrontend.hooks.addAction('frontend/element_ready/circle-counter.default', CircleCounter);
            elementorFrontend.hooks.addAction('frontend/element_ready/home11_progressbar.default', nio11progress);
            elementorFrontend.hooks.addAction('frontend/element_ready/home11_testimonial.default', NioDiaTestimonial11);

            elementorFrontend.hooks.addAction('frontend/element_ready/nb-chart.default', NioChart);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-projslider.default',NBProject);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-clientslide.default',NBClient);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-teamblock.default',NBTeam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbh1tm.default',NBTeam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-testi.default',NBTesti);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-counter.default',NBCounter);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-servbx.default',NBSrvSlid);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-srvslydr.default',NBSrvSlid2);
            elementorFrontend.hooks.addAction('frontend/element_ready/ae-header.default',Header);
            elementorFrontend.hooks.addAction('frontend/element_ready/case-filter.default',FilterFolio);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-slideshow.default',MainSlide);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr5.default',Header5);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbsldr5.default',Slidr5);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5folio.default',H5folio);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5tm.default',H5tam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5tstm.default',H5Testi);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbsldr6.default',Slidr6);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr6.default',Header6); 
            elementorFrontend.hooks.addAction('frontend/element_ready/hmesld6.default',Home6Slid); 
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom6port.default',Home6port);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom6faq.default',Home6circle);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr7.default',Niobisheader7);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7slider.default',Niobisslider7);
            elementorFrontend.hooks.addAction('frontend/element_ready/global',Niobisinit);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7team.default',Niobis7team);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7portfolio.default',Niobis7portfolio);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7partner.default',Niobis7partner);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7testimonial.default',Niobis7testimonial);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom7blog.default',Niobis7blog);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr8.default',Niobis8header);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8slider.default',Niobis8slider);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8blog.default',Niobis8news);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8service.default',Niobis8service);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8testimonial.default',Niobis8testimonial);
            elementorFrontend.hooks.addAction('frontend/element_ready/nav-builder.default',Niobis9nav);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9slider.default',Niobis9slider);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9portfolio.default',Niobis9project);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9testimonial.default',Niobis9test);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9services.default',Niobis9tabs);
            elementorFrontend.hooks.addAction('frontend/element_ready/niobis-scroll-top.default',Niobis9scroll);
        }
        else {

            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom12testimonial.default', NioDiaTestimonial12);

            elementorFrontend.hooks.addAction('frontend/element_ready/circle-counter.default', CircleCounter);

            elementorFrontend.hooks.addAction('frontend/element_ready/home11_progressbar.default', nio11progress);
            elementorFrontend.hooks.addAction('frontend/element_ready/home11_testimonial.default', NioDiaTestimonial11);

            elementorFrontend.hooks.addAction('frontend/element_ready/nb-chart.default', NioChart);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-projslider.default',NBProject);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-clientslide.default',NBClient);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-teamblock.default',NBTeam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbh1tm.default',NBTeam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-testi.default',NBTesti);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-counter.default',NBCounter);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-servbx.default',NBSrvSlid);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-srvslydr.default',NBSrvSlid2);
            elementorFrontend.hooks.addAction('frontend/element_ready/ae-header.default',Header);
            elementorFrontend.hooks.addAction('frontend/element_ready/case-filter.default',FilterFolio);
            elementorFrontend.hooks.addAction('frontend/element_ready/nb-slideshow.default',MainSlide);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr5.default',Header5);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbsldr5.default',Slidr5);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5folio.default',H5folio);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5tm.default',H5tam);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom5tstm.default',H5Testi);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbsldr6.default',Slidr6);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr6.default',Header6);
            elementorFrontend.hooks.addAction('frontend/element_ready/hmesld6.default',Home6Slid);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom6faq.default',Home6circle);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhdr8.default',Niobis8header);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8slider.default',Niobis8slider);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8blog.default',Niobis8news);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8service.default',Niobis8service);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom8testimonial.default',Niobis8testimonial);
            elementorFrontend.hooks.addAction('frontend/element_ready/nav-builder.default',Niobis9nav);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9slider.default',Niobis9slider);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9portfolio.default',Niobis9project);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9testimonial.default',Niobis9test);
            elementorFrontend.hooks.addAction('frontend/element_ready/nbhom9services.default',Niobis9tabs);
            elementorFrontend.hooks.addAction('frontend/element_ready/niobis-scroll-top.default',Niobis9scroll);
        }
    });

  

    if (typeof ScrollReveal !== 'undefined' && $.isFunction(ScrollReveal)) {

      window.sr = ScrollReveal();
      sr.reveal('.reveal-top, .reveal-bottom, .reveal-left, .reveal-right', {
        delay: 700,
        easing: 'ease',
        duration: 800,
        scale: 0,
      }); 

      sr.reveal('.reveal-top', {
        origin: 'top',
      },250);
      sr.reveal('.reveal-bottom', {
        origin: 'bottom',
      },250);  
      sr.reveal('.reveal-left', {
        origin: 'left',
      },250);
      sr.reveal('.reveal-right', {
        origin: 'right',
      },250);

    }

    $('.xld-parallaxtrue').jarallax({
        speed: 0.3,
    });     
    $('#preloader').fadeOut('slow',function(){$(this).remove();});

    $('.video_box').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });
    jQuery(window).on('load', function(){

    var filterizd2 = $('.portfolio_section_h5 .filtr-container');

    if (filterizd2.length) {
        filterizd2.filterizr({

        });
        $('.single-port-list').on('click', function() {
            $('.single-port-list.active').removeClass('active');
            $(this).addClass('active');
        });
    }
    });

    $(window).on('resize', function() {
        if($(window).width() < 991) {
            $('.htmegamenu-content-wrapper').addClass('dropdown-menu');
        }
    });
    if($('.tmx-mega-menu').length){
        $('li.tmx-mega-menu').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
        $('li.tmx-mega-menu .dropdown-btn').on('click', function() {
            $(this).prev('.htmegamenu-content-wrapper').slideToggle(500);
        });
    }
    var NiobisCustomAnimation = {

        NioDataAnimation: function () {
            var x1 = $('.data-animation-1 .elementor-image');
            var x2 = $('.data-animation-2 .elementor-image');
            var x3 = $('.data-animation-3 .elementor-image');
            var x4 = $('.data-animation-4 .elementor-image');

            x1.attr('data-parallax', '{"y" : 50}');
            x2.attr('data-parallax', '{"x" : -50}');
            x3.attr('data-parallax', '{"x" : 50}');
            x4.attr('data-parallax', '{"-x" : 50}');
        },

        ImageAnimation: function () {
            $(".nio_animation_1 .elementor-image").css("animation", "nio_animation_1 12s infinite linear alternate");
            $(".nio_animation_2 .elementor-image").css("animation", "nio_animation_2 12s infinite linear alternate");
            $(".nio_animation_3 .elementor-image").css("animation", "nio_animation_3 12s infinite linear alternate");
            $(".nio_animation_4 .elementor-image").css("animation", "nio_animation_4 12s infinite linear alternate");
            $(".nio_animation_5 .elementor-image").css("animation", "nio_animation_5 12s infinite linear alternate");
        },
        ImageHoverAnimation: function () {
            $('.flip-animation').hover(
                function(){ $(this).addClass('flip-animations') },
                function(){ $(this).removeClass('flip-animations') }
            )
        }

    };
    jQuery(document).ready(function (){
        NiobisCustomAnimation.NioDataAnimation();
        NiobisCustomAnimation.ImageAnimation();
        NiobisCustomAnimation.ImageHoverAnimation();
    });

})(jQuery);

