"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// добавляет подложку для pixel perfect
$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Page_Contacts_1920.png);"></div>'); // /добавляет подложку для pixel perfect

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".top-nav"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".top-nav.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '--js').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
	// /inputMask
	showMenuCatalog: function showMenuCatalog() {
		var toggle = document.querySelector(".menu-catalog__toggle");
		var dropdown = document.querySelector(".menu-catalog-dropdown");
		var gumburger = document.querySelector(".menu-catalog .toggle-menu-mobile");
		toggle.addEventListener('click', function () {
			dropdown.classList.toggle("show");
			gumburger.classList.toggle("on");
		}); // toggle.addEventListener('mouseleave', ()=>{
		// 	dropdown.classList.remove("show");
		// 	gumburger.classList.remove("on");
		// }) 
	},
	showSearch: function showSearch() {
		var toggle = document.querySelector(".toggle-search--js");
		var dropdown = $(".top-line .form-search");
		toggle.addEventListener("click", function () {
			dropdown.toggle();
			dropdown.find("input").focus();
		});
	},
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			$d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').text(data.from);

					_this.find('.plus').text(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').text(data.from);

					_this.find('.plus').text(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').text(data.from);

					_this.find('.plus').text(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').text(data.from);

					_this.find('.plus').text(data.to);
				}
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	}
};

function eventHandler() {
	var _this2 = this;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.customRange();
	JSCCommon.inputMask();
	JSCCommon.showMenuCatalog();
	JSCCommon.showSearch(); // JSCCommon.CustomInputFile();

	var submenuToggle = document.querySelectorAll(".menu-catalog-dropdown__toggle-sub");
	submenuToggle.forEach(function (element) {
		var next = element.nextElementSibling;
		element.addEventListener('click', function () {
			element.classList.toggle('show');
			next.classList.toggle("show");
		});
	}); // accordion

	$(".showhide").click(function () {
		$(this).toggleClass("active").next().slideToggle().parents().toggleClass("active");
	});
	$(".s-filter__btn--js").click(function () {
		$(".s-filter-wrap").toggle();
	}); // const url = document.location.href;
	// $.each($(".top-nav__nav a "), () => {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 1200px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$("  .scroll-link").click(function () {
		var elementClick = $(_this2).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var icon = "<svg id=\"SVGDoc\" width=\"8\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:avocode=\"https://avocode.com/\" viewBox=\"0 0 8 14\"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Vector</title><path d=\"M7.81896,6.1107v0l-5.74214,-5.74219c-0.16238,-0.16238 -0.35444,-0.2435 -0.57675,-0.2435c-0.22231,0 -0.4145,0.08112 -0.57688,0.2435c-0.16238,0.16238 -0.2435,0.35457 -0.2435,0.57675v11.48435c0,0.2221 0.08112,0.4144 0.2435,0.5767c0.16256,0.1624 0.35475,0.2437 0.57688,0.2437c0.22218,0 0.41437,-0.0813 0.57675,-0.2437l5.74214,-5.74217c0.16224,-0.1622 0.24368,-0.35452 0.24368,-0.57674c0,-0.22213 -0.08139,-0.41432 -0.24368,-0.5767z\" fill=\"#ffffff\" fill-opacity=\"1\"></path></g></g></svg>";
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive'
	};
	$('.header-block__slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		dots: true
	}));
	$('.s-markets__slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 2.5,
		infinite: false,
		dots: false,
		arrows: false,
		mobileFirst: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4.5
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3.5
			} // },
			// 	{
			// 	breakpoint: 768,
			// 	settings: {
			// 		slidesToShow: 3,
			// 	}
			// }, {
			// 	breakpoint: 576,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		arrows: true,
			// 	}

		}]
	}));
	$('.s-markets__more-head').click(function () {
		$(this).next('.s-markets__more-body').slideToggle(800);
		$(this).toggleClass('active');
	});
	$('.page-menu-toggle').click(function () {
		$(this).next('div').slideToggle(800);
	});
	$('.form-wrap__change').click(function () {
		$(this).siblings('input, textarea').toggleClass('disabled');

		if (!$(this).siblings('input, textarea').hasClass('disabled')) {
			$(this).siblings('input, textarea').focus();
		}
	});
	$('.acc-settings__change').click(function () {
		$(this).siblings('input, textarea').toggleClass('off');
		$(this).siblings('div').toggleClass('d-none');
		$(this).siblings('input, textarea').focus();
	});
	$('.s-catalog__slider-3--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		appendArrows: $(".s-catalog--stock").find(" .arrow-wrap"),
		responsive: [{
			breakpoint: 1622,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows: true
			}
		}]
	}));
	$('.s-catalog__slider-6--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		appendArrows: $(".s-catalog--new").find(" .arrow-wrap"),
		responsive: [{
			breakpoint: 1622,
			settings: {
				slidesToShow: 6
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows: true
			}
		}]
	})); //  слайдер в  карточке товара

	$(' .s-prod-head__slider--lg-js').slick(_objectSpread({}, defaultSlide, {
		dots: true,
		infinite: false,
		asNavFor: $(' .s-prod-head__slider--sm-js'),
		arrows: false
	}));
	$('.s-prod-head__slider--sm-js').slick(_objectSpread({}, defaultSlide, {
		infinite: false,
		slidesToShow: 4,
		dots: false,
		arrows: false,
		vertical: false,
		verticalSwiping: false,
		focusOnSelect: true,
		asNavFor: $('.s-prod-head__slider--lg-js'),
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
				vertical: true,
				verticalSwiping: true
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 6
			}
		}]
	})); // $('.s-gal__slider\
	// ,.slider-for2 ')
	// 	.on('lazyLoaded', function (event, slick, image, imageSource) {
	// 		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// 	});
	// slider
	// const swiper4 = new Swiper('.color-slider', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 'auto',
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	freeMode: true,
	// 	watchOverflow: true,
	// 	slidesPerGroup: 3,
	// 	// centeredSlides: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// });
	// modal window
	//    const wow = new WOW({ mobile: false });
	//         wow.init();

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function (e) {
		e.preventDefault();
		var th = $(_this2);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data
		}).done(function (data) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () {});
	}); // //Ya map

	if ($('div').is("#map")) {
		// console.log(ymaps)
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9
			}, {
				searchControlProvider: 'yandex#search'
			}),
					// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка'
			}, {// Опции.
				// Необходимо указать данный тип макета.
				// iconLayout: 'default#image',
				// Своё изображение иконки метки.
				// iconImageHref: 'images/myIcon.gif',
				// Размеры метки.
				// iconImageSize: [30, 42],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				// iconImageOffset: [-5, -38]
			}),
					myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
				hintContent: 'Собственный значок метки с контентом',
				balloonContent: 'А эта — новогодняя' // iconContent: '12'

			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				// iconLayout: 'default#imageWithContent',
				// Своё изображение иконки метки.
				// iconImageHref: 'images/ball.png',
				// Размеры метки.
				// iconImageSize: [48, 48],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				// iconImageOffset: [-24, -24],
				// Смещение слоя с содержимым относительно слоя с картинкой.
				// iconContentOffset: [15, 15],
				// Макет содержимого.
				iconContentLayout: MyIconContentLayout
			});
			myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
		});
	}

	;
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}