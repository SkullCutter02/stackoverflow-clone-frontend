import React from "react";
import Link from "next/link";

import { getTime, roundNumber } from "../utils/functions";

interface Props {
  type: "asked" | "answered";
  username: string;
  createdAt: string;
  postUuid: string;
  userUuid: string;
  reputation?: number;
}

const AskedBy: React.FC<Props> = ({
  type,
  username,
  createdAt,
  postUuid,
  userUuid,
  reputation,
}) => {
  return (
    <React.Fragment>
      <span>
        <i className="asked-by">
          {type} by:
          <Link href={`/user/${username}?type=question`}>
            <span className="username"> {username}</span>
          </Link>{" "}
          {reputation !== undefined && `• ${roundNumber(reputation)} || `}
          <span className="time"> {getTime(createdAt)}</span>
        </i>
      </span>

      <style jsx>{`
        .asked-by {
          font-size: 0.9rem;
          color: #fff;
          margin-right: 15px;
        }

        .asked-by .username {
          color: ${postUuid === userUuid ? "#3ca4ff" : "#bebebe"};
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AskedBy;
