import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: 'AIzaSyDA5FbV9LQbQUM1D-LxQdxhoddPB7EQuMo',
	authDomain: 'iiitr-clubs.firebaseapp.com',
	projectId: 'iiitr-clubs',
	storageBucket: 'iiitr-clubs.appspot.com',
	messagingSenderId: '959007418950',
	appId: '1:959007418950:web:532681ffdab4aa2aa0b847',
	measurementId: 'G-W0NEZB61NJ',
}

if (!getApps().length) {
	initializeApp(firebaseConfig)
	if (typeof window !== 'undefined') {
		if ('measurementId' in firebaseConfig) {
			getAnalytics(initializeApp(firebaseConfig))
		}
	}
}

export const auth = getAuth()

export default firebaseConfig
