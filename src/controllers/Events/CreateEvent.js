const { EventsSchema } = require('../../database/models')
const formidable = import('formidable')
const mv = require('mv')

const CreateEvent = async (req, res) => {
	const form = new (await formidable).IncomingForm()

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				message: 'Error while parsing form',
				error: err,
			})
		}
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
				fields.end_date.toString() === 'null' ? null : new Date(fields.end_date.toString()),
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
			banner: fields.image === 'null' ? null : fields.image,
		}

		EventsSchema.create(fields)
			.then((event) => {
				mv(
					files.image[0].filepath,
					`public/images/events/${event.banner}`,
					{
						mkdirp: true,
					},
					(err) => {
						if (err) {
							return res.status(400).json({
								message: 'Error while uploading image',
								error: err,
							})
						}
						return res.status(200).send(event)
					}
				)
			})
			.catch((err) => {
				console.log(err)
				return res.status(400).json({
					message: 'Error while creating event',
					error: err,
				})
			})
	})
}

module.exports = CreateEvent
