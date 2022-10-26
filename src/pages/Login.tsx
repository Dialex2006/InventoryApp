import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ILoadingState } from "../models/reducers/loading";

import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";

import * as authActions from "../store/actions/authActions";

interface ILoading {
  loadingReducer: ILoadingState;
}

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // TODO: use this value to show that we're logging in (e.g., gif/progress bar/simple text)
  const isLoginLoading = useSelector(
    (state: ILoading) => state.loadingReducer.isLoginLoading
  );

  const onLogin = () => dispatch(authActions.requestLogin("someuser", "pass"));

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
        <Modal onCancel={cancelModalHandler} onConfirm={cancelModalHandler} />
      )}
      {showModal ? <Backdrop onCancel={cancelModalHandler} /> : null}
    </div>
  );
};

export default Login;
