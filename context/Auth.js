import { useEffect, useState, createContext, useContext } from 'react'
import { AuthService } from '../config/Auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Loading from '../components/Loading'
import axios from 'axios'

const authContext = createContext()

export const useAuth = () => {
	return useContext(authContext)
}

export const AuthProvider = (props) => {
	const [user, setUser] = useState(null)
	const [error, setError] = useState()
	const [clubs, setClubs] = useState([])
	const [students, setStudents] = useState([])

	useEffect(() => {
		axios.get('/api/clubs').then((res) => {
			setClubs(res.data)
		})

		axios.get('/api/students').then((res) => {
			console.log(res.data)
			setStudents(res.data)
		})
	}, [])

	const login = async () => {
		const { error, user } = await AuthService.login()

		students.map(async (student) => {
			if (student.email !== user.email) {
				axios.post('/api/students', {
					id: user.uid,
					name: user.displayName,
					email: user.email,
					image: user.photoURL,
					roll: user.email.split('@')[0].toUpperCase(),
				})
			} else {
				axios.put(`/api/students?id=${user.uid}`, {
					name: user.displayName,
					image: user.photoURL,
					roll: user.email.split('@')[0].toUpperCase(),
				})
			}
		})
		setUser(user ?? null)
		setError(error ?? '')
	}

	const logout = async () => {
		await AuthService.logout()
		setUser(null)
		window.location.href = '/'
	}

	return (
		<authContext.Provider
			value={{
				clubs,
				user,
				error,
				login,
				logout,
				setUser,
				students,
			}}
			{...props}
		/>
	)
}

export const AuthStateChange = ({ children }) => {
	const auth = getAuth()
	const { setUser } = useAuth()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user)
			setLoading(false)
		})
	}, [])

	if (loading) {
		return <Loading />
	}

	return children
}
