const formidable = import('formidable')
const { EventsSchema } = require('../../database/models')

const EditEvent = async (req, res) => {
	const form = new (await formidable).IncomingForm()

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				message: 'Error while parsing form',
				error: err,
			})
		}

		await EventsSchema.update(fields, {
			where: {
				id: req.params.id,
			},
		})
	})

	EventsSchema.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((event) => {
			return res.status(200).send(event)
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while updating event',
				error: err,
			})
		})
}

module.exports = EditEvent
