import React from "react";

export const CreatePost = () =>{
   return(
   <form method="POST" action="http://localhost:3001/posts/" encType="multipart/form-data">
    <label> Post Title </label>
    <input type="text" name="title" />
    <label> Post Text </label>
    <input type="text" name="postText"/>
    <label> Image </label>
    <input type="file" name="image" />
    <input type="submit"/>
   </form>
   )
}  
