import Head from 'next/head'

const Header = (props) => {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta content='width=device-width, initial-scale=1.0' name='viewport' />

			<title>{props.name}</title>
			<meta content='' name='description' />
			<meta content='' name='keywords' />

			{/* <!-- Favicons --> */}
			<link href={`/images/logo/${props.favicon}`} rel='icon' />
			<link href={`/images/logo/${props.favicon}`} rel='apple-touch-icon' />
		</Head>
	)
}

export default Header
