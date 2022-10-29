import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAuthState } from "../models/reducers/auth";

import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";

import * as authActions from "../store/actions/authActions";

import "../components/Components.css";

interface IAuth {
  authReducer: IAuthState;
}

const Welcome = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const username = useSelector((state: IAuth) => state.authReducer.username);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const logout = () => {
    dispatch(authActions.logOut());
  };

  return (
    <div className="main-align">
      <div className="App">
        <header className="App-header">
          <p>Welcome to Inventory App</p>
          <span>
            Currently you're logged in as <b>{username}</b>
          </span>
        </header>
      </div>
      <button onClick={logout} className="btn btn-primary">
        Logout
      </button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={cancelModalHandler} />
      )}
      {showModal ? <Backdrop onCancel={cancelModalHandler} /> : null}
    </div>
  );
};

export default Welcome;
