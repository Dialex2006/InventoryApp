import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import MainNavigation from "./components/navigation/MainNavigation";
import AddAsset from "./pages/AddAsset";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const whenLoggedIn = (status: boolean) => {
    setLoggedIn(status);
  };

  // TODO: get rid of props in the pages later
  const content = loggedIn ? (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Welcome whenLoggedIn={whenLoggedIn} />
        </Route>
        <Route path="/add">
          <AddAsset />
        </Route>
        <Route path="/login">
          <Login whenLoggedIn={whenLoggedIn} />
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
