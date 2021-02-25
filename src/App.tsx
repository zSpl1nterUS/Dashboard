import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { guilds } from "./utils/mocks";

function App() {
  return (
    <div>
      <Sidebar guilds={guilds} />
      <Switch>
        <Redirect path="/" exact={true} to="/dasboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
