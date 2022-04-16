import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css'
import 'swiper/css/bundle'
import '../styles/globals.css'
import { useEffect } from 'react'
import { MainAction } from '../actions/Main'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		MainAction()
	}, [])

	return <Component {...pageProps} />
}

export default MyApp
