import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import EventsNavbar from '../../../components/Events/Navbar'
import { withPublic } from '../../../context'
import { Footer } from '../../../components'

const fetchData = async () => {
	const result = await axios.get('http://localhost:8080/clubs')
	return result.data
}

const ClubsEventsPage = ({ club, auth }) => {
	const [events, setEvents] = useState([])
	const [session, setSession] = useState(null)
	useEffect(() => {
		auth.user
			? auth.students.map((student) => {
					if (student.email === auth.user.email) {
						setSession(student)
					}
			  })
			: setSession(null)
		axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/events?clubId=${club.id}`)
			.then(({ data }) => {
				setEvents(data)
			})
	}, [])

	return (
		<>
			<EventsNavbar auth={auth} session={session} club={club} />
			<section id='hero' class='d-flex align-items-center'>
				<div class='container-fluid' data-aos='fade-up'>
					<div class='row justify-content-center'>
						<div class='col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
							<h1>{`${club.name} - ${'Events'}`.toUpperCase()}</h1>
							<h2>{club.about}</h2>
							<div>
								<a href='#events' class='btn-get-started scrollto'>
									Get Started
								</a>
							</div>
						</div>
						<div
							class='col-xl-4 col-lg-6 order-1 order-lg-2 hero-img'
							data-aos='zoom-in'
							data-aos-delay='150'>
							<img
								src={`/images/clubs/${club.image}`}
								class='img-fluid animated'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
			<main id='main'>
				<section id='events' class='services section-bg'>
					<div class='container'>
						<div class='section-title'>
							<h2 data-aos='fade-in'>Events</h2>
						</div>

						<div class='row'>
							{events.map((event) => {
								return (
									<div class='col-md-6 d-flex' data-aos='fade-right'>
										<div class='card'>
											<div class='card-img'>
												<Image
													layout='raw'
													width={400}
													height={400}
													src={`/images/events/${event.banner}`}
													alt='...'
												/>
											</div>
											<div class='card-body'>
												<h5 class='card-title'>
													<a href=''>{event.name}</a>
												</h5>
												<p class='card-text'>{event.details}</p>
												<div class='read-more'>
													<a
														href={`events/${event.name
															.toLowerCase()
															.replace(/\s/g, '-')}`}>
														<i class='bi bi-arrow-right'></i> Read More
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
			</main>
			<Footer />
		</>
	)
}

export async function getStaticProps({ params }) {
	const data = await fetchData()
	const club = data
		.map((club) => (club.name.toLowerCase() === params.name ? club : null))
		.filter((club) => club !== null)[0]
	return {
		props: { club },
	}
}

export async function getStaticPaths() {
	const data = await fetchData()
	const paths = data.map((club) => ({
		params: {
			name: club.name.toLowerCase(),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export default withPublic(ClubsEventsPage)
