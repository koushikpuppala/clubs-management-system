import { DataTypes } from 'sequelize'
import sequelize from '../index'

export const Test = sequelize.define('hello', {
	date: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
})
