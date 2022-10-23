import LoginForm from "./LoginForm";
import RegForm from "./RegForm";
import { useState } from "react";

interface ModalProps {
  whenLoggedIn: (loggedIn: boolean) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Modal = (props: ModalProps) => {
  const [switchToRegistration, setSwitchToRegistration] = useState(false);

  const changeToRegistration = () => {
    setSwitchToRegistration(true);
  };

  const changeToSignin = () => {
    setSwitchToRegistration(false);
  };

  const content = switchToRegistration ? (
    <RegForm
      onCancel={props.onCancel}
      whenLoggedIn={props.whenLoggedIn}
      changeScreen={changeToSignin}
    />
  ) : (
    <LoginForm
      onCancel={props.onCancel}
      whenLoggedIn={props.whenLoggedIn}
      changeScreen={changeToRegistration}
    />
  );

  return <div>{content}</div>;
};

export default Modal;
