import { useEffect } from 'react'
import { FooterAction } from '../actions/Footer'

const Footer = () => {
	useEffect(() => {
		FooterAction()
	}, [])
	return (
		<>
			{/* <!-- ======= Footer ======= --> */}
			<footer id='footer'>
				{/* <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}

				<div className='footer-top'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-6 footer-contact'>
								<h3>IIIT Raichur</h3>
								<p>
									Indian Institute of Information Technology <br />
									Raichur
									<br />
									<br />
									<strong>Phone:</strong>
									<br /> 9492993737
									<br /> 9490375566 <br />
									<strong>Email:</strong>
									<br /> cs20b1015@iiitr.ac.in
									<br /> cs20b1022@iiitr.ac.in <br />
								</p>
							</div>

							<div className='col-lg-3 col-md-6 footer-links'>
								<h4>Our Social Networks</h4>
								<div className='social-links mt-3'>
									<a href='https://twitter.com/IIITRaichur' className='twitter'>
										<i className='bx bxl-twitter'></i>
									</a>
									<a
										href='https://www.facebook.com/iiitraichur'
										className='facebook'>
										<i className='bx bxl-facebook'></i>
									</a>
									<a
										href='https://www.instagram.com/iiit_raichur/'
										className='instagram'>
										<i className='bx bxl-instagram'></i>
									</a>
									<a
										href='https://www.youtube.com/channel/UC6aCBD8hLAJzg7V50CEcX3g'
										className='youtube'>
										<i className='bx bxl-youtube'></i>
									</a>
									<a
										href='https://www.linkedin.com/showcase/indian-institute-of-information-technology-raichur/'
										className='linkedin'>
										<i className='bx bxl-linkedin'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container footer-bottom clearfix'>
					{/* <div className="copyright">
                        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                    </div> */}
					<div className='credits'>
						{/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
						{/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
					</div>
				</div>
			</footer>
		</>
	)
}
export default Footer
