const express = require('express') //instance of express framework
const app = express() //initialize app (api request, start server, etc)
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models') //go over every file in models

//Routers (required)
const postRouter = require('./routes/Posts') 
app.use("/posts", postRouter) //allows requests to be made to /posts

const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter)

const commentsRouter = require('./routes/Comments')
app.use("/comments", commentsRouter)

//when you start server, go over tables and check if they exist in db. 
//If not, create the table
db.sequelize.sync().then(() => {
    //listen on port, run anon function whenver server starts
    app.listen(3001, () => {
        console.log("SERVER RUNNING PORT 3001")
    })
})



