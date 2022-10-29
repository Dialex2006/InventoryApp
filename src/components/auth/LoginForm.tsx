import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import React from "react";

import * as authActions from "../../store/actions/authActions";

import "./styles.css";

interface LoginFormProps {
  onCancel?: () => void;
  changeScreen?: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const dispatch = useDispatch();
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [loginMessage, setLoginMessage] = useState("");

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    if (username && username.length > 0 && password && password.length > 0) {
      dispatch(
        authActions.requestLogin(
          usernameRef.current?.value,
          passwordRef.current?.value
        )
      );
    } else {
      setLoginMessage("Fill in username and password");
    }
  };

  return (
    <div className="modal">
      <div>
        <form>
          <div>
            <h3>Sign In</h3>
            <div className="login-fields">
              <label className="labels">Username &nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter username"
                ref={usernameRef}
              />
            </div>
            <div className="login-fields">
              <label className="labels">Password &nbsp;&nbsp;&nbsp;</label>
              <input
                type="password"
                className="input-fields"
                placeholder="Enter password"
                ref={passwordRef}
              />
            </div>
          </div>
          <div className="center-labels"></div>
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
      <div className="created-account-insert">{loginMessage}</div>
      <button onClick={props.onCancel} className="btn btn--alt">
        Cancel
      </button>

      <button onClick={onSubmitForm} type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
