import React, { useRef, useState, useEffect } from "react";
import * as emailjs from "emailjs-com";

import * as css from "../../../utils/cssVariables";
import host from "../../../utils/host";
import Spinner from "../../../components/Spinner";

const ResetPasswordEmailPage = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [text, setText] = useState<string>("Send Email");

  const inputRef = useRef<HTMLInputElement>(null);
  const errMsgRef = useRef<HTMLParagraphElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailjs.init("user_T4JvjEK9hRkJhuh75F1iy");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch(`${host}/auth/email/password/reset/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
    });
    const data = await res.json();

    if (data.msg !== undefined) {
      errMsgRef.current.innerText = data.msg;
    } else {
      errMsgRef.current.innerText = "";
      setText("");
      spinnerRef.current.style.display = "block";

      emailjs
        .send("service_i431z9z", "template_6nvm25b", {
          email: inputRef.current.value,
          reset_link: data.link,
        })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            setIsSent(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <React.Fragment>
      <div className="resetpassword-container">
        {!isSent ? (
          <form className="input-container" onSubmit={sendEmail}>
            <h2>Reset Password:</h2>
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email address: "
              required
              ref={inputRef}
            />
            <button type="submit" className="submit">
              {text}
              <Spinner spinner={spinnerRef} />
            </button>
            <p className="err-msg" ref={errMsgRef} />
          </form>
        ) : (
          <div>
            <h1>Email Sent!</h1>
          </div>
        )}
      </div>

      <style jsx>{`
        .resetpassword-container {
          width: 100%;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .input-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 70%;
          width: 30%;
        }

        .email-input {
          border: 1px solid ${css.inputBorder};
          background: ${css.inputBackground};
          color: #fff;
          min-height: 40px;
          width: 100%;
          text-indent: 15px;
          font-size: 0.8rem;
        }

        .submit {
          border: none;
          background: ${css.mainButton};
          color: white;
          width: 90px;
          min-height: 25px;
          border-radius: 4px;
          cursor: pointer;
        }

        .submit:hover {
          background: ${css.mainButtonHover};
        }

        h2,
        .submit,
        .email-input {
          margin: 15px 0;
        }

        .err-msg {
          color: #ff0000;
        }
      `}</style>
    </React.Fragment>
  );
};

export default ResetPasswordEmailPage;
