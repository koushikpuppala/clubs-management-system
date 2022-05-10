import Header from './Header'

const Loading = () => {
	return (
		<>
			<Header name='Loading...' favicon='loading.gif' />
			<div className='container loading'>
				<div className='yellow loading'></div>
				<div className='red loading'></div>
				<div className='blue loading'></div>
				<div className='violet loading'></div>
			</div>
		</>
	)
}

export default Loading
