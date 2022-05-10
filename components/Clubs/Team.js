import Image from 'next/image'
import { useEffect, useState } from 'react'

const ClubsTeam = ({ club, auth }) => {
	const [coordinates, setCoordinates] = useState([])
	useEffect(() => {
		console.log(club)
		const data = club.coordinators
		const list = data.split(',').map((item) => item.trim())
		console.log(list)
		setCoordinates(list)
	}, [])
	return (
		<>
			<section id='team'>
				<div class='container'>
					<div class='section-title'>
						<h2>Team</h2>
					</div>
					<div class='row'>
						{coordinates.map((coordinator) => {
							return auth.students.map((student) => {
								return (
									<>
										{student.roll.toLowerCase() ===
										coordinator.toLowerCase() ? (
											<div key={coordinator}>
												<div
													class='col-lg-3 col-md-6'
													data-aos='zoom-out'
													data-aos-delay='100'>
													<div class='member'>
														<Image
															layout='raw'
															width={'400px'}
															height={'400px'}
															src={student.image}
															class='img-fluid'
															alt=''
														/>
														<div class='member-info'>
															<div class='member-info-content'>
																<h4>{student.name}</h4>
																<div class='social'>
																	{/* <a href=''>
																		<i class='bi bi-twitter'></i>
																	</a>
																	<a href=''>
																		<i class='bi bi-facebook'></i>
																	</a>
																	<a href=''>
																		<i class='bi bi-instagram'></i>
																	</a> */}
																	<a
																		href={`mailto:${student.email}`}>
																		<i class='bi bi-envelope'></i>
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										) : null}
									</>
								)
							})
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default ClubsTeam
