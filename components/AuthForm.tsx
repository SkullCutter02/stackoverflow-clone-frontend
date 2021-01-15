import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserContext } from "../context/UserContext";
import host from "../utils/host";
import * as css from "../utils/cssVariables";

interface Props {
  formType: "signup" | "login";
}

const AuthForm: React.FC<Props> = ({ formType }) => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const redirect = router.query.redirect;

  function setCookie(rememberMe: HTMLInputElement, data: any) {
    if (rememberMe.checked) {
      document.cookie = `token=${data.token}; max-age=${31536000}; secure=true`;
    } else {
      document.cookie = `token=${data.token}; secure=true`;
    }
  }

  const submitForm = (e) => {
    e.preventDefault();

    const username = document?.getElementById("username") as HTMLInputElement;
    const email = document?.getElementById("email") as HTMLInputElement;
    const password = document?.getElementById("password") as HTMLInputElement;
    const confirmPassword = document?.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    const rememberMe = document?.getElementById(
      "rememberMe"
    ) as HTMLInputElement;
    const identifier = document?.getElementById(
      "identifier"
    ) as HTMLInputElement;
    const errorMsg = document?.getElementById("error-msg") as HTMLInputElement;

    if (formType === "signup") {
      if (password.value === confirmPassword.value) {
        fetch(`${host}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            rememberMe: rememberMe.checked,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.errors) {
              errorMsg.innerText = data.errors[0].msg;
            } else if (data.msg) {
              errorMsg.innerText = data.msg;
            } else {
              errorMsg.innerText = "";

              setCookie(rememberMe, data);

              const payload = JSON.parse(atob(data.token.split(".")[1]));
              fetch(`${host}/users/${payload.uuid}`)
                .then((res) => res.json())
                .then((data) => userContext.setState(data))
                .catch((err) => console.log(err));
              if (typeof redirect === "string") {
                await router.push(redirect);
              }
            }
          })
          .catch((err) => console.log(err));
      } else {
        errorMsg.innerText = "Password doesn't match";
        console.log("ddd");
      }
    } else if (formType === "login") {
      if (identifier.value.includes("@")) {
        fetch(`${host}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: identifier.value,
            password: password.value,
            rememberMe: rememberMe.checked,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.msg) {
              errorMsg.innerText = data.msg;
            } else {
              errorMsg.innerText = "";

              setCookie(rememberMe, data);

              const payload = JSON.parse(atob(data.token.split(".")[1]));
              fetch(`${host}/users/${payload.uuid}`)
                .then((res) => res.json())
                .then((data) => userContext.setState(data))
                .catch((err) => console.log(err));
              console.log(data);
              if (typeof redirect === "string") {
                await router.push(redirect);
              }
            }
          })
          .catch((err) => console.log(err));
      } else {
        fetch(`${host}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: identifier.value,
            password: password.value,
            rememberMe: rememberMe.checked,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.msg) {
              errorMsg.innerText = data.msg;
            } else {
              errorMsg.innerText = "";

              setCookie(rememberMe, data);

              const payload = JSON.parse(atob(data.token.split(".")[1]));
              fetch(`${host}/users/${payload.uuid}`)
                .then((res) => res.json())
                .then((data) => userContext.setState(data))
                .catch((err) => console.log(err));
              if (typeof redirect === "string") {
                await router.push(redirect);
              }
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <React.Fragment>
      <div className="auth-form-page-container">
        <form className="auth-form-container" onSubmit={submitForm}>
          <h1 className="auth-form-heading">
            {formType === "signup" ? "Signup" : "Login"}
          </h1>
          {formType === "signup" ? (
            <div className="auth-form auth-form-signup">
              <input
                type="text"
                className="auth-form-input"
                id="username"
                placeholder="Username: "
                required
              />
              <input
                type="text"
                className="auth-form-input"
                id="email"
                placeholder="Email: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="password"
                placeholder="Password: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="confirmPassword"
                placeholder="Confirm Password: "
                required
              />
              <div className="auth-form-checkbox-container">
                <div className="checkbox-remember-me">
                  <input
                    type="checkbox"
                    className="auth-form-checkbox"
                    id="rememberMe"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="auth-form-checkbox-label"
                  >
                    Remember Me
                  </label>
                </div>
                <Link href={`/auth/login?redirect=${redirect}`}>
                  <p className="auth-form-forgot-password">
                    Already have an account?
                  </p>
                </Link>
              </div>
              <div className="auth-form-error-msg" id="error-msg" />
              <button type="submit" className="auth-form-submit-btn">
                Signup
              </button>
            </div>
          ) : (
            <div className="auth-form auth-form-login">
              <input
                type="text"
                className="auth-form-input"
                id="identifier"
                placeholder="Username or Email: "
                required
              />
              <input
                type="password"
                className="auth-form-input"
                id="password"
                placeholder="Password: "
                required
              />
              <div className="auth-form-checkbox-container">
                <div className="checkbox-remember-me">
                  <input
                    type="checkbox"
                    className="auth-form-checkbox"
                    id="rememberMe"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="auth-form-checkbox-label"
                  >
                    Remember Me
                  </label>
                </div>
                <Link href={"/auth/resetpassword"}>
                  <p className="auth-form-forgot-password">Forgot Password?</p>
                </Link>
              </div>
              <div className="auth-form-error-msg" id="error-msg" />
              <button type="submit" className="auth-form-submit-btn">
                Login
              </button>
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .auth-form-page-container {
          width: 100%;
          height: 650px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-form-container {
          height: 500px;
          width: 30%;
          min-width: 310px;
          transform: translateY(-30px);
        }

        .auth-form-heading {
          text-align: center;
          transform: translateY(70px);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .auth-form-input {
          display: block;
          width: 100%;
          height: 40px;
          margin: 11px 0;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }

        .auth-form-input::placeholder {
          font-size: 0.8rem;
          color: #ffffff;
        }

        #username {
          margin-top: 90px;
        }

        #identifier {
          margin-top: 140px;
        }

        .auth-form-checkbox-container {
          margin: 10px 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .auth-form-checkbox-label {
          font-size: 1rem;
          margin-left: 10px;
        }

        .auth-form-forgot-password {
          color: #808080;
          text-decoration: underline;
          cursor: pointer;
        }

        .auth-form-checkbox {
          margin-left: 10px;
        }

        .auth-form-submit-btn {
          background: ${css.mainButton};
          border: 1.5px solid ${css.buttonBorder};
          border-radius: 2px;
          color: ${css.mainButtonText};
          width: 70px;
          height: 30px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .auth-form-submit-btn:hover {
          background: ${css.mainButtonHover};
          color: ${css.mainButtonTextHover};
        }

        .auth-form-error-msg {
          color: #ff3f3f;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AuthForm;
