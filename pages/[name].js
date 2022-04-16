import { useRouter } from 'next/router'
import { ClubsData } from '../data/clubs'

const Clubspage = (props) => {
	const router = useRouter()
	// const { name } = router.query
	return <>{props.club.name}</>
}

export async function getStaticProps({ params }) {
	const club = ClubsData.map((club) =>
		club.name.toLowerCase() === params.name ? club : null
	).filter((club) => club !== null)[0]
	return {
		props: {
			club,
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: ClubsData.map((club) => ({
			params: {
				name: club.name.toLowerCase(),
			},
		})),
		fallback: false,
	}
}

export default Clubspage
