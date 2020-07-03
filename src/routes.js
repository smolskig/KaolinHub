import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import VerifyToken from "./pages/VerifyToken";
import Dashboard from "./pages/Dashboard";
import DashboardDriver from "./pages/DashboardDriver";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/verify-token" component={VerifyToken} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboardDriver" component={DashboardDriver} />
      </Switch>
    </BrowserRouter>
  );
}
