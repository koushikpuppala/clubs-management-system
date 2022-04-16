import AOS from 'aos'
import Swiper from 'swiper'
import { select } from './Default'

export const MainAction = () => {
	/**
	 * Animation on scroll
	 */
	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		})
	})
	/**
	 * Preloader
	 */
	let preloader = select('#preloader')
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove()
		})
	}
	/**
	 * Clients Slider
	 */
	new Swiper('.clients-slider', {
		speed: 400,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 120,
			},
		},
	})
}
