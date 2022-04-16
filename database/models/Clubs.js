import { DataTypes } from 'sequelize'
import sequelize from '../index'
import { v4 as uuidv4 } from 'uuid'

export const Clubs = sequelize.define('clubs', {
	id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
		defaultValue: uuidv4(),
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	about: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	motto: {
		type: DataTypes.TEXT,
	},
	twitter: {
		type: DataTypes.STRING,
	},
	facebook: {
		type: DataTypes.STRING,
	},
	instagram: {
		type: DataTypes.STRING,
	},
	linkedin: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	youtube: {
		type: DataTypes.STRING,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
