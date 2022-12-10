import { useSelector } from "react-redux";
import { useState } from "react";
import { IAuthState } from "../models/reducers/auth";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/authActions";

import React from "react";

import "../components/Components.css";

interface IAuth {
  authReducer: IAuthState;
}

const UsersList = () => {
  const dispatch = useDispatch();
  dispatch(authActions.queryAllUsers());

  console.log("UsersList page");
  const nameRef = React.useRef<HTMLTextAreaElement>(null);

  const allUsers = useSelector((state: IAuth) => state.authReducer.allUsers);
  console.log("All Users array: ", allUsers);

  const assetTypeRef = React.useRef<HTMLSelectElement>(null);
  const locationRef = React.useRef<HTMLSelectElement>(null);
  const employeeRef = React.useRef<HTMLSelectElement>(null);

  const res = allUsers.map((user, idx) => {
    console.log("Users: ", user);
    return (
      <tr key={idx}>
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
              className="textForm"
              placeholder="Name"
              id="text"
              ref={nameRef}
            ></textarea>
          </span>

          <button className="reset-button">Add a user</button>
        </div>
        <table>
          <thead>
            <tr>
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
