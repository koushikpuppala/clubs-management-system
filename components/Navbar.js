import { login } from '../config/Auth'
import { useEffect } from 'react'
import { NavAction } from '../actions/Navbar'

const Navbar = () => {
	useEffect(() => {
		NavAction()
	}, [])
	return (
		<>
			<header id='header' className='fixed-top '>
				<div className='container d-flex align-items-center'>
					<h1 className='logo me-auto'>
						<a href='index.html'>Club Management System</a>
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
							{/* <li>
								<a className='nav-link scrollto' href='#about'>
									About
								</a>
							</li> */}
							<li>
								<a className='nav-link scrollto' href='#clubs'>
									Clubs
								</a>
							</li>

							{/* <li>
								<a className='nav-link scrollto' href='#contact'>
									Contact
								</a>
							</li> */}
							<li>
								<a
									className='getstarted'
									style={{ cursor: 'pointer' }}
									onClick={login}>
									Sign Up/Sign In
								</a>
							</li>
						</ul>
						<i className='bi bi-list mobile-nav-toggle'></i>
					</nav>
					{/* <!-- .navbar --> */}
				</div>
			</header>
			{/* <!-- End Header --> */}
		</>
	)
}

export default Navbar
