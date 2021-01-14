import React, { useContext } from "react";
import Link from "next/link";

import * as css from "../utils/cssVariables";
import { QuestionType } from "../utils/types/questionType";
import Tag from "./Tag";
import { UserContext } from "../context/UserContext";
import AskedBy from "./AskedBy";

interface Props {
  post: QuestionType;
}

const CommunityQuestion: React.FC<Props> = ({ post }) => {
  const userContext = useContext(UserContext);

  return (
    <React.Fragment>
      <div className="community-post-container">
        <div className="community-post-aside">
          <div className="votes-container">
            <p className="number">{post.votes}</p>
            <p className="text">Vote{post.votes === 1 ? "" : "s"}</p>
          </div>
          <div className="comments-container">
            <p className="number">{post.comments.length}</p>
            <p className="text">
              Answer{post.comments.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
        <div className="community-post-main">
          <Link href={`/questions/${post.uuid}`}>
            <p className="post-title">{post.title}</p>
          </Link>
          <div className="main-bottom">
            <div className="communities-container">
              {post.communities.slice(0, 4).map((community) => (
                <Tag name={community.name} key={community.name} />
              ))}
            </div>
            <AskedBy
              type={"asked"}
              username={post.user.username}
              createdAt={post.createdAt}
              postUuid={post.user.uuid}
              userUuid={userContext?.user?.uuid}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .community-post-container {
          width: 90%;
          margin-top: 30px;
          background: ${css.floatingPostBackground};
          border-radius: 10px;
          height: 100px;
          display: flex;
        }

        .community-post-aside {
          width: 7%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 5px;
        }

        .community-post-main {
          width: 93%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .post-communities-container {
          display: flex;
        }

        .votes-container,
        .comments-container {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .votes-container p,
        .comments-container p {
          color: #dedede;
          font-size: 1rem;
        }

        .votes-container .text,
        .comments-container .text {
          font-size: 0.7rem;
        }

        .post-title {
          color: #ffffff;
          cursor: pointer;
          font-size: 0.95rem;
          display: block;
          word-wrap: break-word;
          overflow: hidden;
          line-height: 1.2em;
          max-height: 2.4em;
          margin-left: 6px;
          margin-top: 3px;
        }

        .post-title:hover {
          color: #bebebe;
        }

        .main-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .communities-container {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CommunityQuestion;
