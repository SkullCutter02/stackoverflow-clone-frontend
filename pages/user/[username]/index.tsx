import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import UserInfo from "../../../components/UserInfo";

interface Props {
  username: string;
  type: "question" | "answer";
}

const UserProfilePage: React.FC<Props> = ({ username, type }) => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey((old) => old + 1);
  }, [username]);

  return <UserInfo username={username} type={type} key={key} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      username: context.query.username,
      type: context.query.type,
    },
  };
};

export default UserProfilePage;
