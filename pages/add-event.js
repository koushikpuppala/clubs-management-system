import axios from 'axios'
import { useState } from 'react'
import Header from '../components/Header'
import AddEvent from '../layout/codesoc/AddEvent'

const CreateEvent = () => {
	const [event, setEvent] = useState({
		name: null,
		date: null,
		details: null,
		prize: null,
		prize_count: null,
	})

	const handleChange = (e) => {
		setEvent({
			...event,
			[e.target.name]: e.target.value === '' ? null : e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Header />
			<button
				type='button'
				className='btn btn-outline-success'
				data-bs-toggle='modal'
				data-bs-target='#createEvent'>
				Create Club
			</button>
			<AddEvent />
		</>
	)
}

export default CreateEvent
