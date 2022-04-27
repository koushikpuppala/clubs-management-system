import AOS from 'aos'

export const MainAction = () => {
	/**
	 * Animation on scroll
	 */
	AOS.init({
		duration: 1000,
		once: false,
		mirror: true,
	})
}
