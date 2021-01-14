import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";
import { useRouter } from "next/router";

import { CommentType } from "../utils/types/individualQuestionType";
import { VoteType } from "../utils/types/voteType";
import * as css from "../utils/cssVariables";
import AskedBy from "./AskedBy";
import { UserContext } from "../context/UserContext";
import host from "../utils/host";
import { updateVote, getCookie } from "../utils/functions";
import OPActions from "./OPActions";
import EditAnswer from "./EditAnswer";

interface Props {
  comment: CommentType;
}

const Answer: React.FC<Props> = ({ comment }) => {
  const [votes, setVotes] = useState<number>(comment.votes);
  const [upvoteColor, setUpvoteColor] = useState<string>("grey");
  const [downvoteColor, setDownvoteColor] = useState<string>("grey");
  const [editMode, setEditMode] = useState<boolean>(false);

  const userContext = useContext(UserContext);
  const router = useRouter();

  const style = { cursor: "pointer" };

  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    for (let i = 0; i < pres.length; i++) {
      if (!editMode) {
        hljs.highlightBlock(pres[i]);
        pres[i].classList.remove("plaintext");
      } else {
        pres[i].classList.add("plaintext");
      }
    }
  }, [editMode]);

  useEffect(() => {
    if (userContext.user) {
      fetch(`${host}/posts/comments/${comment.uuid}/vote/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userUuid: userContext.user.uuid,
        }),
      })
        .then((res) => res.json())
        .then((data: VoteType) => {
          if (data.status) {
            if (data.type === "upvote") {
              setUpvoteColor(css.upvote);
            } else if (data.type === "downvote") {
              setDownvoteColor(css.downvote);
            }
          }
        });
    }
  }, [userContext]);

  const vote = async (voteType: "upvote" | "downvote") => {
    if (userContext.user) {
      if (userContext.user.uuid !== comment.user.uuid) {
        fetch(`${host}/posts/comments/${comment.uuid}/vote/status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userUuid: userContext.user.uuid,
          }),
        })
          .then((res) => res.json())
          .then((data: VoteType) =>
            updateVote(
              data,
              voteType,
              setVotes,
              setUpvoteColor,
              setDownvoteColor,
              votes,
              css.upvote,
              css.downvote
            )
          );
        await fetch(`${host}/posts/comments/${comment.uuid}/vote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
          body: JSON.stringify({
            userUuid: userContext.user.uuid,
            voteType: voteType,
          }),
        });
      } else {
        alert("You can't vote on your own comment!");
      }
    } else {
      await router.push(`/auth/signup?redirect=${router.asPath}`);
    }
  };

  return (
    <React.Fragment>
      <div className="answer-container">
        {!editMode ? (
          <React.Fragment>
            <div className="votes">
              <FontAwesomeIcon
                icon={faSortUp}
                color={upvoteColor}
                style={style}
                size={"2x"}
                onClick={() => vote("upvote")}
              />
              <p
                className="vote-count"
                style={{ color: "#c6c6c6", margin: "-8px 0" }}
              >
                {votes}
              </p>
              <FontAwesomeIcon
                icon={faSortDown}
                color={downvoteColor}
                style={style}
                size={"2x"}
                onClick={() => vote("downvote")}
              />
            </div>
            <div className="main-answer-body">
              <ReactMarkdown
                className="preview answer-pre"
                source={comment.body}
                plugins={[remarkGfm]}
              />
              <div className="below">
                <div className="user">
                  <AskedBy
                    type={"answered"}
                    username={comment.user.username}
                    createdAt={comment.createdAt}
                    postUuid={comment.user.uuid}
                    userUuid={userContext?.user?.uuid}
                    reputation={comment.user.reputation}
                  />
                </div>
                {comment.user.uuid === userContext?.user?.uuid ||
                userContext?.user?.role === "god" ? (
                  <div className="op-actions">
                    <OPActions
                      uuid={comment.uuid}
                      type={"answer"}
                      setEditMode={setEditMode}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <EditAnswer setEditMode={setEditMode} comment={comment} />
        )}
      </div>

      <style jsx>{`
        .answer-container {
          width: 100%;
          margin-bottom: 30px;
          padding: 5px 5px 20px;
          border-radius: 10px;
          background: ${css.floatingPostBackground};
          display: ${!editMode ? "flex" : "block"};
        }

        .below {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          margin-bottom: -5px;
        }

        .votes {
          width: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-top: 14px;
        }

        .op-actions {
          width: 100px;
        }

        .main-answer-body {
          width: 95%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Answer;
