module.exports = (sequelize, DataTypes) =>{
    //define fields / columns for your table
    const Comments = sequelize.define("Comments", {
        commentBody:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        timestamp:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
    )
    return Comments;
}