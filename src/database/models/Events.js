const { DataTypes } = require('sequelize')
const sequelize = require('../')

module.exports = sequelize.define('events', {
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
	club_id: {
		type: DataTypes.STRING,
		allowNull: false,
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
	details: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	start_date: {
		type: DataTypes.DATE,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	reg_end_date: {
		type: DataTypes.DATE,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	end_date: {
		type: DataTypes.DATE,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	banner: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	prizes: {
		type: DataTypes.STRING,
	},
	prizes_count: {
		type: DataTypes.INTEGER,
	},
	certificate: {
		type: DataTypes.BOOLEAN,
	},
	certificate_id: {
		type: DataTypes.STRING,
	},
	winner_id: {
		type: DataTypes.STRING,
	},
	ended: {
		type: DataTypes.BOOLEAN,
	},
})
