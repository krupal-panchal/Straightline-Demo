/* Script on Ready
---------------------------------*/	
jQuery(document).ready(function($){

    /* sticky footer function */
    StickyFooter()

    /* mobile navigation */ 
    /*$('.menu-trigger').click(function(){
        $(this).stop().toggleClass('open')
        $('body, html').stop().toggleClass('scroll-hidden');
        $('.mob-navbar').stop().toggleClass('open');
    }); */   

    if($('#mobile-menu ul ul').length > 0){   
        $('#mobile-menu ul ul ').before('<em class="submenu-caret"></em>')
    }

    $('.submenu-caret').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('toggled');
        $(this).parent().siblings().find('ul').slideUp()
        $(this).parent().siblings().find('em').removeClass('toggled')
    });
    
     /* Src to Background */
    $('.home-banner .banner-img').each(function () {
        $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')');
        $(this).find('img').css('opacity', '0')
    });
    
    /* Home Banner */
	$('.home-banner').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		cssEase: 'linear'
	});
	
	$('.home_testi_slider').slick({
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 500,
		arrows: true,
		cssEase: 'linear'
	});
	
	
	$('.logo_slider').slick({
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 9,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}

		]
	});
	
	//	Hone Gallery Slider
	
	$('.gallery_slider').slick({
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}

		]
	});
});

/* Script on scroll
---------------------------------*/
jQuery(window).scroll(function($) {

    /* Sticky Header Function */
    headerHeight();      
    
});

/* Script on resize
---------------------------------*/
jQuery(window).resize(function($) {

    /* sticky footer function */
    StickyFooter();
    
    /* Sticky Header Function */
    headerHeight();
});

/* Script on load
----------------------------------*/
jQuery(window).load(function($) {

    /* sticky footer function */
    StickyFooter();
    
    
});

/* Script all functions
----------------------------------*/

/* Sticky Footer Function */
function StickyFooter(){
    var Stickyfooter = jQuery('footer').outerHeight()
    jQuery('#wrapper').css('margin-bottom',-Stickyfooter)
    jQuery('#wrapper').css('padding-bottom',Stickyfooter)
}

/* Sticky Header Function */
function headerHeight(){
    var headerHeight = jQuery('#header').outerHeight();
    if (jQuery(window).scrollTop() > headerHeight) { 
        jQuery('#wrapper').css('padding-top',headerHeight);
        jQuery('#header').addClass("fixed");

    }
    else{
        jQuery('#wrapper').css('padding-top',0);
        jQuery('#header').removeClass("fixed");        
    }
}
    