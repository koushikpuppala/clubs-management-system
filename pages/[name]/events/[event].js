import axios from 'axios'
import { withPublic } from '../../../context'
import { useEffect, useState } from 'react'

const ClubsData = async () => {
	const result = await axios.get('http://localhost:8080/clubs')
	return result.data
}

const EventsData = async () => {
	const result = await axios.get(`http://localhost:8080/events`)
	return result.data
}

const DeleteEvent = async (id) => {
	axios.delete(`http://localhost:8080/events?id=${id}`).then(() => {
		alert('Event Deleted')
		window.location.href = '../events'
	})
}

const ClubsEventsPage = ({ club, events }) => {
	return (
		<>
			{events ? events.name : 'Hello'} -{' '}
			<button
				onClick={() => {
					DeleteEvent(events.id)
				}}>
				Delete Event
			</button>
		</>
	)
}

export async function getStaticProps({ params }) {
	const Clubdata = await ClubsData()
	const Eventsdata = await EventsData()
	const club = Clubdata.find((club) => club.name.toLowerCase() === params.name)

	const events = Eventsdata.find(
		(event) => event.name.toLowerCase().replace(/\s/g, '-') === params.event
	)

	return {
		props: { club, events },
	}
}

export async function getStaticPaths() {
	const Clubdata = await ClubsData()
	const Eventsdata = await EventsData()

	const final = []

	Clubdata.map((club) => {
		Eventsdata.map((event) => {
			if (club.id === event.club_id) {
				final.push({
					params: {
						name: club.name.toLowerCase(),
						event: event.name.toLowerCase().replace(/\s/g, '-'),
					},
				})
			}
		})
	})

	console.log(final)

	return {
		paths: final,
		fallback: false,
	}
}

export default withPublic(ClubsEventsPage)
