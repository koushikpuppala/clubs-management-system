const EditEvent = () => {
	return (
		<>
			<div
				className='modal fade'
				id='editEvent'
				data-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='CreateEventLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-xl'>
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
									position: 'relative',
									top: '12%',
									right: '3%',
									backgroundColor: '#fff',
								}}
								aria-label='Close'></button>
						</div>

						<div className='modal-body'>
							<form
								method='POST'
								id='createEventForm'
								name='createEventForm'
								encType='multipart/form-data'>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										defaultValue={event.club_id}
										placeholder='Club Id'
										disabled={true}
									/>
									<label htmlFor='name'>Club Id</label>
								</div>
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='name'
										id='name'
										onChange={handleChange}
										defaultValue={event.name}
										placeholder='Event Name'
									/>
									<label htmlFor='name'>Event Name</label>
								</div>
								<div className='form-group form-floating'>
									<textarea
										type='text'
										className='form-control'
										name='details'
										id='details'
										onChange={handleChange}
										defaultValue={event.details}
										placeholder='Details'
										rows={5}></textarea>
									<label htmlFor='details'>Details</label>
								</div>
								<div className='row'>
									<div className='form-group col-lg-4 form-floating'>
										<input
											type='datetime-local'
											className='form-control'
											name='start_date'
											id='start_date'
											onChange={handleChange}
											defaultValue={event.start_date}
											placeholder='Start Date'
										/>
										<label htmlFor='start_date'>Start Date</label>
									</div>
									<div className='form-group col-lg-4 form-floating'>
										<input
											type='datetime-local'
											className='form-control'
											name='reg_end_date'
											id='reg_end_date'
											defaultValue={event.reg_end_date}
											onChange={handleChange}
											placeholder='Registration End Date'
										/>
										<label htmlFor='reg_end_date'>Registration End Date</label>
									</div>
									<div className='form-group col-lg-4 form-floating'>
										<input
											type='datetime-local'
											className='form-control'
											name='end_date'
											id='end_date'
											defaultValue={event.end_date}
											onChange={handleChange}
											placeholder='End Date'
										/>
										<label htmlFor='end_date'>End Date</label>
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
								
								<div className='form-group form-floating'>
									<input
										type='text'
										className='form-control'
										name='prize'
										id='prize'
										onChange={handleChange}
										defaultValue={event.prize}
										placeholder='Prize'
									/>
									<label htmlFor='prize'>Prize</label>
								</div>

								<div className='form-group form-floating'>
									<input
										type='number'
										className='form-control'
										name='prize_count'
										id='prize_count'
										onChange={handleChange}
										defaultValue={event.prize_count}
										placeholder='No of Prizes'
									/>
									<label htmlFor='prize_count'>Prize_count</label>
								</div>

								<div
									className='form-group form-floating'
									style={{
										color: '#000',
										border: '1px solid #fff',
										borderRadius: '2.5px',
										padding: '20px 20px 0 20px',
										backgroundColor: '#fff',
									}}>
									<fieldset class='row mb-3'>
										<legend class='col-form-label col-sm-4 pt-0'>
											Issue Participation Certificates? (Y/N)
										</legend>
										<div class='col-sm-8'>
											<div class='form-check form-check-inline'>
												<input
													class='form-check-input'
													type='radio'
													name='certificate'
													id='certificate_yes'
													value={true}
													onChange={handleChange}
												/>
												<label class='form-check-label' for='gridRadios1'>
													Yes
												</label>
											</div>
											<div class='form-check form-check-inline'>
												<input
													class='form-check-input'
													type='radio'
													name='certificate'
													id='certificate_no'
													value={false}
													onChange={handleChange}
												/>
												<label class='form-check-label' for='gridRadios2'>
													No
												</label>
											</div>
										</div>
									</fieldset>
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
										Update Event
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
