const ClubsAbout = ({ club }) => {
	return (
		<>
			<section id='about' class='about'>
				<div class='container'>
					<div class='section-title'>
						<h2>About</h2>
					</div>
					<div class='row'>
						<div
							class='col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content'
							data-aos='fade-right'>
							<h3>{club.about}</h3>
							<p class='fst-italic'>{club.description}</p>
							{/* <ul>
								<li>
									<i class='bi bi-check-circle'></i> Ullamco laboris nisi ut
									aliquip ex ea commodo consequat.
								</li>
								<li>
									<i class='bi bi-check-circle'></i> Duis aute irure dolor in
									reprehenderit in voluptate velit.
								</li>
								<li>
									<i class='bi bi-check-circle'></i> Ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate trideta storacalaperda mastiro dolore
									eu fugiat nulla pariatur.
								</li>
							</ul>
							<a href='#' class='read-more'>
								Read More <i class='bi bi-long-arrow-right'></i>
							</a> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ClubsAbout
