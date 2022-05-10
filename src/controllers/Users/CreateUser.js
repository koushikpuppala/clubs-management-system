const { StudentsSchema } = require('../../database/models')
const formidable = import('formidable')

const CreateUser = async (req, res) => {
	const form = new (await formidable).IncomingForm()

	form.parse(req, async (err, fields, files) => {
		if (err) {
			res.status(500).json({
				message: 'Error parsing form',
				error: err,
			})
		}

		console.log(fields)

		if (fields.email) {
			const student = await StudentsSchema.findOne({
				where: {
					email: fields.email,
				},
			})

			if (student) {
				res.status(200).send(student)
			} else {
				const newStudent = await StudentsSchema.create(fields)
				res.status(200).send(newStudent)
			}
		}
	})
}

module.exports = CreateUser
