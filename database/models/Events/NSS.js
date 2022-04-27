import { DataTypes } from 'sequelize'
import sequelize from '../../index'
import { v4 as uuidv4 } from 'uuid'

export const NSS = sequelize.define('nss_events', {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4,
	},
	club_id: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: 'clubs',
			key: 'id',
		},
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	start_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	reg_end_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	end_date: {
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

	ended: {
		type: DataTypes.BOOLEAN,
	},
})
