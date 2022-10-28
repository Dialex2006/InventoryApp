import { useHistory } from "react-router-dom";

import React from "react";

import * as inventoryActions from "../store/actions/inventoryActions";

import "../components/Components.css";
import { useDispatch } from "react-redux";

const AddAsset = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);
  const nameRef = React.useRef<HTMLTextAreaElement>(null);
  const serialRef = React.useRef<HTMLTextAreaElement>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    console.log(dateRef.current?.value);
    console.log(serialRef.current?.value);
    console.log(assetTypeRef.current?.value);

    const category = assetTypeRef.current?.value;
    const user = employeeRef.current?.value;
    const location = locationRef.current?.value;
    const name = nameRef.current?.value;
    const serial = serialRef.current?.value;
    const date = dateRef.current?.value;
    const fallbackDate = new Date();

    if (category === undefined) {
      alert("Category must not be empty!");
    } else {
      dispatch(
        inventoryActions.requestAddAsset({
          category: category,
          user: user ?? `unknown`,
          location: location ?? `unknown`,
          name: name ?? `unknown`,
          serial: serial ?? `unknown`,
          date:
            date ??
            `${fallbackDate.getFullYear}-${String(
              fallbackDate.getMonth() + 1
            ).padStart(2, "0")}-${String(fallbackDate.getDate()).padStart(
              2,
              "0"
            )}`,
        })
      );
      history.push("/");
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div>
          <select className="selection" name="framework" ref={assetTypeRef}>
            <option value="">Select asset category</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile device">Mobile device</option>
            <option value="Office equipment">Office equipment</option>
            <option value="Key">Key</option>
            <option value="Software">Software</option>
          </select>
        </div>
        <div>
          <select className="selection" name="framework" ref={locationRef}>
            <option value="">Select office location</option>
            <option value="Tampere">Tampere</option>
            <option value="Helsinki">Helsinki</option>
            <option value="Turku">Turku</option>
            <option value="Jyväskylä">Jyväskylä</option>
          </select>
        </div>
        <div>
          <select className="selection" name="framework" ref={employeeRef}>
            <option value="">Select employee name</option>
            <option value="Marko">Marko</option>
            <option value="Roope">Roope</option>
            <option value="Juuso">Juuso</option>
            <option value="Ville">Ville</option>
            <option value="Matti">Matti</option>
          </select>
        </div>
        <div>
          <select className="selection" name="framework" ref={employeeRef}>
            <option value="">Select status</option>
            <option value="In use">In use</option>
            <option value="Inactive">Inactive</option>
            <option value="Needs repair">Needs repair</option>
            <option value="Lost">Lost</option>
            <option value="Reserved">Reserved</option>
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
        <div>
          <input
            className="textField"
            placeholder="Date"
            type="date"
            id="date"
            ref={dateRef}
          ></input>
        </div>

        <button className="button">Submit information</button>
      </form>
    </div>
  );
};

export default AddAsset;
