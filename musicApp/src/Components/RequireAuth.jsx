import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';


// check if the user is authenticated
// if yes , redirect / navigate to the page/ component that he/ she was trying to access
// else navigate to the login page
const RequireAuth = ( { children}) => {
    const location = useLocation();
  const auth = useSelector((state) => state.AuthReducer.isAuth);
   if(!auth){
         return <Navigate to="/login"  state={{from: location}} replace/>
   }

  return children;
  
}

export default RequireAuth