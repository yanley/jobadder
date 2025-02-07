const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

//Sequelize will create this table if it doesn't exist on startup
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    lastName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    emailId: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    password: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    seniority: {
        type: DataTypes.STRING, allowNull: true // Add new optional field for seniority
    },
    specialty: {
        type: DataTypes.STRING, allowNull: true // Add new optional field for specialty
    }
}, 
{
    sequelize: sequelizeInstance, modelName: 'users',
    timestamps: true, freezeTableName: true
});

module.exports = User;