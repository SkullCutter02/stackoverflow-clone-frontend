import React from "react";
import { useRouter } from "next/router";

import * as css from "../../utils/cssVariables";
import host from "../../utils/host";
import { getCookie } from "../../utils/functions";

const RequestCommunityPage: React.FC = () => {
  const router = useRouter();
  const redirect = router.query.redirect;

  const requestCommunity = (e) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const link = document.getElementById("link") as HTMLInputElement;
    const errMsg = document.getElementById("err-msg") as HTMLParagraphElement;

    fetch(`${host}/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        name: name.value,
        link: link.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) {
          errMsg.innerText = data.msg;
        } else {
          errMsg.style.color = "white";
          errMsg.innerText = "Request Sent! Redirecting you in 3 seconds";
          setTimeout(() => {
            if (typeof redirect === "string") {
              router.push(redirect);
            }
          }, 3000);
        }
      });
  };

  return (
    <React.Fragment>
      <form className="request-community-form" onSubmit={requestCommunity}>
        <h2>Request a Community: </h2>
        <input
          type="text"
          id="name"
          placeholder="Name of Community: "
          required
        />
        <input
          type="text"
          id="link"
          placeholder="Link to documentation: "
          required
        />
        <button type={"submit"}>Request Community</button>
        <p className="err-msg" id="err-msg" />
      </form>

      <style jsx>{`
        .request-community-form {
          height: 250px;
          width: 40%;
          margin: 200px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateY(-40px);
        }

        h2 {
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          height: 40px;
          margin: 10px 0;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }

        button {
          border: none;
          background: ${css.mainButton};
          color: #cbcbcb;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          margin: 10px 0;
        }

        button:hover {
          background: ${css.mainButtonHover};
          color: #dbdbdb;
        }

        .err-msg {
          margin: 10px auto;
          color: #ff3f3f;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RequestCommunityPage;
