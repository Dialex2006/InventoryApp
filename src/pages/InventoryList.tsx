import { useSelector } from "react-redux";
import { useState } from "react";
import { IInventoryState } from "../models/reducers/inventory";

import React from "react";

import "../components/Components.css";

interface IInventory {
  inventoryReducer: IInventoryState;
}

const InventoryList = () => {
  const assetsItems = useSelector(
    (state: IInventory) => state.inventoryReducer.sbAssets
  );
  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);
  const [category, setCategory] = useState("unknown");
  const [location, setLocation] = useState("unknown");
  const [employee, setEmployee] = useState("unknown");

  const changeCategory = () => {
    setCategory(assetTypeRef.current?.value || "unknown");
  };
  const changeLocation = () => {
    setLocation(locationRef.current?.value || "unknown");
  };
  const changeEmployee = () => {
    setEmployee(employeeRef.current?.value || "unknown");
  };

  const resetFilters = () => {
    setCategory("unknown");
    setLocation("unknown");
    setEmployee("unknown");
  };

  console.log(assetsItems.map);

  const res = assetsItems.map((item, idx) => {
    console.log("Inventory page");
    console.log(assetsItems);
    if (
      (category === item.itemName || category === "unknown") &&
      (location === item.itemName || location === "unknown") &&
      (employee === item.itemName || employee === "unknown")
    )
      return (
        <tr key={idx}>
          <td>
            <a href={"assets/number/"}>{item.itemName}</a>
          </td>
          <td>{item.serialNumber}</td>
          <td>{item.supplier}</td>
          <td>{item.purchaseDate}</td>
          <td>{item.ownerId}</td>
          <td>{item.itemName}</td>
          <td>{item.itemName}</td>
        </tr>
      );
  });

  return (
    <div>
      <div className="App">
        <header className="Inv-header">
          <h2>Inventory List</h2>
        </header>
        <div>
          <span className="simple-text">Filters &nbsp;&nbsp;&nbsp;</span>
          <select
            className="selection"
            name="framework"
            ref={assetTypeRef}
            onChange={changeCategory}
            value={category}
          >
            <option value="unknown">Select asset category</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile device">Mobile device</option>
            <option value="Office equipment">Office equipment</option>
            <option value="Key">Key</option>
            <option value="Software">Software</option>
          </select>{" "}
          <select
            className="selection"
            name="framework"
            ref={locationRef}
            onChange={changeLocation}
            value={location}
          >
            <option value="unknown">Select office location</option>
            <option value="Tampere">Tampere</option>
            <option value="Helsinki">Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Jyväskylä">Jyväskylä</option>
          </select>{" "}
          <select
            className="selection"
            name="framework"
            ref={employeeRef}
            onChange={changeEmployee}
            value={employee}
          >
            <option value="unknown">Select employee name</option>
            <option value="Marko">Marko</option>
            <option value="Roope">Roope</option>
            <option value="Juuso">Juuso</option>
            <option value="Ville">Ville</option>
            <option value="Matti">Matti</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="reset-button" onClick={resetFilters}>
            {" "}
            Reset all filters
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Device name</th>
              <th>Serial</th>
              <th>Supplier</th>
              <th>Date of purchase</th>
              <th>Owner</th>
              <th>N/A</th>
              <th>N/A</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
