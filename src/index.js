require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = Number(process.env.PORT),
	host = process.env.HOST
const cors = require('cors')

app.use(
	cors({
		origin: '*',
		credentials: true,
	})
)

app.route('/').get((req, res) => {
	res.status(200).send('This is the root of the API')
})

app.use('/clubs', require('./routers/Clubs'))
app.use('/events', require('./routers/Events'))
app.use('/students', require('./routers/Users'))
app.use('/test', require('./routers/Test'))

app.listen(port, host, () => {
	console.log(`Server running on ${host}:${port}`)
})
