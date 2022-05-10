const { StudentsSchema } = require('../../database/models')

const DeleteUser = async (req, res) => {
	StudentsSchema.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then(() => {
			return res.status(200).json({
				message: 'User deleted successfully',
			})
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while deleting user',
				error: err,
			})
		})
}

module.exports = DeleteUser
