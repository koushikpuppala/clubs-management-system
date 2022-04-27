import { useEffect } from 'react'
import { NavAction } from '../actions/Navbar'
import { useAuth } from '../context'
import Image from 'next/image'

const Navbar = ({ session, auth }) => {
	const { error, login, logout } = auth
	useEffect(() => {
		NavAction()
	}, [])
	return (
		<>
			<header id='header' className='fixed-top '>
				<div className='container d-flex align-items-center'>
					<h1 className='logo me-auto'>
						<a href='#hero' className='scrollto'>
							Club Management System
						</a>
					</h1>
					{/* <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

					<nav id='navbar' className='navbar'>
						<ul>
							<li>
								<a className='nav-link scrollto active' href='#hero'>
									Home
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#clubs'>
									Clubs
								</a>
							</li>

							{!session ? (
								<a
									className='getstarted'
									style={{ cursor: 'pointer' }}
									onClick={login}>
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
													onClick={logout}>
													{' '}
													&nbsp; &nbsp; Logout
												</a>
											</li>
										</ul>
									</li>
								</>
							)}
						</ul>
						<i className='bi bi-list mobile-nav-toggle'></i>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Navbar
