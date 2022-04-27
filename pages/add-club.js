import axios from 'axios'
import { useState } from 'react'
import Header from '../components/Header'
import { withProtected } from '../context'

const CreateClub = () => {
	const [club, setClub] = useState({
		name: null,
		coordinators: null,
		about: null,
		description: null,
		motto: null,
		twitter: null,
		facebook: null,
		instagram: null,
		linkedin: null,
		email: null,
		youtube: null,
		image: null,
	})

	const handleChange = (e) => {
		setClub({
			...club,
			[e.target.name]: e.target.value === '' ? null : e.target.value,
		})
	}

	const handleImage = (e) => {
		setClub({
			...club,
			image: e.target.files[0],
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const body = new FormData()
		body.append('name', club.name)
		body.append('coordinators', club.coordinators)
		body.append('about', club.about)
		body.append('description', club.description)
		body.append('motto', club.motto)
		body.append('twitter', club.twitter)
		body.append('facebook', club.facebook)
		body.append('instagram', club.instagram)
		body.append('linkedin', club.linkedin)
		body.append('email', club.email)
		body.append('youtube', club.youtube)
		body.append('image', club.image)
		axios.post('/api/clubs', body).then(
			(res) => {
				console.log(res.data)
				window.location.href = '/'
			},
			(err) => {
				console.log(err)
				alert(`Something went wrong - ${err.message}`)
			}
		)
	}

	return (
		<>
			<Header />
			<button
				type='button'
				className='btn btn-outline-success'
				data-bs-toggle='modal'
				data-bs-target='#createClub'>
				Create Club
			</button>
		</>
	)
}

export default withProtected(CreateClub)
