import { DataTypes, UUIDV4 } from 'sequelize'
import sequelize from '../index'
import { v4 as uuidv4 } from 'uuid'

export const Merchandise = sequelize.define('merchandise', {
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    price: {
        type: DataTypes.FLOAT,
    },
	image: {
		type: DataTypes.STRING,
	}
})