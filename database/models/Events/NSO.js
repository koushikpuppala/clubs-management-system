import { DataTypes } from 'sequelize'
import sequelize from '../../index'
import { v4 as uuidv4 } from 'uuid'

export const NSO = sequelize.define('nso_events', {
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
	
	end_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	student_reg_no: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	details: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	prize: {
		type: DataTypes.STRING,
	},
	
	
	ended: {
		type: DataTypes.BOOLEAN,
	},
	
})
