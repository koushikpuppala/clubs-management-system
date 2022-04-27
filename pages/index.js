import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Clubslogo from '../components/ClubsLogo'
import Clubs from '../components/Clubs'
import Footer from '../components/Footer'
import { withPublic } from '../context'
import { useEffect, useState } from 'react'

const Home = ({ auth }) => {
	const { students, clubs, user, error, login, logout } = auth
	const [session, setSession] = useState(null)
	useEffect(() => {
		user
			? students.map((student) => {
					if (student.email === user.email) {
						setSession(student)
					}
			  })
			: setSession(null)
	}, [user])
	return (
		<>
			<Header name='Clubs | IIIT Raichur' favicon='iiitr.png' />
			<Navbar session={session} auth={auth} />
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'
							data-aos='fade-up'
							data-aos-delay='200'>
							<h1>Clubs of IIITR</h1>
							<h2>{session ? 'Welcome ' + session.name : 'Welcome to IIITR'}</h2>

							<div className='d-flex justify-content-center justify-content-lg-start'></div>
						</div>
						<div
							className='col-lg-6 order-1 order-lg-2 hero-img'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<Image
								width={780}
								height={646}
								layout='raw'
								src='/assets/img/hero-img.png'
								className='img-fluid animated'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>

			<main id='main'>
				<Clubslogo clubs={clubs} />
				<Clubs clubs={clubs} />
				<Footer />
			</main>

			<a href='#' className='back-to-top d-flex align-items-center justify-content-center'>
				<i className='bi bi-arrow-up-short'></i>
			</a>
		</>
	)
}

export default withPublic(Home)
