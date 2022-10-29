import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import * as inventoryActions from "../../store/actions/inventoryActions";

import "./MainNavigation.css";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const routerLocation = useLocation();
  useEffect(() => {
    if (routerLocation.pathname === "/inventory") {
      dispatch(inventoryActions.requestInventory());
    }
  }, [routerLocation]);

  return (
    <header className="header">
      <h2>Inventory Management App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Main page</Link>
          </li>
          <li>
            <Link to="/inventory">List of inventory</Link>
          </li>
          <li>
            <Link to="/add">Add a new asset</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
