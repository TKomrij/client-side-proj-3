import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthService from '../utils/AuthService';

const auth = new AuthService();

const ProtectedRoute = ({component: Component, redirectUrl, path, ...additionalProps}) => {
  
  return ( 
    <Route
      path={path}
      render={(props) => {
        
        if(auth.loggedIn()) {   
          return <Component {...props} {...additionalProps} />
        } else {
          return <Redirect to={{
            pathname: redirectUrl || '/',
            state: {
              from: props.location
            }
          }}
          />
        }
      }}
    />
   );
}
 
export default ProtectedRoute;