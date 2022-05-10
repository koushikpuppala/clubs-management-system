const { ClubsSchema } = require('../../database/models')

const GetAllClubs = async (req, res) => {
	try {
		const clubs = req.query.id
			? await ClubsSchema.findAll({
					where: {
						id: req.query.id,
					},
			  })
			: await ClubsSchema.findAll()
		res.status(200).send(clubs)
	} catch (err) {
		res.status(400).json({
			message: 'Error while finding students',
			error: err,
		})
	}
}

module.exports = GetAllClubs
