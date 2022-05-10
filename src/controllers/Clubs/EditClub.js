const formidable = import('formidable')
const { ClubsSchema } = require('../../database/models')

const EditClub = async (req, res) => {
	const form = new (await formidable).IncomingForm()

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				message: 'Error while parsing form',
				error: err,
			})
		}
		await ClubsSchema.update(fields, {
			where: {
				id: req.query.id,
			},
		})
	})

	ClubsSchema.findOne({
		where: {
			id: req.query.id,
		},
	})
		.then((club) => {
			return res.status(200).send(club)
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while updating club',
				error: err,
			})
		})
}

module.exports = EditClub
