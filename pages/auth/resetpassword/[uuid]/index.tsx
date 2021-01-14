import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as css from "../../../../utils/cssVariables";
import host from "../../../../utils/host";
import Spinner from "../../../../components/Spinner";

const ResetPasswordPage: React.FC = () => {
  const [isChangedPassword, setIsChangedPassword] = useState<boolean>(false);
  const [text, setText] = useState<string>("Change password");

  const router = useRouter();
  const { uuid } = router.query;

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const errMsgRef = useRef<HTMLParagraphElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  const changePassword = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setText("");
      spinnerRef.current.style.display = "block";

      fetch(`${host}/auth/email/password/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword: passwordRef.current.value,
          token: uuid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            errMsgRef.current.innerText = data.errors[0].msg;
            setText("Change password");
            spinnerRef.current.style.display = "none";
          } else if (data.msg) {
            errMsgRef.current.innerText = data.msg;
            setText("Change password");
            spinnerRef.current.style.display = "none";
          } else {
            setIsChangedPassword(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      errMsgRef.current.innerText = "Passwords don't match";
    }
  };

  return (
    <React.Fragment>
      <main>
        {!isChangedPassword ? (
          <form className="input-container" onSubmit={changePassword}>
            <h2>Reset Password:</h2>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter new password:"
            />
            <input
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm password:"
            />
            <button type="submit">
              {text}
              <Spinner spinner={spinnerRef} />
            </button>
            <p className="err-msg" ref={errMsgRef} />
          </form>
        ) : (
          <div className="changed-password-container">
            <h1 className="header">Password Changed!</h1>
            <Link href={"/auth/login"}>
              <p className="return">Return to Login page</p>
            </Link>
          </div>
        )}
      </main>

      <style jsx>{`
        main {
          width: 100%;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .input-container {
          width: 30%;
          height: 55%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        input {
          border: 1px solid ${css.inputBorder};
          background: ${css.inputBackground};
          color: #fff;
          min-height: 40px;
          width: 100%;
          text-indent: 15px;
          font-size: 0.8rem;
          margin: 10px 0;
        }

        button {
          border: none;
          background: ${css.mainButton};
          color: white;
          width: 150px;
          min-height: 30px;
          border-radius: 4px;
          cursor: pointer;
          margin: 20px 0;
        }

        button:hover {
          background: ${css.mainButtonHover};
        }

        .err-msg {
          color: #ff0000;
          text-align: center;
          width: 90%;
        }

        h2 {
          margin: 20px 0;
        }

        .changed-password-container {
          width: 40%;
          height: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header,
        .return {
          margin: 10px 0;
        }

        .return {
          text-decoration: underline;
          color: #929292;
          font-size: 0.9rem;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ResetPasswordPage;
