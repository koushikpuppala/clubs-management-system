import { Html, Head, Main, NextScript } from 'next/document'

export const Document = () => {
	return (
		<Html>
			<Head>
				{/* <!-- Google Fonts --> */}
				<link
					href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
					crossOrigin='anonymous'></script>
			</body>
		</Html>
	)
}

export default Document
