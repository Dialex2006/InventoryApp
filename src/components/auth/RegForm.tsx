import { FormEvent } from "react";
import "./styles.css";

interface RegFormProps {
  whenLoggedIn: (loggedIn: boolean) => void;
  onCancel?: () => void;
  changeScreen?: () => void;
}

function RegForm(props: RegFormProps) {
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
            <h3 className="Auth-form-title">Register a new user</h3>
            <div className="login-fields">
              <label className="labels">
                Create username &nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="email"
                className="input-fields"
                placeholder="Enter username"
              />
            </div>
            <div className="login-fields">
              <label className="labels">
                Create password &nbsp;&nbsp;&nbsp;
              </label>
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
              Switch back to{" "}
              <span className="onText" onClick={props.changeScreen}>
                Signin
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

export default RegForm;
