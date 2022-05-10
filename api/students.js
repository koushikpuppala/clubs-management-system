import { Students as StudentSchema } from '../../database/models/Students'

const StudentsAPI = async (req, res) => {
	if (req.method === 'GET') {
		const students = req.query.email
			? await StudentSchema.findOne({
					where: {
						email: req.query.email,
					},
			  })
			: await StudentSchema.findAll()
		res.status(200).send(students)
	} else if (req.method === 'POST') {
		if (req.body.email) {
			const student = await StudentSchema.findOne({
				where: {
					email: req.body.email,
				},
			})
			if (student) {
				res.status(200).send(student)
			} else {
				const newStudent = await StudentSchema.create(req.body)
				res.status(200).send(newStudent)
			}
		}
	} else if (req.method === 'PUT') {
		
		StudentSchema.update(req.body, {
			where: {
				id: req.query.id,
			},
		})
		const student = await StudentSchema.findOne({
			where: {
				id: req.query.id,
			},
		})
		res.status(200).send(student)
	} else if (req.method === 'DELETE') {
		const students = await StudentSchema.destroy({
			where: {
				email: req.query.email,
			},
		})
		res.status(200).send(students)
	}
}

export default StudentsAPI
