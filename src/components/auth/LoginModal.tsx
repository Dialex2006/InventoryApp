import LoginForm from "./LoginForm";

interface ModalProps {
  whenLoggedIn: (loggedIn: boolean) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Modal = (props: ModalProps) => {
  console.log("In Modal");

  return (
    <div>
      <LoginForm whenLoggedIn={props.whenLoggedIn} />
    </div>
  );
};

export default Modal;
