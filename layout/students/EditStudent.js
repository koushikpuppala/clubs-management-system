import axios from 'axios'
import { useState } from 'react'

const EditStudent = ({ session }) => {
	const [student, setStudent] = useState({
		bio: session.bio,
		instagram: session.instagram,
		linkedin: session.linkedin,
		facebook: session.facebook,
		twitter: session.twitter,
		github: session.github,
		phone: session.phone,
		website: session.website,
	})

	const handleChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value === 'null' ? null : e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/students?id=${session.id}`, student)
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
							<form method='POST' id='editStudentForm' name='editStudentForm'>
								<div className='form-group form-floating'>
									<textarea
										name='bio'
										className='form-control'
										id='bio'
										rows='5'
										defaultValue={data.description}
										onChange={handleChange}
										placeholder='Bio'></textarea>
									<label htmlFor='bio'>Bio</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='phone'
										id='phone'
										defaultValue={data.name}
										onChange={handleChange}
										placeholder='Phone'
									/>
									<label htmlFor='phone'>Phone</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='type'
										className='form-control'
										name='website'
										id='website'
										defaultValue={data.email}
										onChange={handleChange}
										placeholder='Website'
									/>
									<label htmlFor='website'>Website</label>
								</div>
								<div className='form-group input-group'>
									<div
										className='input-group-text col-md-4'
										style={{ borderRadius: '0% !important' }}>
										https://www.github.com/
									</div>
									<div className='form-floating col-md-8'>
										<input
											type='text'
											className='form-control'
											id='github'
											name='github'
											defaultValue={data.twitter}
											onChange={handleChange}
										/>
										<label htmlFor='github'>GitHub Username</label>
									</div>
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

export default EditStudent
