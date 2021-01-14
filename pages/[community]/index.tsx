import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import CommunityQuestions from "../../components/CommunityQuestions";

interface Props {
  community: string;
}

const CommunityPostPage: React.FC<Props> = ({ community }) => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey(key + 1);
  }, [community]);

  return (
    <React.Fragment>
      <CommunityQuestions community={community} key={key} />
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      community: context.params.community,
    },
  };
};

export default CommunityPostPage;
