import axios from 'axios'
import { useEffect, useState } from 'react'
import EventsNavbar from '../../components/Events/Navbar'
import { withPublic } from '../../context'

const fetchData = async () => {
	const result = await axios.get('http://localhost:3000/api/clubs')
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
			.get(`http://localhost:3000/api/events/${club.name.toLowerCase()}`)
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
							<div class='col-md-6 d-flex' data-aos='fade-right'>
								<div class='card'>
									<div class='card-img'>
										<img src='/assets/img/services-1.jpg' alt='...' />
									</div>
									<div class='card-body'>
										<h5 class='card-title'>
											<a href=''>Temporibus laudantium</a>
										</h5>
										<p class='card-text'>
											Lorem ipsum dolor sit amet, consectetur elit, sed do
											eiusmod tempor ut labore et dolore magna aliqua. Ut enim
											ad minim veniam, quis nostrud exercitation ullamco
											laboris nisi ut aliquip ex ea commodo consequat
										</p>
										<div class='read-more'>
											<a href='#'>
												<i class='bi bi-arrow-right'></i> Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class='col-md-6 d-flex' data-aos='fade-left'>
								<div class='card'>
									<div class='card-img'>
										<img src='/assets/img/services-2.jpg' alt='...' />
									</div>
									<div class='card-body'>
										<h5 class='card-title'>
											<a href=''>Aperiores voluptates</a>
										</h5>
										<p class='card-text'>
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem doloremque laudantium, totam rem aperiam,
											eaque ipsa quae ab illo inventore veritatis et quasi
											architecto beatae vitae dicta sunt explicabo
										</p>
										<div class='read-more'>
											<a href='#'>
												<i class='bi bi-arrow-right'></i> Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class='col-md-6 d-flex' data-aos='fade-right'>
								<div class='card'>
									<div class='card-img'>
										<img src='/assets/img/services-3.jpg' alt='...' />
									</div>
									<div class='card-body'>
										<h5 class='card-title'>
											<a href=''>Veritatis natus nisi</a>
										</h5>
										<p class='card-text'>
											Nemo enim ipsam voluptatem quia voluptas sit aut odit
											aut fugit, sed quia magni dolores eos qui ratione
											voluptatem sequi nesciunt Neque porro quisquam est, qui
											dolorem ipsum quia dolor sit amet
										</p>
										<div class='read-more'>
											<a href='#'>
												<i class='bi bi-arrow-right'></i> Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class='col-md-6 d-flex' data-aos='fade-left'>
								<div class='card'>
									<div class='card-img'>
										<img src='/assets/img/services-4.jpg' alt='...' />
									</div>
									<div class='card-body'>
										<h5 class='card-title'>
											<a href=''>Aliquam veritatis</a>
										</h5>
										<p class='card-text'>
											Nostrum eum sed et autem dolorum perspiciatis. Magni
											porro quisquam laudantium voluptatem. In molestiae earum
											ab sit esse voluptatem. Eos ipsam cumque ipsum officiis
											qui nihil aut incidunt aut
										</p>
										<div class='read-more'>
											<a href='#'>
												<i class='bi bi-arrow-right'></i> Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
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
	return {
		paths: data.map((club) => ({
			params: {
				name: club.name.toLowerCase(),
			},
		})),
		fallback: false,
	}
}

export default withPublic(ClubsEventsPage)
