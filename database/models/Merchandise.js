import { DataTypes } from 'sequelize'
import sequelize from '../index'
import { v4 as uuidv4 } from 'uuid'

export const Merchandise = sequelize.define('merchandise', {
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
    price: {
        type: DataTypes.FLOAT,
    },
	image: {
		type: DataTypes.STRING,
	}
})