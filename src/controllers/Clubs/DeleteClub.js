const { ClubsSchema } = require('../../database/models')

const DeleteClub = async (req, res) => {
	await ClubsSchema.destroy({
		where: {
			id: req.query.id,
		},
	})
		.then(() => {
			return res.status(200).json({
				message: 'Club deleted successfully',
			})
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while deleting club',
				error: err,
			})
		})
}

module.exports = DeleteClub
