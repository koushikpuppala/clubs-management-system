import sequelize from '../../index'
import { DataTypes } from 'sequelize'

export const Finesse = sequelize.define('finesse_certificates', {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4,
	},
	event_id: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: 'finesse_events',
			key: 'id',
		},
	},
	certificate: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
