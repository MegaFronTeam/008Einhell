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
	if (headerBlockNavWrap) {
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
	}

	const productSliders = document.querySelectorAll('.sProductSlider__item');
	if (productSliders) {
		productSliders.forEach((wrap) => {
			let slider = wrap.querySelector('.swiper');
			const prodSwiper = new Swiper(slider, {
				slidesPerView: 1,
				breakpoints: {
					576: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				},
				spaceBetween: 21,
				navigation: {
					nextEl: wrap.querySelector(".swiper-button-next"),
					prevEl: wrap.querySelector(".swiper-button-prev"),
				},
				pagination: {
					el:  wrap.querySelector('.swiper-pagination'),
					type: 'bullets',
					clickable: true,
				},
			});
		});
	}
	
	const bgSlider = document.querySelector('.bg-slider__swiper--js');
	if (bgSlider) {
		new Swiper(bgSlider,{
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: bgSlider.querySelector(".swiper-button-next"),
				prevEl: bgSlider.querySelector(".swiper-button-prev"),
			},
			pagination: {
				el:  bgSlider.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
			},
		});
	}


	const thumbsSlider = new Swiper(".sCard__thumbs-slider", {
		spaceBetween: 15,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
	});
	var mainSlider = new Swiper(".sCard__main-slider", {
		spaceBetween: 10,
		thumbs: {
			swiper: thumbsSlider,
		},
	});

	new Swiper('.freemode-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

	$('.sCatalog__filter-btn--js').on('click', function() {
		$('.filter').addClass('active');
		$('body').addClass('fixed2');
	});
	$('.filter-close').on('click', function() {
		$('.filter').removeClass('active');
		$('body').removeClass('fixed2');
	});
	window.addEventListener('resize', () => {
		if (window.matchMedia('(min-width: 992px)').matches) {
			$('.filter').removeClass('active');
			$('body').removeClass('fixed2');
		};
	}, { passive: true });



	// new Swiper('.breadcrumb-slider--js', {
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	watchOverflow: true
	// });

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