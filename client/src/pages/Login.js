import React, { useState } from "react";
import axios from "axios";

export const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const login = () => {
      const data = { username: username, password: password };
      axios.post("http://localhost:3001/auth/login", data).then((response) => {
        if(response.data.error){
          alert(response.data.error) //errors in login?
        } 
        else{
          sessionStorage.setItem("accessToken", response.data) //storing token in sessionStorage
          console.log()
        }
      });
    };
    
    return(
        <div>
             <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login </button>
        </div>
    )
}