import { FormEvent } from "react";
import "./styles.css";

interface LoginFormProps {
  whenLoggedIn: (loggedIn: boolean) => void;
  onCancel?: () => void;
  changeScreen?: () => void;
}

function LoginForm(props: LoginFormProps) {
  function onSubmit(e: FormEvent): void {
    e.preventDefault();
  }

  const onSubmitForm = () => {
    props.whenLoggedIn(true);
  };

  return (
    <div className="modal">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="login-fields">
              <label className="labels">Username &nbsp;&nbsp;&nbsp;</label>
              <input
                type="email"
                className="input-fields"
                placeholder="Enter username"
              />
            </div>
            <div className="login-fields">
              <label className="labels">Password &nbsp;&nbsp;&nbsp;</label>
              <input
                type="password"
                className="input-fields"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3"></div>
          </div>

          <div className="center-labels">
            <label className="">
              Don't have an account yet?{" "}
              <span className="onText" onClick={props.changeScreen}>
                Register here
              </span>
            </label>
          </div>
        </form>
      </div>
      <div className="login-fields"></div>
      <button onClick={props.onCancel} className="btn btn--alt">
        Cancel
      </button>

      <button onClick={onSubmitForm} type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default LoginForm;