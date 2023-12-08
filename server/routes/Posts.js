
//routes related to posts
const express = require('express') //for routing 
const router = express.Router()
const {Posts} = require('../models') //instance of Post mods
const {validateToken} = require('../middlewares/AuthMiddleware')
const upload = require('../middlewares/UploadMiddleware')
//posts router

//return elements from table. gets posts to display. HTTP GET
router.get("/", async (req, res) =>{
   const listOfPosts = await Posts.findAll() //gets all posts
   res.json(listOfPosts)
});

//insert into database. HTTP POST
router.post("/", upload.single("image"), async (req, res) =>{
 const post = req.body 
 post.title = req.body.title
 post.postText = req.body.postText
 post.username = "user"
 post.timestamp = Date(Date.now).toLocaleString()
 if(req.file){
  console.log(req.file.path)
  post.imagePath = req.file.path
 }
 await Posts.create(post)
})

router.get("/byID/:id", async (req, res) =>{
  const id = req.params.id //get id from URL
  const post = await Posts.findByPk(id) //find post by primary key id
  res.json(post)
})

module.exports = router