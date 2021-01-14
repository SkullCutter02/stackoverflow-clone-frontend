import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faSignOutAlt,
  faIdBadge,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../context/UserContext";
import host from "../utils/host";
import * as css from "../utils/cssVariables";

const Navbar: React.FC = () => {
  const [caretStatus, setCaretStatus] = useState<"up" | "down">("down");

  const userContext = useContext(UserContext);
  const router = useRouter();

  const logOut = async () => {
    try {
      await fetch(`${host}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      userContext.setState(null);
      await router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const hideNav = () => {
    setCaretStatus(caretStatus === "down" ? "up" : "down");
    const popUps = document.getElementsByClassName("pop-up-item");

    for (let i = 0; i < popUps.length; i++) {
      if (caretStatus === "up") {
        const popUp = popUps[i] as HTMLElement;
        popUp.style.visibility = "hidden";
      } else if (caretStatus === "down") {
        const popUp = popUps[i] as HTMLElement;
        popUp.style.visibility = "visible";
      }
    }
  };

  return (
    <React.Fragment>
      <nav>
        <div className="nav-top-line" />
        <div className="nav-container">
          <div className="nav-left">
            <Link href={"/"}>
              <h1 className="nav-site-name">AskProgramming</h1>
            </Link>
          </div>
          {userContext.user === undefined ? (
            <div className="nav-right">
              <Link href={`/auth/login?redirect=${router.asPath}`}>
                <button className="nav-auth-btn nav-log-in-btn">Log In</button>
              </Link>
              <Link href={`/auth/signup?redirect=${router.asPath}`}>
                <button className="nav-auth-btn nav-sign-up-btn">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="nav-right signed-in">
              <div className="signed-in-state og" onClick={hideNav}>
                <p className="username">{userContext?.user?.username}</p>
                <FontAwesomeIcon
                  icon={caretStatus === "down" ? faCaretDown : faCaretUp}
                  color={"white"}
                  size={"1x"}
                  style={{ marginRight: "20px" }}
                />
              </div>

              <Link href={`/user/${userContext?.user?.username}?type=question`}>
                <div
                  className="signed-in-state pop-up-item"
                  onClick={() => {
                    setCaretStatus("down");
                    const popUps = document.getElementsByClassName(
                      "pop-up-item"
                    );

                    for (let i = 0; i < popUps.length; i++) {
                      const popUp = popUps[i] as HTMLElement;
                      popUp.style.visibility = "hidden";
                    }
                  }}
                >
                  <p className="pop-up-txt">Profile</p>
                  <FontAwesomeIcon
                    icon={faIdBadge}
                    color={"white"}
                    size={"1x"}
                    style={{ marginRight: "10px" }}
                  />
                </div>
              </Link>

              <div className="signed-in-state pop-up-item" onClick={logOut}>
                <p className="pop-up-txt">Logout</p>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  color={"white"}
                  size={"1x"}
                  style={{ marginRight: "10px" }}
                />
              </div>

              {userContext?.user?.role === "god" ? (
                <div
                  className="signed-in-state pop-up-item"
                  onClick={() => {
                    router.push("/admin");
                    hideNav();
                  }}
                >
                  <p className="pop-up-txt">Admin Area</p>
                  <FontAwesomeIcon
                    icon={faUsersCog}
                    color={"white"}
                    size={"1x"}
                    style={{ marginRight: "10px" }}
                  />
                </div>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        .nav-top-line {
          width: 100%;
          height: 4px;
          background: #c46215;
        }

        .nav-container {
          background: ${css.secondaryBackground};
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 3px 5px #151515;
        }

        .nav-site-name {
          color: #f2f2f2;
          margin-left: 50px;
          font-size: 1.3rem;
          cursor: pointer;
          padding: 10px 20px;
          height: 100%;
        }

        .nav-site-name:hover {
          background: #4a4a4a;
        }

        .nav-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .nav-right {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .nav-auth-btn {
          width: 80px;
          height: 60%;
          border-radius: 4px;
          border: 1.5px solid ${css.buttonBorder};
          margin: 0 10px;
          cursor: pointer;
        }

        .nav-sign-up-btn {
          margin-right: 17%;
          background: ${css.mainButton};
          color: ${css.mainButtonText};
        }

        .nav-sign-up-btn:hover {
          background: ${css.mainButtonHover};
          color: ${css.mainButtonTextHover};
        }

        .nav-log-in-btn {
          color: ${css.secondaryButtonText};
          background: ${css.secondaryButton};
        }

        .nav-log-in-btn:hover {
          background: ${css.secondaryButtonHover};
          border: 1.5px solid #4d606d;
          color: ${css.secondaryButtonTextHover};
        }

        .signed-in-state {
          border: 2px solid #888888;
          background: #414141;
          z-index: 1000;
          margin-right: 40px;
          height: 80%;
          width: 170px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .signed-in-state > .username {
          margin: 0 20px;
        }

        .signed-in {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          align-self: flex-start;
          height: 100px;
          width: 25%;
        }

        .og {
          margin-top: 5px;
        }

        .pop-up-item {
          border: none;
          border-right: 2px solid #888888;
          border-left: 2px solid #888888;
          border-bottom: 2px solid #888888;
          flex-direction: row-reverse;
          justify-content: center;
          visibility: hidden;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Navbar;
