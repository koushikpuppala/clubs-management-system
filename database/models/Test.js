import { DataTypes } from 'sequelize'
import sequelize from '../index'

export const Test = sequelize.define('test', {
	name: {
		type: DataTypes.STRING,
	},
	roles: {
		type: DataTypes.ENUM,
		values: ['admin', 'user'],
	},
})
