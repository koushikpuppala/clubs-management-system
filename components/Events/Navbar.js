import { useEffect } from 'react'
import { NavAction } from '../../actions/Navbar'
import Image from 'next/image'

const EventsNavbar = ({ auth, club, session }) => {
	useEffect(() => {
		NavAction()
	}, [])
	return (
		<>
			<header id='header' class='fixed-top'>
				<div class='container d-flex align-items-center justify-content-between'>
					<h1 class='logo me-auto'>
						<a className='scrollto' href='#hero'>
							{club.name}
						</a>
					</h1>
					{/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

					<nav id='navbar' class='navbar'>
						<ul>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a class='nav-link scrollto' href='#about'>
									About
								</a>
							</li>
							<li>
								<a class='nav-link scrollto' href='#events'>
									Events
								</a>
							</li>
							<li>
								<a class='nav-link scrollto' href='#team'>
									Team
								</a>
							</li>
							{!session ? (
								<a
									className='getstarted'
									style={{ cursor: 'pointer' }}
									onClick={auth.login}>
									Sign Up/Sign In
								</a>
							) : (
								<>
									<li
										className='dropdown'
										style={{
											cursor: 'pointer',
											justifyContent: 'center',
											alignItems: 'center',
											display: 'flex',
											flexDirection: 'row',
										}}>
										<span
											className='dropdown-toggle getstarted'
											data-toggle='dropdown'>
											<Image
												src={session.image}
												layout='raw'
												width={'25px'}
												height={'25px'}
												style={{
													borderRadius: '50%',
													marginRight: '10px',
												}}
											/>
											{session.name}
										</span>
										<ul
											style={{
												borderRadius: '10px',
												margin: '5px 15%',
												width: '75%',
												justifyContent: 'center',
												alignItems: 'center',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<li
												style={{
													justifyContent: 'center',
													alignItems: 'center',
													display: 'flex',
													flexDirection: 'column',
												}}>
												<a
													className='bi bi-person-bounding-box'
													onClick={() => {
														window.location.href = '/profile'
													}}>
													{' '}
													&nbsp; &nbsp; Profile
												</a>
											</li>
											<li
												style={{
													cursor: 'pointer',
													justifyContent: 'center',
													alignItems: 'center',
													display: 'flex',
													flexDirection: 'column',
												}}>
												<a
													className='bi bi-box-arrow-left'
													onClick={auth.logout}>
													{' '}
													&nbsp; &nbsp; Logout
												</a>
											</li>
										</ul>
									</li>
								</>
							)}
							{/* <li>
								<a class='getstarted scrollto' href='#about'>
									Get Started
								</a>
							</li> */}
						</ul>
						<i class='bi bi-list mobile-nav-toggle'></i>
					</nav>
					{/* <!-- .navbar --> */}
				</div>
			</header>
		</>
	)
}

export default EventsNavbar
