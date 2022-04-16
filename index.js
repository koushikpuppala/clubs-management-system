const sql = require('mysql2')

const connect = sql.createConnection({
	host: 'localhost',
	user: 'koushikpuppala',
	password: 'Koushik@200323',
	database: 'clubs_management_system',
})

connect.connect((err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected...')
	}
})
