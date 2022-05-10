import axios from 'axios'
import ClubsNavbar from '../../components/Clubs/Navbar'
import ClubsAbout from '../../components/Clubs/About'
import Header from '../../components/Header'
import ClubsEvent from '../../components/Clubs/Events'
import ClubsTeam from '../../components/Clubs/Team'
import Footer from '../../components/Footer'
import { withPublic } from '../../context'
import EventForm from '../../components/Events/Form'
import { useEffect, useState } from 'react'
import AddEvent from '../../layout/codesoc/AddEvent'

const fetchData = async () => {
	const result = await axios.get('http://localhost:8080/clubs')
	return result.data
}

const Clubspage = ({ club, auth }) => {
	console.log(auth.students)
	const [session, setSession] = useState(null)
	const [events, setEvents] = useState([])
	useEffect(() => {
		axios.get(`http://localhost:8080/events?clubId=${club.id}`).then((res) => {
			console.log(res.data)
			setEvents(res.data)
		})
		auth.user
			? auth.students.map((student) => {
					if (student.email === auth.user.email) {
						setSession(student)
					}
			  })
			: setSession(null)
	}, [auth.user])
	return (
		<>
			<Header name={club.name} favicon={club.image} />
			<ClubsNavbar club={club} auth={auth} students={auth.students} session={session} />
			{/* <AddEvent /> */}
			<section id='hero' class='d-flex align-items-center'>
				<div class='container-fluid' data-aos='fade-up'>
					<div class='row justify-content-center'>
						<div class='col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
							<h1>{club.name.toUpperCase()}</h1>
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
			<ClubsAbout club={club} auth={auth} />
			<ClubsEvent events={events} />
			<ClubsTeam club={club} auth={auth} />
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

	console.log(paths)

	return {
		paths,
		fallback: false,
	}
}
export default withPublic(Clubspage)
