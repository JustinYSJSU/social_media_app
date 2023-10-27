//routes related to posts
const express = require('express') //for routing 
const router = express.Router()
const {Posts} = require('../models') //instance of Post mods
//posts router

//return elements from table. gets posts to display. HTTP GET
router.get("/", async (req, res) =>{
   const listOfPosts = await Posts.findAll() //gets all posts
   res.json(listOfPosts)
});

//insert into database. HTTP POST
router.post("/", async (req, res) =>{
  //receieve json data from frontend form (title, username, text)
  const post = req.body //contains all sent data from frontend. access w/post.title, etc
  await Posts.create(post) //add post into the database. must match Posts table types/names
  res.json(post) //debugging
})

module.exports = router