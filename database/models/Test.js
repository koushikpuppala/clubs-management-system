import { DataTypes } from 'sequelize'
import sequelize from '../index'

export const Test = sequelize.define('test', {
	date: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
})
