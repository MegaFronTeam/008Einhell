"use strict";
function eventHandler() {
	
	ymaps.ready(init);
	var myMap;
	function init () {
		let coords = [],
		sDistributorItems = document.querySelectorAll('.sDistributor__item');
		
		sDistributorItems.forEach((item) => coords.push(JSON.parse(item.dataset.coords)));


		myMap = new ymaps.Map('map', {
			center: coords[0],
			zoom: 10,
			controls: []
		});
		for (let i = 0; i < sDistributorItems.length; i++) {
			let myPlacemark = new ymaps.Placemark(coords[i], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/pin-map.png',
				iconImageSize: [37, 46],
				iconImageOffset: [-24, -38]
			});
			myMap.geoObjects.add(myPlacemark);
		}

		for (let i = 0; i < sDistributorItems.length; i++) {
			sDistributorItems[i].addEventListener('click', () => {
				sDistributorItems.forEach((item) => item.classList.remove('active'));
				sDistributorItems[i].classList.add('active');

				myMap.setCenter(coords[i]);
				myPlacemark.geometry.setCoordinates(coords[i]);
			});
		}
	};
};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}