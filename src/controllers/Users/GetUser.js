const { StudentsSchema } = require('../../database/models')

const GetAllUsers = async (req, res) => {
	try {
		const students = req.query.id
			? await StudentsSchema.findOne({
					where: {
						id: req.query.id,
					},
			  })
			: await StudentsSchema.findAll()
		res.status(200).send(students)
	} catch (err) {
		res.status(400).json({
			message: 'Error while finding students',
			error: err,
		})
	}
}

module.exports = GetAllUsers
