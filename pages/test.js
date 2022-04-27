const Test = () => {
	return (
		<div>
			<h1>Test</h1>
			<p>This is a test page</p>
			<div class='form-group col-lg-3'>
				<label class='label-control' for='id_start_datetime'>
					Datetime picker
				</label>
				<div id='id_start_datetime' class='input-group date'>
					<input
						type='datetime-local'
						class='form-control'
						placeholder='MM/DD/YYYY hh:mm:ss'
						required
					/>
				</div>
			</div>
		</div>
	)
}

export default Test
