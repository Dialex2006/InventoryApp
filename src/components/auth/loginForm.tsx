import React, { FormEvent } from "react";

import { Link } from "react-router-dom";

function LoginForm(props: any) {
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
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3"></div>
          </div>
        </form>
      </div>
      <div className="d-grid gap-2 mt-3"></div>
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
