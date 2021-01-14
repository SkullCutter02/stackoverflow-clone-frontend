import React, { useState } from "react";
import { useQuery } from "react-query";
import Link from "next/link";

import host from "../utils/host";
import { UserPostsType } from "../utils/types/userPostsType";
import * as css from "../utils/cssVariables";
import Tag from "./Tag";
import PageHandlers from "./PageHandlers";

interface Props {
  uuid: string;
}

const UserQuestions: React.FC<Props> = ({ uuid }) => {
  const [page, setPage] = useState<number>(1);

  const fetchUserPosts = async (page: number) => {
    const res = await fetch(
      `${host}/users/${uuid}/posts?page=${page}&limit=20`
    );
    return await res.json();
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    UserPostsType,
    Error
  >(["user-posts", page], () => fetchUserPosts(page), {
    keepPreviousData: true,
    cacheTime: 0,
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        <React.Fragment>
          {data.posts.length !== 0 ? (
            <div className="user-posts-container">
              {data.posts.map((post) => (
                <div className="user-post-container" key={post.uuid}>
                  <div className="post-aside">
                    <div className="votes">
                      <p className="number">{post.votes}</p>
                      <p className="text">Vote{post.votes === 1 ? "" : "s"}</p>
                    </div>
                    <div className="comments">
                      <p className="number">{post.comments.length}</p>
                      <p className="text">
                        Answer{post.comments.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>
                  <div className="post-main">
                    <Link href={`/questions/${post.uuid}`}>
                      <p className="post-title">{post.title}</p>
                    </Link>
                    <div className="communities-container">
                      {post.communities.slice(0, 4).map((community) => (
                        <Tag name={community.name} key={community.name} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <PageHandlers
                page={page}
                setPage={setPage}
                isPreviousData={isPreviousData}
                hasMore={data.hasMore}
                width={97}
              />
            </div>
          ) : (
            <div className="empty">
              <h1>This user doesn't have any questions...</h1>
            </div>
          )}
        </React.Fragment>
      )}

      <style jsx>{`
        .user-post-container {
          height: 100px;
          background: ${css.floatingPostBackground};
          margin: 30px 20px;
          border-radius: 10px;
          padding: 10px;
          display: flex;
        }

        .empty {
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .post-aside {
          width: 3%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 5px;
        }

        .votes,
        .comments {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .votes p,
        .comments p {
          color: #dedede;
          font-size: 1rem;
        }

        .votes .text,
        .comments .text {
          font-size: 0.7rem;
        }

        .post-main {
          width: 97%;
          margin-left: 9px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          margin-top: 6px;
        }

        .post-title:hover {
          color: #bebebe;
        }

        .communities-container {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default UserQuestions;
