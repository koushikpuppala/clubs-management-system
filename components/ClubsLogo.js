import Image from 'next/image'

const Clubslogo = ({ clubs }) => {
	return (
		<>
			{/* <!-- ======= Clients Section ======= --> */}
			<section id='clients' className='clients section-bg'>
				<div className='container'>
					<div className='row'>
						{clubs.map((club) => {
							return (
								<>
									<div
										key={club.id}
										className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
										<Image
											src={`/images/clubs/${club.image}`}
											layout='raw'
											width={500}
											height={700}
											className='img-fluid'
											alt={club.name}
										/>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Clubslogo
