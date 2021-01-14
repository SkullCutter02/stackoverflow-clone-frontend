import React from "react";

import { headerBackground } from "../utils/cssVariables";

interface Props {
  heading: string;
}

const PageHeading: React.FC<Props> = ({ heading }) => {
  return (
    <React.Fragment>
      <div className="page-heading-container">
        <h1 className="page-heading">{heading}</h1>
      </div>

      <style jsx>{`
        .page-heading-container {
          width: 100%;
          height: 190px;
          background: ${headerBackground};
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .page-heading {
          margin: 0 40px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PageHeading;
