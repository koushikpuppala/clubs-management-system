import { Clubs } from '../../database/models/Clubs'

const ClubsAPI = async (req, res) => {
	const data = {
		name: 'Club Name',
		about: 'Club About',
		description: 'Club Description',
		motto: 'Club Motto',
		twitter: 'Club Twitter',
		facebook: 'Club Facebook',
		instagram: 'Club Instagram',
		linkedin: 'Club Linkedin',
		email: 'Club Email',
		youtube: 'Club Youtube',
		image: 'Club Image',
	}
	const club = await Clubs.create(data)
	res.status(200).send(club)
}

export default ClubsAPI
