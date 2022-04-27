import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './Firebase'

export const AuthService = {
	login: async () => {
		const provider = new GoogleAuthProvider()
		try {
			const UserCredential = await signInWithPopup(auth, provider)
			return {
				user: UserCredential.user,
			}
		} catch (err) {
			return {
				error: err.message,
			}
		}
	},
	logout: async () => {
		await auth.signOut()
	},
}
