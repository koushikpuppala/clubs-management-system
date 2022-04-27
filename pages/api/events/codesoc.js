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
		const form = new IncomingForm()
		form.parse(req, async (err, fields, files) => {
			fields = { ...fields, image: `${fields.name.toLowerCase().replace(/\s/g, '-')}.png` }
			fields = {
				club_id: fields.club_id === 'null' ? null : fields.club_id,
				name: fields.name === 'null' ? null : fields.name,
				start_date: fields.start_date === 'null' ? null : new Date(fields.start_date),
				reg_end_date: fields.reg_end_date === 'null' ? null : new Date(fields.reg_end_date),
				end_date: fields.end_date === 'null' ? null : new Date(fields.end_date),
				details: fields.details === 'null' ? null : fields.details,
				prize: fields.prize === 'null' ? null : fields.prize,
				prize_count: fields.prize_count === 'null' ? null : Number(fields.prize_count),
				certificate:
					fields.certificate === 'null'
						? null
						: fields.certificate === 'true'
						? true
						: false,
				image: fields.image === 'null' ? null : fields.image,
			}

			console.log(fields)

			CodeSocEventsSchema.create(fields)
				.then((event) => {
					mv(
						files.image.filepath,
						`/public/images/events/codesoc/${fields.image}`,
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
		await CodeSocEventsSchema.update(req.body, {
			where: {
				id: req.query.id,
			},
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

export default CodeSocEventsAPI
