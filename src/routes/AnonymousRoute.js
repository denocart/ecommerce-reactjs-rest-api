import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";


const AnonymousRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="*" component={NotFound} />

       
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AnonymousRoute;