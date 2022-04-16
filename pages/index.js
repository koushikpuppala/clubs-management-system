import Script from 'next/script'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Clubslogo from '../components/ClubsLogo'
import Clubs from '../components/Clubs'
import Footer from '../components/Footer'

const Home = () => {
	const hello = 'hello'
	return (
		<>
			<Header />
			<Navbar />
			<section id='hero' className='d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'
							data-aos='fade-up'
							data-aos-delay='200'>
							<h1>Clubs of IIITR</h1>

							<div className='d-flex justify-content-center justify-content-lg-start'></div>
						</div>
						<div
							className='col-lg-6 order-1 order-lg-2 hero-img'
							data-aos='zoom-in'
							data-aos-delay='200'>
						<img src='assets/img/hero-img.png' className='img-fluid animated' alt=''/>
						</div>
					</div>
				</div>
			</section>

			<main id='main'>
				<Clubslogo />
				{/* <section id='about' className='about'>
					<div className='container' data-aos='fade-up'>
						<div className='section-title'>
							<h2>About Us</h2>
						</div>

						<div className='row content'>
							<div className='col-lg-6  pt-4 pt-lg-0'>
								<ul>
									<li>
										<i className='ri-check-double-line'></i>Codesoc: The Coding
										Club{' '}
									</li>
									<li>
										<i className='ri-check-double-line'></i>Xposure: The
										Photography Club{' '}
									</li>
									<li>
										<i className='ri-check-double-line'></i>Finesse: The
										Cultural Club{' '}
									</li>
								</ul>
							</div>
							<div className='col-lg-6 pt-4 pt-lg-0'>
								<ul>
									<li>
										<i className='ri-check-double-line'></i>NSO: National Sports
										Organisation{' '}
									</li>
									<li>
										<i className='ri-check-double-line'></i>NSS: National
										Service Scheme{' '}
									</li>
									<li>
										<i className='ri-check-double-line'></i>EBSB: Ek Bharat
										Sreshta Bharat{' '}
									</li>
								</ul>

								<a href='#services' className='btn-learn-more'>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</section> */}
				<Clubs />
				<Footer />
			</main>

			<div id='preloader'></div>
			<a href='#' className='back-to-top d-flex align-items-center justify-content-center'>
				<i className='bi bi-arrow-up-short'></i>
			</a>
		</>
	)
}

export default Home
