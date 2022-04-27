import { DataTypes } from 'sequelize'
import sequelize from '../index'

export const Students = sequelize.define('student_details', {
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
	roll: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
	},
	batch: {
		type: DataTypes.INTEGER,
	},
	coordinator: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	club: {
		type: DataTypes.ENUM,
		values: [
			'Codesoc',
			'Xposure',
			'Finesse',
			'NSO',
			'NSS',
			'EBSB',
			'Electrogeeks',
			'Finspiration',
			'GDSC',
		],
	},
	secretary: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	position: {
		type: DataTypes.ENUM,
		values: ['SciTech', 'Cultural', 'PR', 'Gensec1', 'Gensec2'],
	},
	overall_admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	bio: {
		type: DataTypes.STRING,
	},
	instagram: {
		type: DataTypes.STRING,
	},
	linkedin: {
		type: DataTypes.STRING,
	},
	facebook: {
		type: DataTypes.STRING,
	},
	twitter: {
		type: DataTypes.STRING,
	},
	phone: {
		type: DataTypes.STRING,
	},
	github: {
		type: DataTypes.STRING,
	},
	website: {
		type: DataTypes.STRING,
	},
})
