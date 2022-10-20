import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import "./App.css";
import MainNavigation from "./features/MainNavigation";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const whenLoggedIn = (status: boolean) => {
    setLoggedIn(status);
  };

  const content = loggedIn ? (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/">
          <Welcome whenLoggedIn={whenLoggedIn} />
        </Route>
        <Route path="/form"></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  ) : (
    <div>
      <Login whenLoggedIn={whenLoggedIn} />
    </div>
  );

  return <div>{content}</div>;
}

export default App;
