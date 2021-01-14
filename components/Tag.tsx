import React from "react";
import { useRouter } from "next/router";

import * as css from "../utils/cssVariables";

interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <div
        className="background"
        onClick={async () => {
          await router.push(`/${name}`);
        }}
      >
        <p className="name">{name}</p>
      </div>

      <style jsx>{`
        .background {
          background: ${css.tagBackground};
          border-radius: 4px;
          cursor: pointer;
          margin: 5px;
        }

        .background:hover {
          background: ${css.tagHover};
        }

        .name {
          padding: 2px 7px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Tag;
