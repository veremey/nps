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
});

