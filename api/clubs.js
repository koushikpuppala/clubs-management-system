import { Clubs } from '../../database/models/Clubs'
import { IncomingForm } from 'formidable'
import multiparty from 'multiparty'
import mv from 'mv'

export const config = {
	api: {
		bodyParser: false,
	},
}

const ClubsAPI = async (req, res) => {
	if (req.method === 'GET') {
		const clubs = req.query.id
			? await Clubs.findOne({
					where: {
						id: req.query.id,
					},
			  })
			: await Clubs.findAll()
		res.status(200).send(clubs)
	} else if (req.method === 'POST') {
		const form = new IncomingForm()
		form.parse(req, async (err, fields, files) => {
			if (err) {
				console.log(err)
				return res.status(500).send(err.message)
			}

			fields = {
				...fields,
				image: `${fields.name.toString().toLowerCase().replace(/\s/g, '-')}.png`,
			}

			fields = {
				name: fields.name.toString() === 'null' ? null : fields.name.toString(),
				coordinators:
					fields.coordinators.toString() === 'null'
						? null
						: fields.coordinators.toString(),
				about: fields.about.toString() === 'null' ? null : fields.about.toString(),
				description:
					fields.description.toString() === 'null' ? null : fields.description.toString(),
				motto: fields.motto.toString() === 'null' ? null : fields.motto.toString(),
				image: fields.image === 'null' ? null : fields.image,
				twitter: fields.twitter.toString() === 'null' ? null : fields.twitter.toString(),
				facebook: fields.facebook.toString() === 'null' ? null : fields.facebook.toString(),
				instagram:
					fields.instagram.toString() === 'null' ? null : fields.instagram.toString(),
				linkedin: fields.linkedin.toString() === 'null' ? null : fields.linkedin.toString(),
				email: fields.email.toString() === 'null' ? null : fields.email.toString(),
				youtube: fields.youtube.toString() === 'null' ? null : fields.youtube.toString(),
			}

			Clubs.create(fields)
				.then((club) => {
					mv(files.image[0].filepath, `public/images/clubs/${fields.image}`, (err) => {
						if (err) {
							console.log(err)
						}
					})
					return res.status(200).send(club)
				})
				.catch((err) => {
					console.log(err)
					return res.status(500).send(err.message)
				})
		})
	} else if (req.method === 'PUT') {
		const form = new IncomingForm()
		form.parse(req, async (err, fields, files) => {
			if (err) {
				console.log(err)
				return res.status(500).send(err.message)
			}
			console.log(fields)

			await Clubs.update(fields, {
				where: {
					id: req.query.id,
				},
			})
		})
		const club = await Clubs.findOne({
			where: {
				id: req.query.id,
			},
		})
		res.status(200).send(club)
	} else if (req.method === 'DELETE') {
		await Clubs.destroy({
			where: {
				id: req.query.id,
			},
		})
		res.status(200).send(`Data with id - ${req.query.id} got deleted`)
	}
}

export default ClubsAPI
