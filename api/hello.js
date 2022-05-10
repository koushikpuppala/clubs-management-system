// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { json } from 'body-parser'
import { IncomingForm } from 'formidable'
import { uploadFile } from '../config/Drive'
import { TestSchema } from '../database/models'

export const config = {
	api: {
		bodyParser: false,
	},
}
export default async function handler(req, res) {
	if (req.method === 'POST') {
		const form = new IncomingForm()

		form.parse(req, async (err, fields, files) => {
			if (err) {
				return res.status(400).json({
					message: 'Error while parsing form',
					error: err,
				})
			}
			// console.log(files)
			// console.log(fields)
			const filePath = files.image[0].filepath
			const fileName = fields.name.toString().toLowerCase()
			const user = JSON.parse(fields.user)
			console.log(user)

			const fileId = await uploadFile(user, filePath, fileName)
			return res.status(200).json({
				message: 'File uploaded successfully',
				data: fileId,
			})
		})
	} else {
		return res.status(200).json({
			message: 'Hello world',
		})
	}
}
