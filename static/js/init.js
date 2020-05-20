"use strict";

/*****Ready function start*****/
$(document).ready(function () {
	/*eric function init start*/
	// eric();
	/*eric function init end*/

	/*Preload anim start*/
	$('#la_anim').addClass('la-animate');
	/*Preload anim end*/
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).on('load', function () {
	/*Page load animaion start*/
	// setTimeout(function () {
	// 	$("#main_content").addClass("content-block-animation");
	// }, 1000);
	setTimeout(function () {
		$("#vertical_nav_wrap").addClass("vertical-nav-animation");
	}, 2000);
	setTimeout(function () {
		$("header").addClass("header-animation");
	}, 1900);
	// console.log('preload', $("#pre_load"));
	// $("#pre_load").delay(500).fadeOut("slow");

	$("body").css('overflow-y', 'visible');
	/*Page load animaion end*/

	/*masonryPortfolio function init start*/
	// masonryPortfolio();
	/*masonryPortfolio function init end*/
});
/*****Load function* end*****/

/*****Scroll function start*****/
$(window).on('scroll', function () {
	var navTop = $('header');

	/*Header animaion onscroll*/
	var scroll = $(window).scrollTop();
	if (scroll >= 150) {
		$(navTop).addClass("fixed");
	} else {
		$(navTop).removeClass("fixed");
	}
	/*Header animaion onscroll*/

});
/*****Scroll function start*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
};
/***** Full height function end *****/
