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

	const stickyBlock = document.querySelector(".sCompare__float-cards-wrap");
	const tableContainer = document.querySelector(".sCompare__table-container");
	if (tableContainer) {
		let tableOffset = stickyBlock.offsetHeight;
		tableContainer.style.marginTop = -tableOffset + 'px';
		let floatCards = new hcSticky(stickyBlock, {
			stickTo: '#sCompare',
			responsive: {
				768: {
					disable: true
				}
			},
			onResize:  function() {
				console.log(this)
				this.refresh;
			}
		});	
		// floatCards.refresh()	
	}


// ymaps.modules.define('Panel', [
// 	'util.augment',
// 	'collection.Item'
// ], function (provide, augment, item) {
// 	var Panel = function (options) {
// 			Panel.superclass.constructor.call(this, options);
// 	};

// 	augment(Panel, item, {
// 			onAddToMap: function (map) {
// 					Panel.superclass.onAddToMap.call(this, map);
// 					this.getParent().getChildElement(this).then(this._onGetChildElement, this);
// 					map.margin.addArea({
// 							top: 0,
// 							left: 0,
// 							width: '250px',
// 							height: '100%'
// 					})
// 			},

// 			onRemoveFromMap: function (oldMap) {
// 					if (this._$control) {
// 							this._$control.remove();
// 					}
// 					Panel.superclass.onRemoveFromMap.call(this, oldMap);
// 			},

// 			_onGetChildElement: function (parentDomContainer) {
// 					// Создаем HTML-элемент с текстом.
// 					// По-умолчанию HTML-элемент скрыт.
// 					this._$control = $('<div class="customControl"><div class="content"></div><div class="closeButton"></div></div>').appendTo(parentDomContainer);
// 					this._$content = $('.content');
// 					// При клике по крестику будем скрывать панель.
// 					$('.closeButton').on('click', this._onClose);
// 			},
// 			_onClose: function () {
// 					$('.customControl').css('display', 'none');
// 			},
// 			// Метод задания контента панели.
// 			setContent: function (text) {
// 					// При задании контента будем показывать панель.
// 					this._$control.css('display', 'flex');
// 					this._$content.html(text);
// 			}
// 	});

// 	provide(Panel);
// });

	const compareWrap = document.querySelector('.sCompare__slider-wrap');
	if (compareWrap) {
		let compareSwiper = new Swiper(compareWrap.querySelector('.compare-slider'), {
			slidesPerView: 2,
			spaceBetween: 10,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
				},
			},
			navigation: {
				nextEl: compareWrap.querySelector(".swiper-button-next"),
				prevEl: compareWrap.querySelector(".swiper-button-prev"),
			},
			watchSlidesProgress: true
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

	const thumbsSwiper = document.querySelector(".sCard__thumbs-slider");
	const thumbsSlider = new Swiper(".sCard__thumbs-slider", {
		spaceBetween: 15,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
		on: {
			reachEnd: function () {
				thumbsSwiper.classList.add('riched');
			},
			slideChange: function() {
				thumbsSwiper.classList.remove('riched');
			}
		}
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
 

	// Catalog filter opening

	const filter = document.querySelector(".filter")
	if (filter) {
		const openFilterBtn = document.querySelector(".sCatalog__filter-btn--js")
		const closeFilterBtn = document.querySelector(".filter-close")
		const body = document.querySelector(".main-page")
		
		openFilterBtn.addEventListener('click', function(event) {
			filter.classList.add('active');
			body.classList.add('fixed2');
		});
		closeFilterBtn.addEventListener('click', function(event) {
			filter.classList.remove('active');
			body.classList.remove('fixed2');
		});
		document.addEventListener('click', function(event){
			const target = event.target;
			if (!target.closest('.filter') && !target.closest('.sCatalog__filter-btn--js')) {
				filter.classList.remove('active');
				body.classList.remove('fixed2');
			}
		})
		window.addEventListener('resize', () => {
			if (window.matchMedia('(min-width: 992px)').matches) {
				$('.filter').removeClass('active');
				$('body').removeClass('fixed2');
			};
		}, { passive: true });
	}

	

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