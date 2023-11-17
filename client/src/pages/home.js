import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        //diplaying all posts. access API from the backend. uses the GET from backend
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data)
    })
    }, [])

    return (
        
        <div>
        HELLO
        {listOfPosts.map((value, key) => {
         return(
            <div>
                {value.title}
                {value.username}
                {value.postText}
                {value.timestamp}
                <button onClick={ () => navigate(`/post/${value.id}`)}> View Post </button>
            </div>
        )
        })}
        </div>
        
    )
}