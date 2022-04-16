// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow, Pagination])

const Clubslogo = () => {
	return (
		<>
			{/* <!-- ======= Clients Section ======= --> */}
			<section id='clients' className='clients section-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/codesoc-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/xposure-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/finesse-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/nso-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/nss-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='assets/img/clients/ebsb-inverted.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>
						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='/images/logo/gdsc.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>
						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='/images/logo/electrogeeks.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>
						<div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
							<img
								src='/images/logo/finspiration.png'
								width='200px'
								className='img-fluid'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Clubslogo
