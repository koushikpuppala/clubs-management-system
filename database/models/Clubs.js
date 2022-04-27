import { DataTypes } from 'sequelize'
import sequelize from '../index'

export const Clubs = sequelize.define('clubs', {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	coordinators: {
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
		defaultValue: null,
	},
	twitter: {
		type: DataTypes.STRING,
		defaultValue: null,
	},
	facebook: {
		type: DataTypes.STRING,
		defaultValue: null,
	},
	instagram: {
		type: DataTypes.STRING,
		defaultValue: null,
	},
	linkedin: {
		type: DataTypes.STRING,
		defaultValue: null,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	youtube: {
		type: DataTypes.STRING,
		defaultValue: null,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
