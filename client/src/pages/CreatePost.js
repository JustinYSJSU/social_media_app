import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useState } from "react";
import axios from "axios";

export const CreatePost = () =>{

  const onSubmit = (data) =>{
   console.log("START")
   console.log("ACCESS TOKEN" + sessionStorage.getItem("accessToken"))
   axios.post(
    "http://localhost:3001/posts/", 
    data, 
    {
      headers:{
        accessToken: sessionStorage.getItem("accessToken"),
      },
    }
   )
   .then( (response) => {
    if(response.data.error){
      console.log(response.data.error)
    }else{
      console.log("SUCCESS")
    }
   })
}

    return(<div>
     <Formik onSubmit={onSubmit} initialValues={{ title: "", postText: "" }}> 
       <Form>
        <label> Title: </label>
        <Field name="title" placeholder="Post Title..."/>
        <label> Post Text: </label>
        <Field name="postText" placeholder="Post Text..."/>
        <button type="submit"> Post </button>
       </Form>
     </Formik>
    </div>)
 
}