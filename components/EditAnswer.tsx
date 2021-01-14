import React, { useState, useContext, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQueryClient } from "react-query";

import * as css from "../utils/cssVariables";
import { CommentType } from "../utils/types/individualQuestionType";
import Spinner from "./Spinner";
import { UserContext } from "../context/UserContext";
import host from "../utils/host";
import { getCookie } from "../utils/functions";

interface Props {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  comment: CommentType;
}

const EditAnswer: React.FC<Props> = ({ setEditMode, comment }) => {
  const [body, setBody] = useState<string>(comment.body);
  const [text, setText] = useState<string>("Save");

  const userContext = useContext(UserContext);
  const queryClient = useQueryClient();
  const spinner = useRef<HTMLDivElement>(null);

  const editForm = (e) => {
    e.preventDefault();

    if (userContext.user) {
      spinner.current.style.display = "block";
      setText("");

      fetch(`${host}/posts/comments/${comment.uuid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify({
          body: body,
          userUuid: userContext.user.uuid,
        }),
      }).then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
          await queryClient.prefetchQuery(["individual-question"], {
            cacheTime: 0,
          });
          setEditMode(false);
        } else {
          alert("Something went wrong");
          setText("Save");
          spinner.current.style.display = "none";
        }
      });
    }
  };

  return (
    <React.Fragment>
      <form className="edit-answer-body" onSubmit={editForm}>
        <textarea
          id="edit-form-body"
          cols={30}
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <ReactMarkdown
          className="preview edit-answer-preview"
          source={body}
          plugins={[remarkGfm]}
        />
        <div className="buttons-container">
          <button className="save">
            {text}
            <Spinner spinner={spinner} />
          </button>
          <button
            onClick={() => {
              const confirm = window.confirm(
                "Are you sure you want to discard your changes?"
              );
              if (confirm) {
                setEditMode(false);
              }
            }}
            className="cancel"
          >
            Cancel
          </button>
        </div>
      </form>

      <style jsx>{`
        .edit-answer-body {
          margin: 20px auto;
          width: 90%;
        }

        #edit-form-body {
          width: 100%;
          resize: none;
          height: 200px;
          margin-bottom: 20px;
          background: ${css.inputBackground};
          border: 2px solid ${css.inputBorder};
          color: #fff;
          padding: 15px;
        }

        .buttons-container {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-bottom: -10px;
        }

        button {
          margin-left: 20px;
          border: none;
          border-radius: 4px;
          width: 80px;
          height: 25px;
          cursor: pointer;
          color: #fff;
          font-size: 0.8rem;
        }

        .save {
          background: ${css.mainButton};
        }

        .save:hover {
          background: ${css.mainButtonHover};
        }

        .cancel {
          background: ${css.cancelButton};
        }

        .cancel:hover {
          background: ${css.cancelButtonHover};
        }
      `}</style>
    </React.Fragment>
  );
};

export default EditAnswer;
