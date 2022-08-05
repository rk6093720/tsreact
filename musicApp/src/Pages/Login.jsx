import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';

const Login = () => {
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  // console.log(location);
  // console.log(comingFrom);
  const handleSubmit=(e)=> {
   e.preventDefault();
   if( email && password){
    dispatch(  login ({ email, password}))
      .then((r) => {
        console.log(r);
        if(r.type == USER_LOGIN_SUCCESS)
        {
          navigate(comingFrom, { replace:true})
        }
      });
   }
  // if (email && password) {
  //   dispatch(login({ email, password })).then((r) => {
  //     navigate(comingFrom, { replace: true });
  //   });
  // }
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
         <div>
          <label>UserName</label>
          <input type="text" 
          placeholder='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
         </div>
         <div>
          <label>Password</label>
          <input type="password" 
          placeholder='password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
         </div>

         <button type='submit'>{ isLoading ? "LOADING" : "LOGIN"}</button>
      </form>
    </div>
  )
}

export default Login