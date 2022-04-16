import { ClubsData } from '../data/clubs'

const Clubs = () => {
	return (
		<>
			{/* <!-- ======= Team Section ======= --> */}
			<section id='clubs' className='team section-bg'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2>Clubs</h2>
						<p>
							{/* Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
							aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
							quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
							sit in iste officiis commodi quidem hic quas. */}
						</p>
					</div>

					<div className='row'>
						{ClubsData.map((club) => {
							return (
								<div className='col-lg-6 mt-3 mt-lg-0' key={club.id}>
									<div
										className='member d-flex align-items-start'
										data-aos='zoom-in'
										data-aos-delay='100'>
										<div className='pic'>
											<img
												src={`/images/logo/${club.image}`}
												className='img-fluid'
												alt=''
											/>
										</div>
										<div className='member-info'>
											<a href={`/${club.name.toLowerCase()}`}>
												<h4>{club.name}</h4>
											</a>
											<span>{club.about}</span>
											<p>{club.description}</p>
											<div className='social'>
												{club.social.twitter ? (
													<a href=''>
														<i className='ri-twitter-fill'></i>
													</a>
												) : (
													''
												)}
												{club.social.facebook ? (
													<a href=''>
														<i className='ri-facebook-fill'></i>
													</a>
												) : (
													''
												)}
												{club.social.instagram ? (
													<a href=''>
														<i className='ri-instagram-fill'></i>
													</a>
												) : (
													''
												)}
												{club.social.linkedin ? (
													<a href=''>
														<i className='ri-linkedin-box-fill'></i>{' '}
													</a>
												) : (
													''
												)}
												{club.social.youtube ? (
													<a href=''>
														<i className='ri-youtube-fill'></i>{' '}
													</a>
												) : (
													''
												)}
												{club.social.email ? (
													<a href=''>
														<i className='ri-mail-line'></i>{' '}
													</a>
												) : (
													''
												)}
												<a href='' className='website'>
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
