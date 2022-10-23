import React from "react";
import { useState } from "react";
import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";

// TODO: get rid of props in the pages later
interface LoginProps {
  whenLoggedIn: (loggedIn: boolean) => void;
}

const Login = (props: LoginProps) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="main-align">
      <div className="App">
        <header className="App-header">
          <p>Welcome to Inventory App</p>
          <span>To start using the App, please login</span>
        </header>
      </div>
      <button onClick={showModalHandler} className="btn btn-primary">
        Login to use the App
      </button>
      {showModal && (
        <Modal
          whenLoggedIn={props.whenLoggedIn}
          onCancel={cancelModalHandler}
          onConfirm={cancelModalHandler}
        />
      )}
      {showModal ? <Backdrop onCancel={cancelModalHandler} /> : null}
    </div>
  );
};

export default Login;
