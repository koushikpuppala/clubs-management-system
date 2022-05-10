const { DataTypes } = require('sequelize')
const sequelize = require('../')

module.exports = sequelize.define('merchandises', {
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
	price: {
		type: DataTypes.FLOAT,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	image: {
		type: DataTypes.STRING,
	},
})
