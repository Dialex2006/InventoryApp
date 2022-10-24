import { FormEvent, useState } from "react";
import React from "react";
import "./styles.css";
import ApiConfig from "../../config/api-config";

interface RegFormProps {
  whenLoggedIn: (loggedIn: boolean) => void;
  onCancel?: () => void;
  changeScreen?: () => void;
}

function RegForm(props: RegFormProps) {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [afterCreating, setAfterCreating] = useState("");

  // TODO: use redux instead of plain call here
  const addData = async (route: any) => {
    console.log(route);
    const response = await fetch(
      `${ApiConfig.BASE_URL}/authenticationData.json`,
      {
        method: "POST",
        body: JSON.stringify(route),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  function onSubmit(e: FormEvent): void {
    e.preventDefault();

    console.log(usernameRef.current?.value);
    console.log(passwordRef.current?.value);

    const formData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    addData(formData);
    setAfterCreating("User account has been created! You can sign in now");
  }

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
}

export default RegForm;
