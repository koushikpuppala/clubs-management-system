const ClubsEvent = ({ events }) => {
	return (
		<>
			<section id='events' class='about'>
				<div class='container'>
					<div class='section-title'>
						<h2>Events</h2>
					</div>
					<div class='row'>
						{events.map((event) => (
							<div
								class='col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content'
								data-aos='fade-right'
								key={event.id}>
								<h3>{event.name}</h3>
								<p>{event.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default ClubsEvent
