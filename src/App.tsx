import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Welcome from "./pages/Welcome";
import "./App.css";
import MainNavigation from "./features/MainNavigation";

function App() {
  let loggedIn = true;

  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/ exact">
          <Welcome />
        </Route>
        <Route path="/form"></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
