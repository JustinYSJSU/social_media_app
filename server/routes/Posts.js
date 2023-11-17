
//routes related to posts
const express = require('express') //for routing 
const router = express.Router()
const {Posts} = require('../models') //instance of Post mods
const {validateToken} = require('../middlewares/AuthMiddleware')

//posts router

//return elements from table. gets posts to display. HTTP GET
router.get("/", async (req, res) =>{
   const listOfPosts = await Posts.findAll() //gets all posts
   res.json(listOfPosts)
});

//insert into database. HTTP POST
router.post("/", validateToken, async (req, res) =>{
  console.log("posting")
  //receieve json data from frontend form (title, username, text)
  const post = req.body //contains all sent data from frontend. access w/post.title, etc
  const username = req.user.username
  post.username = username
  post.timestamp = Date(Date.now).toLocaleString()
  await Posts.create(post) //add post into the database. must match Posts table types/names
})

router.get("/byID/:id", async (req, res) =>{
  const id = req.params.id //get id from URL
  const post = await Posts.findByPk(id) //find post by primary key id
  res.json(post)
})

module.exports = router