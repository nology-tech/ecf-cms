import React from 'react';
import "./Home.scss";
import LoginContainer from '../../Container/LoginContainer/LoginContainer';


import { useState } from "react";



const Home = () => {
  const [hasError, setHasError] = useState (false);

  const [info, setInfo] = useState({
    emailAddress: "",
    password: "",
  })

  const handleLogin = event => {
    

    event.preventDefault();
    let emailAddress = event.target[0].value;
    let password = event.target[1].value;

    setHasError(true)

    if(!emailAddress.includes("@")) {
      {hasError && alert("Please input valid email address.")}
      
    } 
    else if (emailAddress.includes("&") || emailAddress.includes("*") || emailAddress.includes(",") || emailAddress.includes("/")) {
      {hasError && alert("Email address should not contain & * , / ")}
    
    }
    else if(password.length <= 8) {
     {hasError && alert("The password length should be longer than 8.")}
  
    } 
    else if(emailAddress.includes("@") && password.length < 8) {
     {hasError && alert("The password length should be longer than 8.")}
     
    }
    else {
      alert("Welcome!")
      setInfo({emailAddress, password})
    }
  }

  
  return (
    <div className='home'>
      
      <LoginContainer emailAddress = {info.emailAddress} password = {info.password} handleLogin = {handleLogin}/>
     
    </div>
  )
}

export default Home

