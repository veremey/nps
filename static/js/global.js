var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;

	/* ----- fourSlider -----------*/
	/*----------------------------------------------------------------------*/
	this.fourSlider = function (opt) {

		var $slider = $(opt.slider);
		var $item = $(opt.item);

		$slider.each(function () {
			var $slider = $(this);
			var $item = $(this).find(opt.item);

			// if($item.length > 4) {
				$(this).slick({
				infinite: true,
				variableWidth: false,
				slidesToShow: 4,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							variableWidth: false,
							slidesToShow: 3,
							arrows: false
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 1,
						}
					}
				]
				});
			// }
		})

	}

	/* ----- fourDotsSlider -----------*/
	/*----------------------------------------------------------------------*/
	this.fourDotsSlider = function (opt) {

		var $slider = $(opt.slider);
		var $item = $(opt.item);

		$slider.each(function () {
			var $slider = $(this);
			var $item = $(this).find(opt.item);

			// if($item.length > 4) {
				$(this).slick({
				infinite: true,
				variableWidth: false,
				slidesToShow: 4,
				dots: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							arrows: false
						}
					},
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							arrows: false
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 1,
							arrows: false
						}
					}
				]
				});
			// }
		})

	}
	/* ----- slider simple -----------*/
	/*----------------------------------------------------------------------*/
	this.sliderSimple = function (opt) {

		var $slider = $(opt.slider);
		var $itemr = $(opt.item);

		$slider.slick({
			infinite: true,
			variableWidth: false,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true
		});
	}

		/* ----- slider sinc -----------*/
	/*----------------------------------------------------------------------*/
	this.sliderSinc = function (opt) {

		var $sliderFor = $(opt.sliderFor);
		var $itemFor = $(opt.itemFor);
		var $sliderNav = $(opt.sliderNav);
		var $itemNav = $(opt.itemNav);

			$sliderFor.slick({
			infinite: true,
			variableWidth: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: opt.sliderNav,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
						arrows: true
					}
				}
			]
		});
		$sliderNav.slick({
			infinite: true,
			variableWidth: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: opt.sliderFor,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						variableWidth: false,
						slidesToShow: 3,
						arrows: false
					}
				},
				{
					breakpoint: 1000,
					settings: {
						variableWidth: true,
						slidesToShow: 2,
						arrows: false
					}
				},
				{
					breakpoint: 650,
					settings: {
						variableWidth: true,
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
	}

	/* ----- slider sinc top-----------*/
	/*----------------------------------------------------------------------*/
	this.sliderSincTop = function (opt) {

		var $sliderFor = $(opt.sliderFor);
		var $itemFor = $(opt.itemFor);
		var $sliderNav = $(opt.sliderNav);
		var $itemNav = $(opt.itemNav);

			$sliderFor.slick({
			infinite: true,
			variableWidth: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			asNavFor: opt.sliderNav
		});
		$sliderNav.slick({
			infinite: true,
			variableWidth: false,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: opt.sliderFor,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						variableWidth: false,
						slidesToShow: 3,
						arrows: false
					}
				},
				{
					breakpoint: 1000,
					settings: {
						variableWidth: true,
						slidesToShow: 2,
						arrows: false
					}
				},
				{
					breakpoint: 650,
					settings: {
						variableWidth: true,
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
	}

	/*----------- slide-three --------------*/
	/* ---------------------------------------------*/
	this.slideThree = function (opt) {
		var $slide = $(opt.slide);
		var $slideItem = $(opt.slideItem);

		$slide.slick({
			infinite: true,
			variableWidth: false,
			arrows: true,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						arrows: false
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	/* ----- toggle information ------- */
	/* ----------------------------------------------------------------*/
	this.toggleInfo = function (opt) {
		var $el = $(opt.el);
		var $parent = $(opt.parent);
		var $toggleEl = $(opt.toggleEl);

		$el.on('click', function () {
			if($(this).hasClass('is-open')){
				$(this).removeClass('is-open').parent(opt.parent).removeClass('is-open');
				$(this).parent(opt.parent).find(opt.toggleEl).removeClass('is-open');
			} else {
			$(this).addClass('is-open').parent(opt.parent).addClass('is-open');
			$(this).parent(opt.parent).find(opt.toggleEl).addClass('is-open');
			}
		})
	}


}