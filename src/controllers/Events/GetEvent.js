const { EventsSchema } = require('../../database/models')

const GetAllEvents = async (req, res) => {
	try {
		const events = req.query.id
			? req.query.clubId
				? await EventsSchema.findAll({
						where: {
							club_id: req.query.clubId,
						},
				  })
				: await EventsSchema.findAll({
						where: {
							id: req.query.id,
						},
				  })
			: await EventsSchema.findAll()
		res.status(200).send(events)
	} catch (err) {
		res.status(400).json({
			message: 'Error while finding events',
			error: err,
		})
	}
}

module.exports = GetAllEvents
