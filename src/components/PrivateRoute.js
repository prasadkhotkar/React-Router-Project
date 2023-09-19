import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({isLoggedIn,Children}) {
  
    if(isLoggedIn)
    {
        return Children;
    }
    else{
        return <Navigate to="/login" />
    }
  
}

export default PrivateRoute
