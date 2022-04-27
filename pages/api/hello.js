// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Test } from '../../database/models/Test'

export default async function handler(req, res) {
	const DateNow =
		new Date().getFullYear() +
		'-' +
		(new Date().getMonth() + 1 > 10 ? '' : '0') +
		(new Date().getMonth() + 1) +
		'-' +
		new Date().getDate() +
		'T' +
		new Date().getHours() +
		':' +
		new Date().getMinutes()
	const test = await Test.findAll()
	res.status(200).send(test)
}
