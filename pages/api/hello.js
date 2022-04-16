// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Test } from '../../database/models/Test'

export default async function handler(req, res) {
	const test = await Test.findOne({
		where: {
			id: 1,
		},
	})
	const test1 = test.name ? test.name.split(',').map((item) => item.trim()) : []
	test1[test1.length] = 'test'
	await Test.update(
		{
			name: test1.join(', '),
		},
		{
			where: {
				id: 1,
			},
		}
	)
	res.status(200).send(test)
}
