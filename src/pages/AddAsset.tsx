import { useHistory } from "react-router-dom";

import React from "react";

import * as inventoryActions from "../store/actions/inventoryActions";
import { ISBInventoryAssetItemToAdd } from "../models/api/inventory";

import "../components/Components.css";
import { useDispatch } from "react-redux";

const AddAsset = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const newAsset: ISBInventoryAssetItemToAdd = {
    assetName: "",
    serialNumber: "",
    supplier: "",
  };

  const nameRef = React.useRef<HTMLTextAreaElement>(null);
  const serialRef = React.useRef<HTMLTextAreaElement>(null);
  const supplierRef = React.useRef<HTMLSelectElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    console.log("Serial Number value: ", serialRef.current?.value);

    if (
      nameRef.current?.value !== undefined &&
      serialRef.current?.value !== undefined &&
      supplierRef.current?.value !== undefined
    ) {
      newAsset.assetName = nameRef.current?.value;
      newAsset.serialNumber = serialRef.current?.value;
      newAsset.supplier = supplierRef.current?.value;

      console.log("Asset: ", newAsset);

      dispatch(inventoryActions.requestAddSBAsset(newAsset));
      history.push("/inventory");
    } else {
      console.log("Name: ", nameRef.current?.value);
      console.log("Serial: ", serialRef.current?.value);
      console.log("Supplier: ", supplierRef.current?.value);
      alert("Some inputs can not be empty!");
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div>
          <select className="selection" name="framework" ref={supplierRef}>
            <option value="">Select supplier</option>
            <option value="Atea">Atea</option>
            <option value="Verkkokauppa">Verkkokauppa</option>
            <option value="Dustin">Dustin</option>
          </select>
        </div>
        <div>
          <textarea
            className="textField"
            placeholder="Name"
            id="text"
            ref={nameRef}
          ></textarea>
        </div>
        <div>
          <textarea
            className="textField"
            placeholder="Serial number"
            id="text"
            ref={serialRef}
          ></textarea>
        </div>
        {/* <button
          onClick={() => {
            dispatch(inventoryActions.requestDeleteSBAssetById(5));
          }}
        >
          TEST DELETION BY ID
        </button>
        <button
          onClick={() => {
            dispatch(inventoryActions.requestDeleteSBAssetByNumber("33333333"));
          }}
        >
          TEST DELETION BY SERIAL NUMBER
        </button> */}
        <button className="button">Submit information</button>
      </form>
    </div>
  );
};

export default AddAsset;
