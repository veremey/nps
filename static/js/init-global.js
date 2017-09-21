$(function () {

	Global_main.fourSlider({
		slider: '.slide-four',
		item: '.baum__item'
	});
	Global_main.fourDotsSlider({
		slider: '.slide-four-dots',
		item: '.baum__item'
	});

	Global_main.sliderSimple({
		slider: '.jumb',
		item: '.jumb__item'
	});

	Global_main.sliderSinc({
		sliderFor: '.preview__top',
		itemFor: '.preview__big',
		sliderNav: '.preview__bottom',
		itemNav: '.preview__small'
	});

	Global_main.sliderSincTop({
		sliderFor: '.preview__wide',
		itemFor: '.preview__big',
		sliderNav: '.preview__little',
		itemNav: '.preview__small'
	});

	Global_main.slideThree({
		slide: '.slide-three',
		slideItem: '.prod',
	});

	Global_main.toggleInfo({
		el: '.vacancy__title',
		parent: '.vacancy',
		toggleEl: '.vacancy__hidden'
	});

});
