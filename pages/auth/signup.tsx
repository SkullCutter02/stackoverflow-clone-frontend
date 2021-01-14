import React from "react";

import AuthForm from "../../components/AuthForm";

const SignUpPage: React.FC = () => {
  return (
    <div>
      <AuthForm formType={"signup"} />
    </div>
  );
};

export default SignUpPage;
