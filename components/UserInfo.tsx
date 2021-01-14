import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import UserQuestions from "./UserQuestions";
import UserAnswers from "./UserAnswers";
import { UserContext } from "../context/UserContext";
import host from "../utils/host";

type UserType = {
  uuid: string;
  username: string;
  email: string;
  verified: boolean;
  reputation: number;
  role: string;
  createdAt: string;
  updatedAt: string;
};

interface Props {
  username: string;
  type: "question" | "answer";
}

const UserInfo: React.FC<Props> = ({ username, type }) => {
  const [tab, setTab] = useState<"question" | "answer">(type);

  const userContext = useContext(UserContext);
  const router = useRouter();

  const fetchUser = async () => {
    const res = await fetch(`${host}/users/${username}`);
    return await res.json();
  };

  const { isLoading, isError, error, data } = useQuery<UserType, Error>(
    "user",
    () => fetchUser(),
    { cacheTime: 0 }
  );

  function handleTab(tab: "question" | "answer") {
    const tabs = document.getElementsByClassName("nav-item");
    const activeTab = document.getElementById(tab) as HTMLSpanElement;
    const currentActiveTab = document.getElementsByClassName("active");

    if (activeTab !== currentActiveTab[0]) {
      for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i] as HTMLElement;
        tab.classList.remove("active");
      }

      activeTab.classList.add("active");
      setTab(tab);
      router.push(`/user/${username}?type=${tab}`);
    }
  }

  useEffect(() => {
    if (data) {
      const activeTab = document.getElementById(type) as HTMLSpanElement;
      activeTab.classList.add("active");
    }
  }, [data]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="user-container">
          <h1>{data.username}</h1>
          <p>Reputation: {data.reputation}</p>
          {data.uuid === userContext?.user?.uuid ? (
            <p>Email: {data.email}</p>
          ) : (
            <div />
          )}
          <div className="user-content-container">
            <div className="tab-nav">
              <span
                className="nav-item"
                id="question"
                onClick={() => handleTab("question")}
              >
                <p>Questions</p>
              </span>
              <span
                className="nav-item"
                id="answer"
                onClick={() => handleTab("answer")}
              >
                <p>Answers</p>
              </span>
            </div>
            <div className="user-content">
              {tab === "question" ? (
                <UserQuestions uuid={data.uuid} />
              ) : (
                <UserAnswers uuid={data.uuid} />
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .user-container {
          margin: 40px;
        }

        .tab-nav {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: flex-start;
          background: #414141;
          border: 1.5px solid #cdcdcd;
        }

        .nav-item {
          height: 100%;
          width: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .nav-item:hover {
          background: #a9a9a9;
        }

        .active {
          background: #737373;
        }

        .active:hover {
          background: #a0a0a0;
        }

        .user-content-container {
          margin-top: 30px;
          display: grid;
          grid-row: 2;
        }

        .user-content {
          border-left: 1.5px solid #cdcdcd;
          border-right: 1.5px solid #cdcdcd;
          border-bottom: 1.5px solid #cdcdcd;
          min-height: 300px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default UserInfo;
