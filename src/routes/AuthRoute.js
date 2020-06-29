import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../pages/NotFound";

import Dashboard  from "../pages/Dashboard";
import Logout from "../pages/Logout";


const AuthRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/logout" component={Logout} />

       
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AuthRoute;