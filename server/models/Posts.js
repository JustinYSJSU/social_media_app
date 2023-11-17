//creating a SQL table. create model and export

module.exports = (sequelize, DataTypes) =>{
    //define fields / columns for your table
    const Posts = sequelize.define("Posts", {
        title:{
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        postText:{
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
    //"each post has many comments"
    //"cascade" => delete post delete all associated comments
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }
    return Posts;
}