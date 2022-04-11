import { DataTypes } from 'sequelize'
import { sequelize } from '../index'

const Clubs = sequelize.define('clubs', {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Coordinators: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Website: {
        type: DataTypes.STRING
    },
    Motto: {
        type: DataTypes.TEXT

    }
})

export default Clubs