/*=========


Template Name: Portfolio -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // data-bg
    $("[data-bg-color").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });
    ////////////////////////////////////////////////////
    //  Sidebar Js
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });


    // WOW active
    new WOW().init();

    /* magnificPopup video view */
    $('.play-now').magnificPopup({
        type: 'iframe',
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
      
              id: 'v=',
              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            }
      
          },
          srcAction: 'iframe_src',
        }
      });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
				nav: true,
        navText: [
            '<i class="fa fa-arrow-left-long"></i>',
            '<i class="fa fa-arrow-right-long"></i>',
        ],
    });
     // collaborator-slider
    var $collaboratorSlider = $(".collaborator-slider");
    $collaboratorSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayTimeout: 2000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1399: {
                items: 5,
            },
        }
    });
    /*-----------------------------
        Testimonial Slider
    -------------------------------*/
    $('.testimonial__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // autoplay:true,
        asNavFor: '.testimonial__client',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
      });
      $('.testimonial__client').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonial__carousel',
        arrows: false,
        variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
              }
            }
          ]
        
      });

});