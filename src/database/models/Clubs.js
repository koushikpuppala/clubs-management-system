const { DataTypes } = require('sequelize')
const sequelize = require('../')

module.exports = sequelize.define('clubs', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
		},
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	coordinators: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	about: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	motto: {
		type: DataTypes.STRING,
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
	},
	youtube: {
		type: DataTypes.STRING,
	},
	events_id: {
		type: DataTypes.STRING,
	},
})
