import React from "react";

import AuthForm from "../../components/AuthForm";

const LogInPage: React.FC = () => {
  return (
    <div>
      <AuthForm formType={"login"} />
    </div>
  );
};

export default LogInPage;
