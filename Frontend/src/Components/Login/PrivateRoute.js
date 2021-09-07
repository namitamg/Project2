import React from "react";
import { Redirect, Route } from "react-router-dom";
 
export default function PrivateRoutes({ component: Component, auth, ...rest }) {
    return <Route
        {...rest}
        render={(props) => auth ?
            <Component {...props} />
            : <Redirect to={{ pathname: '/SignIn' , state : {from : props.location} }} />
        }
    />
}