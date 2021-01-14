import React from "react";

import Tag from "./Tag";

interface Props {
  uuid: string;
  name: string;
  description: string;
  count: number;
}

const Community: React.FC<Props> = ({ name, description, count }) => {
  return (
    <React.Fragment>
      <div className="community-container">
        <div className="name-count">
          <Tag name={name} />
          <p className="count">Number of Posts: {count}</p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>

      <style jsx>{`
        .community-container {
          display: block;
          height: 120px;
          width: 95%;
          margin: 0 auto;
          border-top: 1px solid #ffff;
        }

        .name-count {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50%;
        }

        .description > p {
          font-size: 14px;
          display: block;
          word-wrap: break-word;
          overflow: hidden;
          line-height: 1.2em;
          max-height: 2.4em;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Community;
