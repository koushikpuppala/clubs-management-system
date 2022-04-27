import Image from 'next/image'

const Clubs = ({ clubs }) => {
	return (
		<>
			<section id='clubs' className='team section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Clubs</h2>
					</div>

					<div className='row'>
						{clubs.map((club) => {
							return (
								<div className='col-lg-6 mt-3 mt-lg-0' key={club.id}>
									<div
										className='member d-flex align-items-start'
										data-aos='zoom-in'
										data-aos-delay='100'>
										<div className='pic'>
											<Image
												layout='raw'
												width={500}
												height={500}
												src={`/images/clubs/${club.image}`}
												className='img-fluid'
												alt={club.name}
											/>
										</div>
										<div className='member-info'>
											<a href={`/${club.name.toLowerCase()}`}>
												<h4>{club.name}</h4>
											</a>
											<span>{club.about}</span>
											<p>{club.description}</p>
											<div className='social'>
												{club.twitter ? (
													<a
														href={`https://www.twitter.com/${club.twitter}`}
														target='_blank'>
														<i className='ri-twitter-fill'></i>
													</a>
												) : (
													''
												)}
												{club.facebook ? (
													<a
														href={`https://www.facebook.com/${club.facebook}`}
														target='_blank'>
														<i className='ri-facebook-fill'></i>
													</a>
												) : (
													''
												)}
												{club.instagram ? (
													<a
														href={`https://www.instagram.com/${club.instagram}`}
														target='_blank'>
														<i className='ri-instagram-fill'></i>
													</a>
												) : (
													''
												)}
												{club.linkedin ? (
													<a
														href={`https://www.linkedin.com/company/${club.linkedin}`}
														target='_blank'>
														<i className='ri-linkedin-box-fill'></i>{' '}
													</a>
												) : (
													''
												)}
												{club.youtube ? (
													<a
														href={`https://www.youtube.com/channel/${club.youtube}`}
														target='_blank'>
														<i className='ri-youtube-fill'></i>{' '}
													</a>
												) : (
													''
												)}
												{club.email ? (
													<a
														href={`mailto:${club.email}`}
														target='_blank'>
														<i className='ri-mail-line'></i>{' '}
													</a>
												) : (
													''
												)}
												<a
													href={`${club.name.toLowerCase()}`}
													className='website'>
													<i className='ri-global-line'></i>{' '}
												</a>
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Clubs
