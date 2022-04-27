import { useEffect } from 'react'
import { FooterAction } from '../actions/Footer'

const Contact = () => {
	useEffect(() => {
		FooterAction()
	}, [])
	return (
		<>
			{/* <!-- ======= Contact Section ======= --> */}
			<section id='contact' className='contact'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Contact Us</h2>
					</div>

					<div className='row'>
						<div className='col-lg-5 d-flex align-items-stretch'>
							<div className='info'>
								<div className='address'>
									<i className='bi bi-geo-alt'></i>
									<h4>Location:</h4>
									<p>
										Transit in Government Engineering College (GEC) Yermarus
										Camp, Karnataka 584135
									</p>
								</div>

								<div className='email'>
									<i className='bi bi-envelope'></i>
									<h4>Email:</h4>
									<p>info@iiitr.ac.in</p>
								</div>

								<div className='phone'>
									<i className='bi bi-phone'></i>
									<h4>Call:</h4>
									<p>040-2301 6002</p>
								</div>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7225614571944!2d77.36580474410204!3d16.244991223821224!2m3!1f0!2f39.236054949839954!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x0%3A0x28afde55f519a10b!2sIndian%20Institute%20of%20Information%20Technology%2C%20Raichur!5e1!3m2!1sen!2sin!4v1649830429397!5m2!1sen!2sin'
									width='100%'
									height='275px'
									style={{ border: '0' }}
									allowFullScreen={true}
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>

						<div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
							<form
								action='forms/contact.php'
								method='post'
								role='form'
								className='php-email-form'>
								<div className='row'>
									<div className='form-group col-md-6'>
										<label htmlFor='name'>Name</label>
										<input
											type='text'
											name='name'
											className='form-control'
											id='name'
											required
										/>
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='name'>Email</label>
										<input
											type='email'
											className='form-control'
											name='email'
											id='email'
											required
										/>
									</div>
								</div>
								<div className='form-group'>
									<label htmlFor='name'>Subject</label>
									<input
										type='text'
										className='form-control'
										name='subject'
										id='subject'
										required
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='name'>Message</label>
									<textarea
										className='form-control'
										name='message'
										rows='10'
										required></textarea>
								</div>
								<div className='my-3'>
									<div className='loading'>Loading</div>
									<div className='error-message'></div>
									<div className='sent-message'>
										Your message has been sent. Thank you!
									</div>
								</div>
								<div className='text-center'>
									<button type='submit'>Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Contact Section --> */}
		</>
	)
}




export default Contact
