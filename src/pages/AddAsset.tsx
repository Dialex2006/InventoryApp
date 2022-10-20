import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Components.css";

const AddAsset = (props: any) => {
  console.log("Form page");
  const history = useHistory();
  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);
  const nameRef = React.useRef<HTMLTextAreaElement>(null);
  const serialRef = React.useRef<HTMLTextAreaElement>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);

  const addData = async (route: any) => {
    console.log(route);
    const response = await fetch(
      "https://inventoryapp-6e44e-default-rtdb.europe-west1.firebasedatabase.app/inventory.json",
      {
        method: "POST",
        body: JSON.stringify(route),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    history.push("/");
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    console.log(dateRef.current?.value);
    console.log(serialRef.current?.value);
    console.log(assetTypeRef.current?.value);

    const formData = {
      category: assetTypeRef.current?.value,
      user: employeeRef.current?.value,
      location: locationRef.current?.value,
      name: nameRef.current?.value,
      serial: serialRef.current?.value,
      date: dateRef.current?.value,
    };

    addData(formData);
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
            placeholder="Route number"
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
