import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, signInStatus, ...attrs }) => {
  return (
    <Route
      {...attrs}
      render={(props) => {
        if (signInStatus) {
          return <Component {...attrs} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/join",
                state: props.location
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
