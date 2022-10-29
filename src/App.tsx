import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAuthState } from "./models/reducers/auth";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import MainNavigation from "./components/navigation/MainNavigation";
import AddAsset from "./pages/AddAsset";

import "./App.css";
import InventoryList from "./pages/InventoryList";

interface IAuth {
  authReducer: IAuthState;
}

function App() {
  const isLoggedIn = useSelector(
    (state: IAuth) => state.authReducer.isLoggedIn
  );

  // TODO: get rid of props in the pages later
  //const content = isLoggedIn ? (    return this later
  const content = true ? (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/add">
          <AddAsset />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/inventory">
          <InventoryList />
        </Route>
      </Switch>
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );

  return <div>{content}</div>;
}

export default App;
