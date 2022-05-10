import axios from 'axios'
import { useState } from 'react'

const EditClub = ({ club }) => {
	const [data, setData] = useState({
		name: club.name,
		coordinators: club.coordinators,
		about: club.about,
		description: club.description,
		motto: club.motto,
		twitter: club.twitter,
		facebook: club.facebook,
		instagram: club.instagram,
		linkedin: club.linkedin,
		email: club.email,
		youtube: club.youtube,
	})

	const handleChange = (e) => {
		console.log(e.target.value)
		setData({ ...data, [e.target.name]: e.target.value === '' ? null : e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
		axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/clubs?id=${club.id}`, data).then((res) => {
			console.log(res.data)
			alert('Club updated successfully')
		})
	}

	return (
		<>
			<div
				className='modal fade'
				id='editClub'
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
										defaultValue={data.name}
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
										defaultValue={data.coordinators}
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
										defaultValue={data.about}
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
										defaultValue={data.description}
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
										defaultValue={data.motto}
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
										defaultValue={data.email}
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
											defaultValue={data.twitter}
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
											defaultValue={data.facebook}
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
											defaultValue={data.instagram}
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
											defaultValue={data.linkedin}
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
											defaultValue={data.youtube}
											onChange={handleChange}
										/>
										<label htmlFor='youtube'>Youtube Handler</label>
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

export default EditClub
