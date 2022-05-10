const { EventsSchema } = require('../../database/models')

const DeleteEvent = async (req, res) => {
	await EventsSchema.destroy({
		where: {
			id: req.query.id,
		},
	})
		.then(() => {
			return res.status(200).json({
				message: 'Event deleted successfully',
			})
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while deleting event',
				error: err,
			})
		})
}

module.exports = DeleteEvent
