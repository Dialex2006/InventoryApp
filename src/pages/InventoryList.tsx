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
  const supplierRef = React.useRef<HTMLSelectElement>(null);
  const [supplier, setCategory] = useState("unknown");

  const changeCategory = () => {
    setCategory(supplierRef.current?.value || "unknown");
  };

  const resetFilters = () => {
    setCategory("unknown");
  };

  console.log(assetsItems.map);

  const res = assetsItems.map((item, idx) => {
    console.log("Inventory page");
    console.log(assetsItems);
    if (supplier === item.supplier || supplier === "unknown")
      return (
        <tr key={idx}>
          <td>
            <a href={"assets/number/"}>{item.itemName}</a>
          </td>
          <td>{item.serialNumber}</td>
          <td>{item.supplier}</td>
          <td>{item.purchaseDate}</td>
          <td>{item.ownerId}</td>
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
            ref={supplierRef}
            onChange={changeCategory}
            value={supplier}
          >
            <option value="unknown">Select Supplier</option>
            <option value="Atea">Atea</option>
            <option value="Verkkokauppa">Verkkokauppa</option>
            <option value="Dustin">Dustin</option>
            <option value="Gigantti">Gigantti</option>
          </select>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="reset-button" onClick={resetFilters}>
            {" "}
            Reset the filter
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
            </tr>
          </thead>
          <tbody>{res}</tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
