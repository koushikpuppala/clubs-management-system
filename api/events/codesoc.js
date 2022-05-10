import { CodeSocEventsSchema } from '../../../database/models'
import { IncomingForm } from 'formidable'
import mv from 'mv'

const CodeSocEventsAPI = async (req, res) => {
	if (req.method === 'GET') {
		const events = req.query.id
			? await CodeSocEventsSchema.findOne({
					where: {
						id: req.query.id,
					},
			  })
			: await CodeSocEventsSchema.findAll()
		res.status(200).send(events)
	} else if (req.method === 'POST') {
		console.log('first')
		const form = new IncomingForm()
		form.parse(req, (err, fields, files) => {
			console.log(fields)
			fields = {
				...fields,
				image: `${fields.name.toString().toLowerCase().replace(/\s/g, '-')}.png`,
			}
			fields = {
				club_id: fields.club_id.toString() === 'null' ? null : fields.club_id.toString(),
				name: fields.name.toString() === 'null' ? null : fields.name.toString(),
				start_date:
					fields.start_date.toString() === 'null'
						? null
						: new Date(fields.start_date.toString()),
				reg_end_date:
					fields.reg_end_date.toString() === 'null'
						? null
						: new Date(fields.reg_end_date.toString()),
				end_date:
					fields.end_date.toString() === 'null'
						? null
						: new Date(fields.end_date.toString()),
				details: fields.details.toString() === 'null' ? null : fields.details.toString(),
				prize: fields.prize.toString() === 'null' ? null : fields.prize.toString(),
				prize_count:
					fields.prize_count.toString() === 'null'
						? null
						: Number(fields.prize_count.toString()),
				certificate:
					fields.certificate.toString() === 'null'
						? null
						: fields.certificate.toString() === 'true'
						? true
						: false,
				image: fields.image === 'null' ? null : fields.image,
			}

			console.log(fields)

			CodeSocEventsSchema.create(fields)
				.then((event) => {
					mv(
						files.image[0].filepath,
						`public/images/events/codesoc/${fields.image}`,
						{
							mkdirp: true,
						},
						(err) => {
							if (err) {
								console.log(err)
							}
						}
					)
					return res.status(200).send(event)
				})
				.catch((err) => {
					console.log(err)
					return res.status(500).send(err.message)
				})
		})
	} else if (req.method === 'PUT') {
		const form = new IncomingForm()
		form.parse(req, async (err, fields, files) => {
			await CodeSocEventsSchema.update(req.body, {
				where: {
					id: req.query.id,
				},
			})
		})
		const event = await CodeSocEventsSchema.findOne({
			where: {
				id: req.query.id,
			},
		})

		res.status(200).send(event)
	} else if (req.method === 'DELETE') {
		await CodeSocEventsSchema.destroy({
			where: {
				id: req.query.id,
			},
		})
		res.status(200).send('Event deleted')
	}
}

export const config = {
	api: {
		bodyParser: false,
	},
}

export default CodeSocEventsAPI
