const { StudentsSchema } = require('../../database/models')

const EditUser = async (req, res) => {
	await StudentsSchema.update(req.body, {
		where: {
			id: req.params.id,
		},
	})

	StudentsSchema.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((student) => {
			return res.status(200).send(student)
		})
		.catch((err) => {
			return res.status(400).json({
				message: 'Error while updating student',
				error: err,
			})
		})
}

module.exports = EditUser
