import { DataTypes } from 'sequelize'
import sequelize from '../../index'
import { v4 as uuidv4 } from 'uuid'

export const ElectrogeeksEvent = sequelize.define('electrogeeks_events', {
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
	date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	details: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	prize_1: {
		type: DataTypes.STRING,
	},
	prize_2: {
		type: DataTypes.STRING,
	},
	prize_3: {
		type: DataTypes.STRING,
	},
	certificate: {
		type: DataTypes.BOOLEAN,
	},
	ended: {
		type: DataTypes.BOOLEAN,
	},
	certificate_count: {
		type: DataTypes.INTEGER,
	},
})
