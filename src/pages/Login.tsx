import { useState } from "react";

import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  // // TODO: use this value to show that we're logging in (e.g., gif/progress bar/simple text)
  //   const isLoginLoading = useSelector(
  //     (state: ILoading) => state.loadingReducer.isLoginLoading
  //   );
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
        <Modal onCancel={cancelModalHandler} onConfirm={cancelModalHandler} />
      )}
      {showModal ? <Backdrop onCancel={cancelModalHandler} /> : null}
    </div>
  );
};

export default Login;
