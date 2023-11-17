//routes related to posts
const express = require('express') //for routing 
const router = express.Router()
const {Comments} = require('../models') //instance of Post mods
const {validateToken} = require('../middlewares/AuthMiddleware')

//get comments from a specific post
router.get("/:PostId", async (req, res) =>{
    const id = req.params.PostId //get id from URL
    const comments = await Comments.findAll({
        where: {
            PostId: id
        }
    }) //find list of all comments by foreign key PostID
    res.json(comments)
  })

router.post("/", validateToken, async(req, res) => {
    console.log("Commenting")
    const comment = req.body
    const username = req.user.username
    comment.username = username
    comment.timestamp = Date(Date.now).toLocaleString()
    await Comments.create(comment) //add post into the database. must match Posts table types/names
    res.json(comment)
})

module.exports = router