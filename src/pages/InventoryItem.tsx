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
  console.log("Selected item: ", assetsItems);

  const userRef = React.useRef<HTMLSelectElement>(null);
  const [user, setUser] = useState("unknown");

  const res = assetsItems.map((item, idx) => {
    console.log("Inventory page");
    console.log(assetsItems);

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
      <div key={idx}>
        <div>{item.itemName}</div>
        <div>{item.serialNumber}</div>
        <div>{item.supplier}</div>
        <div>{item.purchaseDate}</div>
        <div>{item.ownerId}</div>
        <select value={user} ref={userRef} onClick={assignAsset}>
          {allUsers.map(({ name }, index) => (
            <option value={name}>{name}</option>
          ))}
        </select>

        <button className="reset-button"> Assign to user</button>
        <form method="post" action="/tryquest">
          <input type="hidden" id="hero" name="heroName" />
          <input type="hidden" id="quest" name="questName" />
          <button type="submit">Try Quest</button>
        </form>
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
