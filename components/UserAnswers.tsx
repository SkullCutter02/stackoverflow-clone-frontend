import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";

import host from "../utils/host";
import * as css from "../utils/cssVariables";
import { UserAnswersType } from "../utils/types/userAnswersType";
import PageHandlers from "./PageHandlers";

interface Props {
  uuid: string;
}

const UserAnswers: React.FC<Props> = ({ uuid }) => {
  const [page, setPage] = useState<number>(1);

  const fetchUserAnswers = async (page: number) => {
    const res = await fetch(
      `${host}/users/${uuid}/comments?page=${page}&limit=20`
    );
    return await res.json();
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    UserAnswersType,
    Error
  >(["user-answers", page], () => fetchUserAnswers(page), {
    keepPreviousData: true,
    cacheTime: 0,
  });

  useEffect(() => {
    if (data) {
      const pres = document.querySelectorAll("pre");

      for (let i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
      }
    }
  }, [data]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        <React.Fragment>
          {data.comments.length !== 0 ? (
            <div>
              <div className="user-answers-container">
                {data.comments.map((answer) => (
                  <div className="user-answer-container">
                    <div className="left">
                      <p>{answer.votes}</p>
                      <p>Votes</p>
                    </div>
                    <Link href={`/questions/${answer?.post?.uuid}`}>
                      <div className="main">
                        <ReactMarkdown
                          source={answer.body}
                          plugins={[remarkGfm]}
                          className="preview user-answer-markdown"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
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
              <h1>This user doesn't have any answers...</h1>
            </div>
          )}
        </React.Fragment>
      )}

      <style jsx>{`
        .user-answer-container {
          margin: 30px 20px;
          padding: 15px 20px;
          background: ${css.floatingPostBackground};
          border-radius: 10px;
          display: flex;
        }

        .empty {
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .left {
          width: 3%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .left p {
          color: #dedede;
          font-size: 0.9rem;
        }

        .main {
          width: 97%;
          margin: -15px 25px;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default UserAnswers;
