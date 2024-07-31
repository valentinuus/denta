//sliders
const sliderHero = document.querySelector('.hero__swiper');

const heroslider = new Swiper(sliderHero, {
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


// const sliderLicense = document.querySelector('.license__slider');

// let licenseSlider = new Swiper(sliderLicense, {
// 	slidesPerView: 1,
// 	spaceBetween: 16,
// 	loop: true,
// 	slideClass: 'license-slider__slid',
// 	wrapperClass: 'license-slider__wrap',
// 	pagination: {
// 		el: '.license-slider__pag',
// 	},
// 	navigation: {
// 		nextEl: '.license-slide__button-next',
// 		prevEl: '.license-slide__button-prev',
// 	},
// 	breakpoints: {
// 		840: {
// 			slidesPerView: 3,
// 		},
// 		660: {
// 			slidesPerView: 2,
// 		}
// 	}
// })


const sliderModal = document.querySelectorAll('.modal-swiper');

sliderModal.forEach((el) => {
	let modalSlider = new Swiper(el, {
		slidesPerView: 1,
		spaceBetween: 16,
		slideClass: 'modal-slide',
		wrapperClass: 'modal-wrapper',
		navigation: {
			nextEl: '.modal-button-next',
			prevEl: '.modal-button-prev',
		}
	})
});


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
	// console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});
