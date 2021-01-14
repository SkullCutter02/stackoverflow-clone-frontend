import React from "react";

import * as css from "../utils/cssVariables";

type PostType = {
  uuid: string;
};

type CommunityType = {
  uuid: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  posts: PostType[];
};

interface Props {
  community: CommunityType;
  tagClick: (e) => void;
}

const TagExpand: React.FC<Props> = ({ community, tagClick }) => {
  return (
    <React.Fragment>
      <div
        className="tags-expand-element"
        key={community.uuid}
        data-key={community.uuid}
      >
        <div className="tag-container">
          <div className="tag-background" onClick={tagClick}>
            <p className="tag-name">{community.name}</p>
          </div>
        </div>
        <p>{community.description}</p>
      </div>

      <style jsx>{`
        .tag-container {
          display: flex;
          justify-content: flex-start;
        }

        .tags-expand-element {
          height: 87%;
          overflow: hidden;
          font-size: 0.8rem;
        }

        .tags-expand-element > p {
          margin: 0 8px;
        }

        .tag-background {
          background: ${css.tagBackground};
          border-radius: 4px;
          cursor: pointer;
          margin: 5px;
        }

        .tag-background:hover {
          background: ${css.tagHover};
        }

        .tag-name {
          padding: 2px 7px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default TagExpand;
