import { useRouter } from 'next/router'
import { useAuth } from './Auth'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

export const withPublic = (Component) => {
	const WithPublic = (props) => {
		const auth = useAuth()
		return <Component auth={auth} {...props} />
	}
	return WithPublic
}
export const withProtected = (Component) => {
	const WithProtected = (props) => {
		const auth = useAuth()
		const router = useRouter()
		if (!auth.user) {
			useEffect(() => {
				router.push('/', '/', { shallow: true })
			}, [])
			return <Loading />
		}
		return <Component auth={auth} {...props} />
	}
	return WithProtected
}

export const globalAccess = (Component) => {
	const GlobalAccess = (props) => {
		const auth = useAuth()
		const { user, students } = auth
		const [session, setSession] = useState(null)
		useEffect(() => {
			user
				? students.map((student) => {
						if (student.email === user.email) {
							setSession(student)
						}
				  })
				: setSession(null)
		}, [user])

		auth = { ...auth, session }
		return <Component auth={auth} {...props} />
	}
	return GlobalAccess
}
