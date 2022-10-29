import { useSelector } from "react-redux";
import { IInventoryState } from "../models/reducers/inventory";

import React from "react";

import "../components/Components.css";

interface IInventory {
  inventoryReducer: IInventoryState;
}

const InventoryList = () => {
  const inventoryItems = useSelector(
    (state: IInventory) => state.inventoryReducer.inventoryItems
  );

  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);

  const res = inventoryItems.map((item, idx) => {
    return (
      <tr key={idx}>
        <td>{item.name}</td>
        <td>{item.serial}</td>
        <td>{item.category}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.location}</td>
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
          <select className="selection" name="framework" ref={assetTypeRef}>
            <option value="">Select asset category</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile device">Mobile device</option>
            <option value="Office equipment">Office equipment</option>
            <option value="Key">Key</option>
            <option value="Software">Software</option>
          </select>{" "}
          <select className="selection" name="framework" ref={locationRef}>
            <option value="">Select office location</option>
            <option value="Tampere">Tampere</option>
            <option value="Helsinki">Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Jyväskylä">Jyväskylä</option>
          </select>{" "}
          <select className="selection" name="framework" ref={employeeRef}>
            <option value="">Select employee name</option>
            <option value="Marko">Marko</option>
            <option value="Roope">Roope</option>
            <option value="Juuso">Juuso</option>
            <option value="Ville">Ville</option>
            <option value="Matti">Matti</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Device name</th>
              <th>Serial</th>
              <th>Type</th>
              <th>User</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
