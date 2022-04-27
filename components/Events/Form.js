import { useEffect, useState } from 'react'

const EventForm = () => {
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
			<div
				className='modal fade'
				id='createEvent'
				data-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='CreateEventLabel'
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
								CREATE AN EVENT
							</h2>
							<button
								type='button'
								className='btn btn-close'
								data-bs-dismiss='modal'
								style={{
									position: 'absolute',
									top: '12%',
									right: '3%',
									backgroundColor: '#fff',
								}}
								aria-label='Close'></button>
						</div>

						<div className='modal-body'>
							<form method='POST' id='createEventForm' name='createEventForm'>
								<div className='form-group form-floating'>
									<input
										type='number'
										className='form-control'
										name='about'
										id='about'
										defaultValue={event.date}
										onChange={handleChange}
										placeholder='About'
									/>
									<label htmlFor='about'>About Club</label>
								</div>
								<div
									className='modal-footer'
									style={{
										justifyContent: 'space-evenly',
									}}>
									<button
										type='button'
										className='btn btn-success'
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

export default EventForm
