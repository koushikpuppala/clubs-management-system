import { useEffect, useState } from 'react'
import { ProfileNav } from '../components'
import Image from 'next/image'
import { withProtected, withPublic } from '../context'
import Loading from '../components/Loading'
import AddEvent from '../layout/codesoc/AddEvent'

const Profile = ({ auth }) => {
	const { clubs, students, user } = auth
	const [session, setSession] = useState(null)
	const [club, setClub] = useState(null)
	useEffect(() => {
		console.log(user)
		user
			? students.map((student) => {
					if (student.email === user.email) {
						console.log(student)
						setSession(student)
					}
			  })
			: setSession(null)
		session
			? clubs.map((club) => {
					if (club.name.toLowerCase() === session.club.toLowerCase()) {
						console.log(club)
						setClub(club)
					}
			  })
			: setClub(null)
	}, [user, session, clubs, club])
	return session && club ? (
		<>
			<ProfileNav session={session} auth={auth} />
			<AddEvent club={club} />
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div
						class='row'
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<div class='col-lg-5'>
							<div class='card'>
								<div class='card-body'>
									<div class='d-flex flex-column align-items-center text-center'>
										<Image
											layout='raw'
											width={150}
											height={150}
											src={session.image}
											alt='Admin'
											class='rounded-circle'
										/>
										<div class='mt-3'>
											<h4>{session.name}</h4>
											<p>{session.bio}</p>
											<p class='text-secondary mb-1'>
												<i class='fa fa-envelope'></i> {session.email}
											</p>
											<p class='text-secondary mb-1'>
												<i class='fa fa-phone'></i> {session.phone}
											</p>
											<p class='text-secondary mb-1'>
												<i class='fa fa-globe'></i> {session.website}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{(session.website ||
							session.github ||
							session.linkedin ||
							session.twitter ||
							session.instagram ||
							session.facebook ||
							session.phone) && (
							<div class='col-lg-7'>
								<div class='card mt-3'>
									<ul class='list-group list-group-flush'>
										{session.phone && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='bi bi-globe2'></i>&nbsp;Phone
												</h6>
												<a href={session.website} class='text-secondary'>
													{session.phone}
												</a>
											</li>
										)}
										{session.website && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='bi bi-globe2'></i>&nbsp;Website
												</h6>
												<a href={session.website} class='text-secondary'>
													{session.website}
												</a>
											</li>
										)}
										{session.github && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='fas fa-envelope mr-2'></i>
													Github
												</h6>
												<span class='text-secondary'>bootdey</span>
											</li>
										)}
										{session.linkedin && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='fas fa-envelope mr-2'></i>
													Github
												</h6>
												<span class='text-secondary'>bootdey</span>
											</li>
										)}
										{session.twitter && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='fas fa-phone mr-2'></i>
													Twitter
												</h6>
												<span class='text-secondary'>@bootdey</span>
											</li>
										)}
										{session.instagram && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='fas fa-map-marker mr-2'></i>
													Instagram
												</h6>
												<span class='text-secondary'>bootdey</span>
											</li>
										)}
										{session.facebook && (
											<li class='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
												<h6 class='mb-0'>
													<i class='fas fa-map-marker mr-2'></i>
													Facebook
												</h6>
												<span class='text-secondary'>bootdey</span>
											</li>
										)}
									</ul>
								</div>
							</div>
						)}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '10px',
								width: '100% !important',
							}}>
							<button class='btn btn-info' target='__blank'>
								Edit
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	) : (
		<Loading />
	)
}

export default withProtected(Profile)
