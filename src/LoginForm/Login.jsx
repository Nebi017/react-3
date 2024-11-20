import { useState } from "react";
import React from 'react'
import "./Login.css";

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      handleLogin(username, password); 
    };
  
    return (
      <form onSubmit={onSubmit}>
       <h2>Log in</h2>
       <div>
          <label htmlFor="inpt">User Name :</label>
          <input
          className="inpt"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
       </div>
        <div>
          <label htmlFor="inpt2">Password :</label>
          <input
          className="inpt2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };
  export default Login;
  