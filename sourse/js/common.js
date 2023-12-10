"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	// Header Block Sliders
	const headerBlockNavWrap = document.querySelector('.headerBlock__caption-container');
	const headerCaptionSlider = new Swiper(".headerBlock__caption-slider--js", {
		slidesPerView: 1,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
		freeMode: true,
		watchSlidesProgress: true,
	});
	const headerImgSlider = new Swiper(".headerBlock__img-slider--js", {
		spaceBetween: 10,
		navigation: {
			nextEl: headerBlockNavWrap.querySelector(".swiper-button-next"),
			prevEl: headerBlockNavWrap.querySelector(".swiper-button-prev"),
		},
		thumbs: {
			swiper: headerCaptionSlider,
		},
		loop: true,
		autoplay: {
			delay: 5000,
		},
	});


	new Swiper('.breadcrumb-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

	const swiper4 = new Swiper('.sBanners__slider--js', { // если не используешь методы swiper  - можно обращаться без нее к Swiper
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }