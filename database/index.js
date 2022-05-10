import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()

const database = process.env.MYSQL_DATABASE,
	username = process.env.MYSQL_USERNAME,
	password = process.env.MYSQL_PASSWORD,
	host = process.env.MYSQL_HOST

const sequelize = new Sequelize(database, username, password, {
	dialect: 'mysql',
	host: host,
	operatorsAliases: false,
	logging: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})

sequelize
	.authenticate()
	.then(() => {
		console.log('Connected...')
	})
	.catch((err) => {
		console.log(`Error is => ${err}`)
	})

sequelize.sync({ force: false }).then(() => {
	console.log('Yes Re-Sync Done..!')
})

export default sequelize
