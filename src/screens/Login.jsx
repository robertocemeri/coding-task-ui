import React, { useState } from "react";
import { loginUser } from "../api";
import appStorage from "../common/helpers/appStorage";
import { UI_HOME_URL } from "../config";
import * as Yup from "yup";
import Input from "../components/Input/Input";
const Storage = appStorage();

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const submitData = async () => {
    const valid = await validateData();
    if (!valid) {
      return;
    }
    await loginUser(loginForm).then((res) => {
      if (res.statusCode !== 200) {
        const errors = [];
        errors["server"] = res.message ? res.message : res.error;
        setError(errors);
      } else {
        Storage.setToken(res.access_token);
        Storage.setUser(res.user);
        window.location.replace(UI_HOME_URL);
      }
    });
  };

  const validateData = async () => {
    try {
      await schema.validate(loginForm, { abortEarly: false });
      return true;
    } catch (validationErrors) {
      const errors = [];
      validationErrors.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setError(errors);
      return false;
    }
  };

  return (
    <section className="vh-100 d-flex bg-dark ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample "
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 p-4  pb-5 rounded">
            <div className="d-flex justify-content-center mb-5 fs-2 text-light">
              SIGN IN
            </div>
            <form>
              <div className="form-outline mb-2">
                <Input
                  type={"email"}
                  name={"email"}
                  label={"Email"}
                  placeholder="Enter email address"
                  formData={loginForm}
                  setFormData={setLoginForm}
                  error={error && error["email"]}
                  labelClass="text-white"
                />
              </div>

              <div className="form-outline mb-2">
                <Input
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                  placeholder="Enter password"
                  formData={loginForm}
                  setFormData={setLoginForm}
                  error={error && error["password"]}
                  labelClass="text-white"
                />
                <span>{error["server"]} </span>
              </div>
              {error && error["server"] && (
                <div className="text-danger">{error["server"]}</div>
              )}
              <div className="text-center text-lg-start mt-2 pt-2 d-flex justify-content-center">
                <button
                  type="button"
                  onClick={submitData}
                  className="btn btn-outline-light"
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
