import { DataTypes } from 'sequelize'
import sequelize from '../../index'
import { v4 as uuidv4 } from 'uuid'

export const NSSEvent = sequelize.define('NSS_events', {
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
	hours: {
		type: DataTypes.FLOAT,
        allowNull: false,
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
