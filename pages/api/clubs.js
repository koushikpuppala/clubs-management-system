import { Clubs } from '../../database/models/Clubs'
import { IncomingForm } from 'formidable'
import mv from 'mv'

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
			fields = { ...fields, image: `${fields.name.toLowerCase().replace(/\s/g, '-')}.png` }
			fields = {
				name: fields.name === 'null' ? null : fields.name,
				coordinators: fields.coordinators === 'null' ? null : fields.coordinators,
				about: fields.about === 'null' ? null : fields.about,
				description: fields.description === 'null' ? null : fields.description,
				motto: fields.motto === 'null' ? null : fields.motto,
				image: fields.image === 'null' ? null : fields.image,
				twitter: fields.twitter === 'null' ? null : fields.twitter,
				facebook: fields.facebook === 'null' ? null : fields.facebook,
				instagram: fields.instagram === 'null' ? null : fields.instagram,
				linkedin: fields.linkedin === 'null' ? null : fields.linkedin,
				email: fields.email === 'null' ? null : fields.email,
				youtube: fields.youtube === 'null' ? null : fields.youtube,
			}

			Clubs.create(fields)
				.then((club) => {
					mv(files.image.filepath, `public/images/clubs/${fields.image}`, (err) => {
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
		await Clubs.update(req.body, {
			where: {
				id: req.query.id,
			},
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

export const config = {
	api: {
		bodyParser: false,
	},
}

export default ClubsAPI
