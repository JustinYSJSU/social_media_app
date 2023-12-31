import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import myImage from "../images/1700336904867.png"

export const Post = () => {
   const {id} = useParams()
   const [postObject, setPostObject] = useState({})
   const [commentsObject, setCommentsObject] = useState([])
   const [commentText, setCommentText] = useState()
   const [image, setImage] = useState()

   useEffect(() => {
    //diplaying all posts. access API from the backend. uses the GET from backend
    axios.get(`http://localhost:3001/posts/byID/${id}`).then((response) => {
    setPostObject(response.data)
    if(response.data.imagePath){
      const path = response.data.imagePath
      const indexOfI = path.indexOf("images")
      const pathSlash = path.substring(indexOfI).replace(/\\/g, "/")
      console.log(pathSlash)
      console.log(myImage)
      
    }
})
}, [])

   useEffect(() => {
    //diplaying all posts. access API from the backend. uses the GET from backend
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
    setCommentsObject(response.data)
   })
}, [])

   const addComment = () =>{
      axios.post("http://localhost:3001/comments", {
         commentBody: commentText, 
         PostId: id,
      }, {
         headers:{
           accessToken: sessionStorage.getItem("accessToken"),
         },
       }).then( (res) => {
         const commentToAdd = {
            commentBody: commentText, 
            username: res.data.username, 
            timestamp: res.data.timestamp
         }
         setCommentsObject([...commentsObject, commentToAdd])
      })
   }

   return(
   <div> 
     {postObject.title}
     {postObject.postText}
     {postObject.username}
     {postObject.timestamp}
     <div> Comments</div> 
     {commentsObject.map( (value, key) => {
      return( 
      <div> 
         {value.commentBody}
         {value.username}
         {value.timestamp}
      </div>)
     })}
     <div> 
      <input type="text" placeholder="Comment Here" autoComplete="off" onChange={(event) => {setCommentText(event.target.value)}}/>
      <button onClick={addComment}> Add Comment </button>
     </div>
   </div>
   )
}