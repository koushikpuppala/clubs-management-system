import axios from 'axios'
import { useState } from 'react'
import { withProtected } from '../../context'

const AddClubs = () => {
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

	const handleClear = () => {
		setClub({
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
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (
			club.name === null ||
			club.coordinators === null ||
			club.about === null ||
			club.description === null ||
			club.email === null
		) {
			return alert('Please fill all the required fields')
		} else {
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
			axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/clubs`, body).then(
				(res) => {
					console.log(res.data)
					alert('Club added successfully')
					window.location.reload()
				},
				(err) => {
					console.log(err)
					alert(`Something went wrong - ${err.message}`)
				}
			)
		}
	}
	return (
		<>
			<div
				className='modal fade'
				id='createClub'
				data-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='CreateClubLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-lg'>
					<div
						className='modal-content'
						style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}>
						<div
							className='modal-header'
							style={{
								justifyContent: 'center',
							}}>
							<h2 className='modal-title heading-section' id='CreateClubLabel'>
								CREATE A CLUB
							</h2>
							<button
								type='button'
								className='btn btn-close'
								data-bs-dismiss='modal'
								style={{
									position: 'relative',
									top: '2.5%',
									right: '3%',
									backgroundColor: '#fff',
								}}
								aria-label='Close'></button>
						</div>

						<div className='modal-body'>
							<form
								method='POST'
								id='createClubForm'
								name='createClubForm'
								encType='multipart/form-data'>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										defaultValue={club.name}
										onChange={handleChange}
										placeholder='Name of the Club'
									/>
									<label htmlFor='name'>Name of the Club</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='coordinators'
										id='coordinators'
										defaultValue={club.coordinators}
										onChange={handleChange}
										placeholder='Coordinators'
									/>
									<label htmlFor='coordinators'>Club Coordinators</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='about'
										id='about'
										defaultValue={club.about}
										onChange={handleChange}
										placeholder='About'
									/>
									<label htmlFor='about'>About Club</label>
								</div>
								<div className='form-group form-floating'>
									<textarea
										name='description'
										className='form-control'
										id='description'
										rows='5'
										defaultValue={club.description}
										onChange={handleChange}
										placeholder='Description'></textarea>
									<label htmlFor='description'>Club Description</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='motto'
										id='motto'
										defaultValue={club.motto}
										onChange={handleChange}
										placeholder='Motto'
									/>
									<label htmlFor='motto'>Club Motto</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='email'
										className='form-control'
										name='email'
										id='email'
										defaultValue={club.email}
										onChange={handleChange}
										placeholder='Club Email-id'
									/>
									<label htmlFor='email'>Club Email-id</label>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.twitter.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='twitter'
											name='twitter'
											defaultValue={club.twitter}
											onChange={handleChange}
										/>
										<label htmlFor='twitter'>Twitter Handler</label>
									</div>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.facebook.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='facebook'
											name='facebook'
											defaultValue={club.facebook}
											onChange={handleChange}
										/>
										<label htmlFor='facebook'>Facebook Handler</label>
									</div>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.instagram.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='instagram'
											name='instagram'
											defaultValue={club.instagram}
											onChange={handleChange}
										/>
										<label htmlFor='instagram'>Instagram Handler</label>
									</div>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.linkedin.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='linkedin'
											name='linkedin'
											defaultValue={club.linkedin}
											onChange={handleChange}
										/>
										<label htmlFor='linkedin'>Linkedin Handler</label>
									</div>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.youtube.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='youtube'
											name='youtube'
											defaultValue={club.youtube}
											onChange={handleChange}
										/>
										<label htmlFor='youtube'>Youtube Handler</label>
									</div>
								</div>
								<div className='form-group input-group'>
									{/* <label for='formFile' className='form-label col-md-4'>
										Default file input example
									</label> */}
									<div
										className='input-group-text col-md-4'
										style={{
											borderRadius: '0% !important',
											border: '0.25px solid #000',
										}}>
										Add Club Logo
									</div>
									<div className='col-md-8'>
										<input
											style={{
												height: '100%',
												border: '0.25px solid #000',
											}}
											className='form-control form-control-lg'
											type='file'
											id='image'
											name='image'
											onChange={handleImage}
										/>
									</div>
								</div>
								<div
									className='modal-footer'
									style={{
										justifyContent: 'space-evenly',
									}}>
									<button
										type='submit'
										className='btn btn-success'
										data-bs-dismiss='modal'
										onClick={handleSubmit}>
										Create Club
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default withProtected(AddClubs)
