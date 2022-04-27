import sequelize from '../../index'
import { DataTypes } from 'sequelize'

export const CodeSoc = sequelize.define('codesoc_certificates', {
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
			model: 'codesoc_events',
			key: 'id',
		},
	},
	certificate: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
