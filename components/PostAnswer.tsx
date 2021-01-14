import React, { useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";

import * as css from "../utils/cssVariables";
import host from "../utils/host";
import { QuestionType } from "../utils/types/individualQuestionType";
import { getCookie } from "../utils/functions";
import { UserContext } from "../context/UserContext";

interface Props {
  question: QuestionType;
}

const PostAnswer: React.FC<Props> = ({ question }) => {
  const [text, setText] = useState<string>("");
  const userContext = useContext(UserContext);

  const router = useRouter();
  const queryClient = useQueryClient();

  const postAnswer = async (e) => {
    e.preventDefault();

    const errMsg = document.getElementById("err-msg") as HTMLDivElement;

    if (userContext.user) {
      if (text.length > 20 && text.length < 19000) {
        fetch(`${host}/posts/${question.uuid}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
          body: JSON.stringify({
            userUuid: userContext.user.uuid,
            body: text,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.msg) {
              errMsg.innerText = data.msg;
            } else {
              await queryClient.prefetchQuery(["individual-question"]);
              errMsg.innerText = "";
              setText("");
            }
          })
          .catch((err) => console.log(err));
      } else {
        errMsg.innerText = "Your reply must be longer than 20 characters";
      }
    } else {
      await router.push("/auth/signup");
    }
  };

  return (
    <React.Fragment>
      <div className="reply-container">
        <form onSubmit={postAnswer}>
          <textarea
            id="reply"
            className="reply-form-textarea"
            placeholder={"Reply to this question"}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="reply-btn" type={"submit"}>
            Post your Answer
          </button>
          <p className="err-msg" id="err-msg" />
          <ReactMarkdown
            className="preview reply-preview"
            source={text}
            plugins={[remarkGfm]}
          />
        </form>
      </div>

      <style jsx>{`
        .reply-container {
          width: 82%;
          margin: 40px auto;
        }

        .reply-form-textarea {
          width: 100%;
          resize: none;
          display: block;
          height: ${text.length === 0 ? "120px" : "200px"};
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          padding: 15px;
          line-height: 1.4em;
        }

        .reply-form-textarea:focus {
          height: 200px;
        }

        .reply-btn {
          margin: 20px 10px;
          float: right;
          border: none;
          color: #fff;
          background: ${css.mainButton};
          border-radius: 3px;
          padding: 7px 10px;
          cursor: pointer;
        }

        .reply-btn:hover {
          background: ${css.mainButtonHover};
        }

        .err-msg {
          color: red;
          margin: 20px 0;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PostAnswer;
