const { ClubsSchema } = require('../../database/models')
const formidable = import('formidable')
const mv = require('mv')

const CreateClub = async (req, res) => {
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
			name: fields.name.toString() === 'null' ? null : fields.name.toString(),
			coordinators:
				fields.coordinators.toString() === 'null' ? null : fields.coordinators.toString(),
			about: fields.about.toString() === 'null' ? null : fields.about.toString(),
			description:
				fields.description.toString() === 'null' ? null : fields.description.toString(),
			motto: fields.motto.toString() === 'null' ? null : fields.motto.toString(),
			image: fields.image === 'null' ? null : fields.image,
			twitter: fields.twitter.toString() === 'null' ? null : fields.twitter.toString(),
			facebook: fields.facebook.toString() === 'null' ? null : fields.facebook.toString(),
			instagram: fields.instagram.toString() === 'null' ? null : fields.instagram.toString(),
			linkedin: fields.linkedin.toString() === 'null' ? null : fields.linkedin.toString(),
			email: fields.email.toString() === 'null' ? null : fields.email.toString(),
			youtube: fields.youtube.toString() === 'null' ? null : fields.youtube.toString(),
		}

		ClubsSchema.create(fields)
			.then((club) => {
				mv(
					files.image[0].filepath,
					`public/images/clubs/${club.image}`,
					{
						mkdirp: true,
					},
					(err) => {
						if (err) {
							return res.status(400).json({
								message: 'Error while moving file',
								error: err,
							})
						}
					}
				)
				return res.status(200).send(club)
			})
			.catch((err) => {
				return res.status(400).json({
					message: 'Error while creating club',
					error: err,
				})
			})
	})
}

module.exports = CreateClub
