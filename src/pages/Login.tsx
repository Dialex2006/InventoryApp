import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as loginActions from "../store/actions/loginActions";
import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";
import { ILoadingState } from "../models/reducers/loading";

interface ILoading {
  loadingReducer: ILoadingState;
}

// TODO: get rid of props in the pages later
interface LoginProps {
  whenLoggedIn: (loggedIn: boolean) => void;
}

const Login = (props: LoginProps) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const isLoginLoading = useSelector(
    (state: ILoading) => state.loadingReducer.isLoginLoading
  );

  console.log(`isLoginLoading status:${isLoginLoading}`);
  const onLogin = () => dispatch(loginActions.requestLogin("someuser", "pass"));

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
          <button onClick={onLogin}>TEST</button>
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
