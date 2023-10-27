//routes related to posts
const express = require('express') //for routing 
const router = express.Router()
const {Users} = require('../models') //instance of User mods
const bcrypt = require("bcrypt")

//user router

//user registration
router.post("/", async (req, res) =>{
   const {username, password} = req.body;
   //hash the password + salt rounds. take hash result and store 
   await bcrypt.hash(password, 10).then((hash) => {
   Users.create({
        username: username, 
        password: hash,
    })
    res.json("USER REGISTERED")
   }) 
});

//user login
router.post("/login", async(req, res) =>{
  const {username, password} = req.body
  //does this user exist? find the user who has the same username
  const user = await Users.findOne({where: {username: username}})

  //does not exist
  if(!user){
    res.json("USER DOES NOT EXIST")
  }

  //does exist, compare inputted password to the "password" hash
  //in the MySQL database for this user
  bcrypt.compare(password, user.password).then( (match) => {
    if(!match){
      res.json("WRONG PASSWORD")
    }
   res.json("LOGGED IN")
  })
})
module.exports = router