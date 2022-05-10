import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css'
import 'swiper/css/bundle'
import '../styles/globals.css'
import '../styles/style.css'
import { useEffect } from 'react'
import { MainAction } from '../actions/Main'
import { AuthProvider, AuthStateChange } from '../context'

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		MainAction()
	}, [])

	return (
		<AuthProvider>
			<AuthStateChange>
				<Component {...pageProps} />
			</AuthStateChange>
		</AuthProvider>
	)
}

export default App
