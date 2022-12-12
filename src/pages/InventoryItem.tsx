import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IInventoryState } from "../models/reducers/inventory";
import * as inventoryActions from "../store/actions/inventoryActions";
import { IAuthState } from "../models/reducers/auth";

import React from "react";

import "../components/Components.css";

interface IInventory {
  inventoryReducer: IInventoryState;
}

interface IAuth {
  authReducer: IAuthState;
}

const InventoryItem = () => {
  const dispatch = useDispatch();
  const assetsItems = useSelector(
    (state: IInventory) => state.inventoryReducer.sbAssets
  );

  const selectedItem = useSelector(
    (state: IInventory) => state.inventoryReducer.selectedAssets
  );

  const allUsers = useSelector((state: IAuth) => state.authReducer.allUsers);
  console.log("Selected item: ", selectedItem);

  const userRef = React.useRef<HTMLSelectElement>(null);
  const [user, setUser] = useState("unknown");

  const assignAsset = (id: any) => {
    const user = userRef.current?.value;
    //Define UserID and assign to selectedItem indicating its ID
    if (user === undefined || user.length === 0) {
      alert("Name must not be empty!");
    } else {
      console.log("USER: ", user);
      dispatch(inventoryActions.requestAssignSBAssetToUser(user, id));
    }
  };

  const res = assetsItems.map((item, idx) => {
    return (
      <div key={idx}>
        <div className="items">Item: {item.itemName}</div>
        <div>Serial Number: {item.serialNumber}</div>
        <div>Supplier: {item.supplier}</div>
        <select ref={userRef} placeholder="Select user">
          {allUsers.map(({ name }, index) => (
            <option value={name}>{name}</option>
          ))}
        </select>
        <form action="/assign">
          <input type="hidden" id="serial" name={item.serialNumber} />
          <button className="reset-button" onClick={() => assignAsset(item.id)}>
            {" "}
            Assign to user
          </button>
        </form>
      </div>
    );
  });

  return (
    <div>
      <div className="App">
        <header className="Inv-header">
          <h2>Assign Inventory Items to Users</h2>
        </header>
        <div>{res}</div>
      </div>
    </div>
  );
};

export default InventoryItem;
