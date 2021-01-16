import React, { ChangeEvent, useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import * as css from "../../utils/cssVariables";
import host from "../../utils/host";
import { UserContext } from "../../context/UserContext";
import TagExpand from "../../components/TagExpand";
import { CommunitiesType } from "../../utils/types/communityType";
import { getCookie } from "../../utils/functions";

const RequestPostPage: React.FC = () => {
  const [body, setBody] = useState<string>("**Hello World!**");
  const [text, setText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [uuids, setUuids] = useState<string[]>([]);

  const userContext = useContext(UserContext);
  const router = useRouter();

  const fetchCommunities = async (filter: string = "") => {
    const res = await fetch(
      `${host}/communities?page=1&limit=6&filter=${filter}`
    );
    return await res.json();
  };

  const { isLoading, isError, error, data } = useQuery<CommunitiesType, Error>(
    ["communities", text],
    () => fetchCommunities(text)
  );

  useEffect(() => {
    const tagExpand = document.getElementById("expand");
    if (text !== "") {
      tagExpand.style.visibility = "visible";
      tagExpand.style.width = "80%";
      tagExpand.style.height = "190px";
    } else {
      tagExpand.style.visibility = "hidden";
      tagExpand.style.width = "0";
      tagExpand.style.height = "0";
    }
  }, [text]);

  const tagClick = (e) => {
    const errMsg = document.getElementById("err-msg");

    if (tags.length < 5) {
      if (!tags.includes(e.target.textContent)) {
        setTags([...tags, e.target.textContent]);
        setUuids([
          ...uuids,
          e.target.parentNode.parentNode.parentNode.getAttribute("data-key"),
        ]);
        setText("");
        errMsg.innerText = "";
      } else {
        setText("");
        errMsg.innerText = "Community already chosen!";
      }
    } else {
      setText("");
      errMsg.innerText = "Maximum amount of communities reached";
    }
  };

  const removeTag = (e) => {
    const index = tags.indexOf(
      e.target.parentNode.parentNode.parentNode.firstElementChild.textContent
    );
    setTags(tags.filter((tag) => tags.indexOf(tag) !== index));
    setUuids(uuids.filter((uuid) => uuids.indexOf(uuid) !== index));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const errMsg = document.getElementById("err-msg");
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const bodyTextArea = document.getElementById("body") as HTMLTextAreaElement;

    if (bodyTextArea.value.length > 100 && bodyTextArea.value.length < 29000) {
      if (titleInput.value.length <= 350 && titleInput.value.length > 15) {
        if (tags.length > 0) {
          if (userContext.user) {
            await fetch(`${host}/posts`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
              },
              body: JSON.stringify({
                title: titleInput.value,
                body: bodyTextArea.value,
                userUuid: userContext.user.uuid,
                communities: uuids,
              }),
            })
              .then((res) => res.json())
              .then(async (data) => {
                if (data.msg) {
                  errMsg.innerText = "Something went wrong";
                } else {
                  await router.push(`/questions/${data.uuid}`);
                }
              })
              .catch((err) => console.log(err));
          } else {
            errMsg.innerText = "Please login to post a question";
          }
        } else {
          errMsg.innerText =
            "Choose at least 1 community to post your question to";
        }
      } else {
        errMsg.innerText =
          "Question title cannot be longer than 350 characters or shorter than 15 characters";
      }
    } else {
      errMsg.innerText = "Question body must be longer than 100 characters";
    }
  };

  return (
    <React.Fragment>
      <h1 className="post-form-heading">Ask a Question</h1>
      <form className="post-form-container" onSubmit={formSubmit}>
        <input
          type="text"
          className="post-form-input"
          id="title"
          placeholder="Title"
          required
        />
        <textarea
          id="body"
          className="post-form-body"
          cols={30}
          rows={10}
          placeholder="Body"
          required
          value={body}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setBody(e.target.value)
          }
        />
        <ReactMarkdown
          className="preview"
          plugins={[remarkGfm]}
          source={body}
        />
        <div className="tags">
          <div className="active-tags-container">
            {tags.map((tag) => (
              <div key={uuids[tags.indexOf(tag)]} className="tag-container">
                <div className="tag-background active-tag-background">
                  <p className="tag-name">{tag}</p>
                  <div className="tag-close-background" onClick={removeTag}>
                    <FontAwesomeIcon icon={faTimes} color={"white"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            className="post-form-input"
            placeholder="Communities: (maximum 5) "
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <p className="error-msg" id="err-msg" />
          <div className="tags-expand" id="expand">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error: {error.message}</div>
            ) : (
              <React.Fragment>
                {data.communities.map((community) => (
                  <TagExpand community={community} tagClick={tagClick} />
                ))}
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="submit-btn-container">
          <button type="submit" className="form-submit-btn">
            Post your Question
          </button>
        </div>
      </form>

      <style jsx>{`
        .post-form-heading {
          text-align: center;
          margin: 30px 0;
        }

        .post-form-container {
          width: 65%;
          min-height: 500px;
          border-radius: 20px;
          margin: 0 auto 140px;
          background: ${css.floatingPostBackground};
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        input,
        textarea {
          display: block;
        }

        .post-form-input {
          display: block;
          width: 80%;
          height: 40px;
          margin: 30px 0;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }

        .post-form-body {
          width: 80%;
          resize: none;
          height: 400px;
          margin-bottom: 40px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          padding: 15px;
        }

        .tags {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: -40px;
          margin-bottom: 10px;
        }

        .tags-expand {
          visibility: hidden;
          width: 0;
          height: 0;
          background: #2b2b2b;
          border: 1px solid #bebebe;
          border-radius: 4px;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          margin-bottom: 20px;
        }

        .tag-container {
          display: flex;
          justify-content: flex-start;
        }

        .tag-background {
          background: ${css.tagBackground};
          border-radius: 4px;
          cursor: pointer;
          margin: 5px;
        }

        .tag-background:hover {
          background: ${css.tagHover};
        }

        .tag-name {
          padding: 2px 7px;
        }

        .error-msg {
          color: #ff3f3f;
        }

        .active-tag-background {
          display: flex;
          align-items: center;
        }

        .tag-close-background {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80%;
          margin-right: 7px;
          width: 15px;
          border-radius: 4px;
        }

        .tag-close-background:hover {
          background: #999999;
        }

        .active-tags-container {
          display: flex;
          margin-top: 40px;
          justify-content: flex-start;
          width: 80%;
        }

        .submit-btn-container {
          width: 80%;
          margin-bottom: 40px;
        }

        .form-submit-btn {
          border: none;
          background: ${css.mainButton};
          color: #cbcbcb;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .form-submit-btn:hover {
          background: ${css.mainButtonHover};
          color: #dbdbdb;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RequestPostPage;
