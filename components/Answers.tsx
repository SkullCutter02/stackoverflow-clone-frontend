import React from "react";

import { QuestionType } from "../utils/types/individualQuestionType";
import Answer from "./Answer";

interface Props {
  question: QuestionType;
}

const Answers: React.FC<Props> = ({ question }) => {
  return (
    <React.Fragment>
      <div className="answers-container">
        {question.comments
          .sort((a, b) => b.votes - a.votes)
          .map((comment) => (
            <Answer comment={comment} key={comment.uuid} />
          ))}
      </div>

      <style jsx>{`
        .answers-container {
          width: 85%;
          margin: 0 auto 70px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Answers;
