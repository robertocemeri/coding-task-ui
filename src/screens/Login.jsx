import React, { useState } from "react";
import { loginUser } from "../api";
import appStorage from "../common/helpers/appStorage";
import { UI_HOME_URL } from "../config";
const Storage = appStorage();

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const submitData = () => {
    loginUser(loginForm).then((res) => {
      if (res.statusCode !== 200)
        setError(res.message ? res.message : res.error);
      else {
        Storage.setToken(res.access_token);
        Storage.setUser(res.user);
        window.location.replace(UI_HOME_URL);
      }
    });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  onChange={(value) =>
                    setLoginForm({ ...loginForm, email: value.target.value })
                  }
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  onChange={(value) =>
                    setLoginForm({
                      ...loginForm,
                      password: value.target.value,
                    })
                  }
                  placeholder="Enter password"
                />
                <label className="form-label">Password</label>
              </div>
              {error ? (
                <div className="text-center  py-2 bg-danger">{error}</div>
              ) : (
                ""
              )}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  onClick={submitData}
                  className="btn btn-primary btn-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
