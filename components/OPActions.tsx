import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";

import host from "../utils/host";
import { getCookie } from "../utils/functions";
import { UserContext } from "../context/UserContext";

interface Props {
  uuid: string;
  type: "question" | "answer";
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const OPActions: React.FC<Props> = ({ uuid, type, setEditMode }) => {
  const userContext = useContext(UserContext);
  const queryClient = useQueryClient();
  const router = useRouter();

  const style = {
    cursor: "pointer",
    marginRight: "20px",
  };

  const edit = () => {
    setEditMode(true);

    if (type === "question") {
      window.scrollBy(0, -1000);
    }
  };

  const remove = () => {
    if (userContext.user) {
      const confirm = window.confirm(
        `Are you sure you want to delete your ${type}?`
      );

      if (confirm) {
        if (type === "answer") {
          fetch(`${host}/posts/comments/${uuid}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify({ userUuid: userContext.user.uuid }),
          }).then(async (res) => {
            if (res.status >= 200 && res.status < 300) {
              await queryClient.prefetchQuery(["individual-question"], {
                cacheTime: 0,
              });
            } else {
              alert("Something went wrong");
            }
          });
        } else if (type === "question") {
          fetch(`${host}/posts/${uuid}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify({ userUuid: userContext.user.uuid }),
          }).then((res) => {
            if (res.status >= 200 && res.status < 300) {
              router.back();
            } else {
              alert("Something went wrong");
            }
          });
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div className="actions-container">
        <div className="icons-container">
          <FontAwesomeIcon
            icon={faEdit}
            color={"white"}
            style={style}
            size={"1x"}
            onClick={edit}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            color={"white"}
            style={style}
            size={"1x"}
            onClick={remove}
          />
        </div>
      </div>

      <style jsx>{`
        .actions-container {
          width: 95%;
        }

        .icons-container {
          float: right;
        }
      `}</style>
    </React.Fragment>
  );
};

export default OPActions;
