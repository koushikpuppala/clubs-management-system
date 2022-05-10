import axios from 'axios'
import { useState } from 'react'
import { withProtected } from '../context'

const Test = () => {
	const [state, setState] = useState({
		image: null,
	})

	const handleChange = (e) => {
		setState({
			...state,
			image: e.target.files[0],
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('image', state.image)
		formData.append('name', 'test.png')
		axios
			.post(`${process.env.NEXT_PUBLIC_BASE_URL}/test`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
				alert('Error while uploading file' + err)
			})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='file' name='image' onChange={handleChange} />
				<button type='submit'>Submit</button>
			</form>
		</>
	)
}

export default Test
