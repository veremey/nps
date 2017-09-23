$(document).ready(function() {


	// for current elipsis render
	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
		document.querySelector('html').classList.add('webkit-line-clamp');
	}

	// -------------------------------------------------
	// ----fancyBox ----------------
	if($('[data-fancybox]').length) {
		$('[data-fancybox]').fancybox({
			buttons: {
				position : 'center'
			}
		});
	}

	/*------- header ----*/
	$('.guide__item').on('click', function () {

		$(this).addClass('is-active').siblings('.guide__item').removeClass('is-active');
	});

	$('.baum__item').hover(function () {
		$(this).parent('.baum').addClass('clear-margin');
	}, function () {
		$(this).parent('.baum').removeClass('clear-margin')
	});

	$('.btn-menu').on('click', function () {
		$(this).toggleClass('is-active');
		$('.guide').toggleClass('is-active');
	});

	$('.btn-seach').on('click', function () {
		$('.header__search, .search').addClass('is-active');
	});

	$(document).on('click', function(el){
		var childr = $('.search').find('*');

		if($(el.target).is(childr) == false ){
			$('.header__search, .search').removeClass('is-active');
			$('.search__input').val('');
		}
	});


	/* --- close something ---*/
	$('.js-close').on('click', function() {
		var closeItem = $(this).data('close');

		$('.' + closeItem).removeClass('is-active').hide();
		$('.js-toggler').removeClass('is-active');

		$('body').removeClass('not-move');
		$('.popup, .popup__window, .popup__overlay').removeClass('is-active').hide();

		return false;
	});

	// open popup
	//--------------------------------------------
	$('.js-ppp').on('click', function() {

		// $('body').addClass('not-move');
		$('.header').find('is_open').removeClass('is_open');
		$('.popup__window').removeClass('is-active').hide();

		var open = $(this).data('ppp');
		$('.popup__overlay, .popup').addClass('is-active').show();
		$('.' + open).addClass('is-active').show();

		return false;
	});



});

