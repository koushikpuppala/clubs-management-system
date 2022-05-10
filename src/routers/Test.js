const router = require('express').Router()
const formidable = import('formidable')

router.post('/', async (req, res) => {
	const form = new (await formidable).IncomingForm()

	form.parse(req, (err, fields, files) => {
		if (err) {
			res.status(500).json({
				error: err,
			})
		}
		console.log(files)
		console.log(fields)

		return res.send('Hello')
	})
})

module.exports = router
