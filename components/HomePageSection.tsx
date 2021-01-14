import React, { ChangeEvent, useState } from "react";

import Aside from "./Aside";
import Communities from "./Communities";
import * as css from "../utils/cssVariables";

const HomePageSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <React.Fragment>
      <div className="home-page-section-container">
        <Aside borderSide={"right"} />
        <main>
          <section className="section-heading-container">
            <h2 className="section-heading">Communities</h2>
            <input
              type="text"
              id="search"
              className="search-input"
              placeholder="Search..."
              value={filter}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFilter(e.target.value)
              }
            />
          </section>
          <Communities filter={filter} />
        </main>
      </div>

      <style jsx>{`
        .home-page-section-container {
          width: 100%;
          height: auto;
          display: flex;
          min-height: 400px;
        }

        aside,
        main {
          height: auto;
        }

        main {
          width: 80%;
        }

        .section-heading-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section-heading {
          margin: 0 30px;
        }

        .search-input {
          display: block;
          width: 30%;
          height: 40px;
          margin: 25px 30px;
          text-indent: 15px;
          background: ${css.inputBackground};
          color: #ffffff;
          border: 2px solid ${css.inputBorder};
          font-size: 0.8rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HomePageSection;
