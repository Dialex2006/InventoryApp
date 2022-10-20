import LoginForm from "./auth/loginForm";

const Modal = (props: any) => {
  console.log("In Modal");

  return (
    <div>
      <LoginForm whenLoggedIn={props.whenLoggedIn} />
    </div>
  );
};

export default Modal;
