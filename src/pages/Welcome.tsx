import { useState } from "react";
import Modal from "../features/Modal";
import Backdrop from "../features/Backdrop";
import logo from "../logo.svg";
import "../components/Components.css";

const Welcome = (props: any) => {
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
          <p>Welcome to Inventory App.</p>
          <span>To start using the App, please login</span>
        </header>
      </div>
      <button onClick={showModalHandler}>Login to use the App</button>
      {showModal && (
        <Modal onCancel={cancelModalHandler} onConfirm={cancelModalHandler} />
      )}
      {showModal ? <Backdrop onCancel={cancelModalHandler} /> : null}
    </div>
  );
};

export default Welcome;
