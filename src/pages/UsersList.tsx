import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IAuthState } from "../models/reducers/auth";
import * as authActions from "../store/actions/authActions";
import { ISBUser } from "../models/api/auth";
import { ISBInventoryAssetItem } from "../models/api/inventory";

import React from "react";

import "../components/Components.css";
import { addUserAsync } from "../store/sagas/authSaga";

interface IAuth {
  authReducer: IAuthState;
}

const UsersList = () => {
  //const dispatch = useDispatch();
  //dispatch(authActions.queryAllUsers());

  const dispatch = useDispatch();

  console.log("UsersList page");
  const nameRef = React.useRef<HTMLTextAreaElement>(null);

  const allUsers = useSelector((state: IAuth) => state.authReducer.allUsers);
  console.log("All Users array: ", allUsers);

  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);

  const addUser = () => {
    const name = nameRef.current?.value;
    if (name === undefined || name.length === 0) {
      alert("Name must not be empty!");
    } else {
      dispatch(authActions.requestAddUser(name));
    }
  };

  const res = allUsers.map((user, idx) => {
    console.log("Users: ", user);
    return (
      <tr key={idx}>
        <td>{user.userId}</td>
        <td>{user.name}</td>
        <td>{user.status}</td>
        <td>{user.location}</td>
        <td>{user.email}</td>
        <td>{user.startDate}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="App">
        <header className="Inv-header">
          <h2>Users List</h2>
        </header>
        <div>
          <span className="simple-text">Add a new user &nbsp;&nbsp;&nbsp;</span>
          <span>
            <textarea
              className="inputUser"
              placeholder="Name"
              id="text"
              ref={nameRef}
            ></textarea>
          </span>
          <button className="reset-button" onClick={addUser}>
            Add a user
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Status</th>
              <th>Location</th>
              <th>Email</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
