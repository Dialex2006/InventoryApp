import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IInventoryState } from "../models/reducers/inventory";
import * as inventoryActions from "../store/actions/inventoryActions";

import React from "react";

import "../components/Components.css";

interface IInventory {
  inventoryReducer: IInventoryState;
}

const InventoryItem = () => {
  const assetsItems = useSelector(
    (state: IInventory) => state.inventoryReducer.sbAssets
  );
  console.log("Selected item: ", assetsItems);

  const res = assetsItems.map((item, idx) => {
    console.log("Inventory page");
    console.log(assetsItems);

    return (
      <div key={idx}>
        <div>{item.itemName}</div>
        <div>{item.serialNumber}</div>
        <div>{item.supplier}</div>
        <div>{item.purchaseDate}</div>
        <div>{item.ownerId}</div>
        <div>{item.itemName}</div>
        <div>{item.itemName}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="App">
        <header className="Inv-header">
          <h2>Specific Inventory Item</h2>
        </header>
        <div>{res}</div>
      </div>
    </div>
  );
};

export default InventoryItem;
