import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import hljs from "highlight.js";

import { QuestionType } from "../utils/types/individualQuestionType";
import { getCookie, updateVote } from "../utils/functions";
import { VoteType } from "../utils/types/voteType";
import host from "../utils/host";
import { UserContext } from "../context/UserContext";
import AskedBy from "./AskedBy";
import Tag from "./Tag";
import * as css from "../utils/cssVariables";
import OPActions from "./OPActions";

interface Props {
  question: QuestionType;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
}

const Question: React.FC<Props> = ({ question, setEditMode, editMode }) => {
  const [votes, setVotes] = useState<number>(question.votes);
  const [upvoteColor, setUpvoteColor] = useState<string>("grey");
  const [downvoteColor, setDownvoteColor] = useState<string>("grey");

  const userContext = useContext(UserContext);
  const router = useRouter();

  const upvote = css.upvote;
  const downvote = css.downvote;

  const style = { cursor: "pointer" };

  useEffect(() => {
    if (userContext.user) {
      fetch(`${host}/posts/${question.uuid}/vote/status`, {
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
              setUpvoteColor(upvote);
            } else if (data.type === "downvote") {
              setDownvoteColor(downvote);
            }
          }
        });
    }
  }, [userContext]);

  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    if (!editMode) {
      for (let i = 0; i < pres.length; i++) {
        pres[i].classList.remove("plaintext");
        hljs.highlightBlock(pres[i]);
      }
    } else {
      for (let i = 0; i < pres.length; i++) {
        pres[i].classList.add("plaintext");
      }
    }
  }, [editMode]);

  const vote = async (voteType: "upvote" | "downvote") => {
    if (userContext.user) {
      if (userContext.user.uuid !== question.user.uuid) {
        fetch(`${host}/posts/${question.uuid}/vote/status`, {
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
              upvote,
              downvote
            )
          );
        await fetch(`${host}/posts/${question.uuid}/vote`, {
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
        alert("You can't vote on your own post!");
      }
    } else {
      await router.push(`/auth/signup?redirect=${router.asPath}`);
    }
  };

  return (
    <React.Fragment>
      <main>
        <div className="question-container">
          <div className="main">
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
            <div className="main-right">
              <div className="post-body">
                <ReactMarkdown
                  className="preview post-body-mkd"
                  source={question.body}
                  plugins={[remarkGfm]}
                />
              </div>
              <div className="post-body-btm">
                <div className="communities-container">
                  {question?.communities.slice(0, 4).map((community) => (
                    <Tag name={community.name} key={community.name} />
                  ))}
                </div>
                <AskedBy
                  type={"asked"}
                  username={question.user.username}
                  createdAt={question.createdAt}
                  postUuid={question.user.uuid}
                  userUuid={userContext?.user?.uuid}
                  reputation={question.user.reputation}
                />
              </div>
              {question.user.uuid === userContext?.user?.uuid ||
              userContext?.user?.role === "god" ? (
                <OPActions
                  uuid={question.uuid}
                  type={"question"}
                  setEditMode={setEditMode}
                />
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .question-container {
          width: 92%;
          margin: 0 auto;
        }

        .main {
          display: flex;
          margin: 20px 0;
        }

        .votes {
          width: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin: 14px 20px;
        }

        .main-right {
          width: 95%;
        }

        .post-body-btm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          margin-bottom: 20px;
        }

        .communities-container {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Question;
