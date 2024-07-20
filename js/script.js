// test PC or mobile
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
// test PC or mobile

// testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// testWebP


//menu
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop-scroll');
		burger?.classList.remove('burger--active');
		nav?.classList.remove('nav--visible');
	});
});



//sliders
const sliderHero = document.querySelector('.hero__swiper');

const heroslider = new Swiper(sliderHero, {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


const sliderLicense = document.querySelector('.license__slider');

let licenseSlider = new Swiper(sliderLicense, {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	slideClass: 'license-slider__slid',
	wrapperClass: 'license-slider__wrap',
	pagination: {
		el: '.license-slider__pag',
	},
	navigation: {
		nextEl: '.license-slide__button-next',
		prevEl: '.license-slide__button-prev',
	},
	breakpoints: {
		840: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
})


const btns = document.querySelectorAll('.license-slider__slid-content');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});
