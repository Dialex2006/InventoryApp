import { useState } from "react";
import Modal from "../components/auth/LoginModal";
import Backdrop from "../components/general/Backdrop";
import "../components/Components.css";

const Welcome = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  const logout = () => {
    props.whenLoggedIn(false);
  };

  return (
    <div className="main-align">
      <div className="App">
        <header className="App-header">
          <p>Welcome to Inventory App.</p>
          <span>Currently you're logged in as "Superadmin"</span>
        </header>
      </div>
      <button onClick={logout}>Logout</button>
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

export default Welcome;
