//creating a SQL table. create model and export

module.exports = (sequelize, DataTypes) =>{
    //define fields / columns for your table
    const Users = sequelize.define("Users", {
        username:{
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        password:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    }
    )
    return Users;
}