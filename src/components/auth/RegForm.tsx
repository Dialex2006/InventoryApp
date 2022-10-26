import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import React from "react";

import * as authActions from "../../store/actions/authActions";

import "./styles.css";

interface RegFormProps {
  onCancel?: () => void;
  changeScreen?: () => void;
}

const RegForm = (props: RegFormProps) => {
  const dispatch = useDispatch();

  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [afterCreating, setAfterCreating] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      usernameRef.current?.value !== undefined &&
      passwordRef.current?.value !== undefined
    ) {
      dispatch(
        authActions.requestRegistration(
          usernameRef.current?.value,
          passwordRef.current?.value
        )
      );
      // Not a good way, but works of course. Better to
      // 1) have a notification fired in saga as soon as registration call completes successfully
      // 2) or use isJustRegistered value in the store
      setAfterCreating("User account has been created! You can sign in now");
    }
  };

  return (
    <div className="modal">
      <div>
        <form>
          <div>
            <h3>Register a new user</h3>
            <div className="login-fields">
              <label className="labels">
                Create username &nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter username"
                ref={usernameRef}
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
                ref={passwordRef}
              />
            </div>
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
      <div className="created-account-insert">{afterCreating}</div>
      <button onClick={props.onCancel} className="btn btn--alt">
        Cancel
      </button>

      <button onClick={onSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default RegForm;
