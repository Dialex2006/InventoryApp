import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
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
            <Link to="/form">Add a new item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
