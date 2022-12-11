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

  const res = assetsItems.map((item, idx) => {
    return (
      <div key={idx}>
        <div>{item.itemName}</div>
        <div>{item.serialNumber}</div>
        <div>{item.supplier}</div>
        <div>{item.purchaseDate}</div>
        <div>{item.ownerId}</div>
      </div>
    );
  });

  const assignAsset = () => {
    const user = userRef.current?.value;
    //Define UserID and assign to selectedItem indicating its ID
    //requestAssignSBAssetToUser
    if (user === undefined || user.length == 0) {
      alert("Name must not be empty!");
    } else {
      dispatch(
        inventoryActions.requestAssignSBAssetToUser(user, selectedItem[0].id)
      );
    }
  };

  return (
    <div>
      <div className="App">
        <header className="Inv-header">
          <h2>Specific Inventory Item</h2>
        </header>
        <div>{res}</div>
        <select value={user} ref={userRef} onClick={assignAsset}>
          {allUsers.map(({ name }, index) => (
            <option value={name}>{name}</option>
          ))}
        </select>

        <button className="reset-button"> Assign to user</button>
      </div>
    </div>
  );
};

export default InventoryItem;
