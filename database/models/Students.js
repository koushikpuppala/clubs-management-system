import { DataTypes } from 'sequelize'
import sequelize from '../index'
import { v4 as uuidv4 } from 'uuid'

export const StudentDetails = sequelize.define('student_details', {
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
	roll: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	batch: {
		type: DataTypes.INTEGER,
	},
	coordinator: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	club:{
        type: DataTypes.ENUM,
		values: ['Codesoc','Xposure','Finesse','NSO','NSS','EBSB','Electrogeeks','Finspiration','GDSC'],
	},
	secretary: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	position: {
		type: DataTypes.ENUM,
		values: ['SciTech','Cultural','PR','Gensec1','Gensec2'],
	},
	overall_admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
})