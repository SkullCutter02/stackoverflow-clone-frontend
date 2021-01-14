import React from "react";

import PageHeading from "../components/PageHeading";
import HomePageSection from "../components/HomePageSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <PageHeading
        heading={
          "Ever got stuck on something? AskProgramming will help you out!"
        }
      />
      <HomePageSection />
    </div>
  );
};

export default HomePage;
