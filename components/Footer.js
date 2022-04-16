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
				{/* <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}

				<div class='footer-top'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-3 col-md-6 footer-contact'>
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

							<div class='col-lg-3 col-md-6 footer-links'>
								<h4>Our Social Networks</h4>
								<div class='social-links mt-3'>
									<a href='https://twitter.com/IIITRaichur' class='twitter'>
										<i class='bx bxl-twitter'></i>
									</a>
									<a href='https://www.facebook.com/iiitraichur' class='facebook'>
										<i class='bx bxl-facebook'></i>
									</a>
									<a
										href='https://www.instagram.com/iiit_raichur/'
										class='instagram'>
										<i class='bx bxl-instagram'></i>
									</a>
									<a
										href='https://www.youtube.com/channel/UC6aCBD8hLAJzg7V50CEcX3g'
										class='youtube'>
										<i class='bx bxl-youtube'></i>
									</a>
									<a
										href='https://www.linkedin.com/showcase/indian-institute-of-information-technology-raichur/'
										class='linkedin'>
										<i class='bx bxl-linkedin'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='container footer-bottom clearfix'>
					{/* <div class="copyright">
                        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                    </div> */}
					<div class='credits'>
						{/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
						{/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
					</div>
				</div>
			</footer>
			{/* <!-- End Footer --> */}
		</>
	)
}
export default Footer
