const { DataTypes } = require('sequelize')
const sequelize = require('../')

module.exports = sequelize.define('students', {
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
	roll: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	email: {
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
	batch: {
		type: DataTypes.STRING,
	},
	coordinator: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	club: {
		type: DataTypes.STRING,
	},
	secretary: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	position: {
		type: DataTypes.STRING,
	},
	overall_admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	bio: {
		type: DataTypes.STRING,
	},
	instagram: {
		type: DataTypes.STRING,
	},
	linkedin: {
		type: DataTypes.STRING,
	},
	github: {
		type: DataTypes.STRING,
	},
	twitter: {
		type: DataTypes.STRING,
	},
	facebook: {
		type: DataTypes.STRING,
	},
	phone: {
		type: DataTypes.STRING,
	},
	website: {
		type: DataTypes.STRING,
	},
	events_id: {
		type: DataTypes.STRING,
	},
	certificates_id: {
		type: DataTypes.STRING,
	},
})
