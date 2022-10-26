import { useState } from "react";

import LoginForm from "./LoginForm";
import RegForm from "./RegForm";

interface ModalProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Modal = (props: ModalProps) => {
  const [switchToRegistration, setSwitchToRegistration] = useState(false);

  const changeToRegistration = () => {
    setSwitchToRegistration(true);
  };

  const changeToSignIn = () => {
    setSwitchToRegistration(false);
  };

  const content = switchToRegistration ? (
    <RegForm onCancel={props.onCancel} changeScreen={changeToSignIn} />
  ) : (
    <LoginForm onCancel={props.onCancel} changeScreen={changeToRegistration} />
  );

  return <div>{content}</div>;
};

export default Modal;
