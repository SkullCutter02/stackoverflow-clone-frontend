import React from "react";

interface Props {
  spinner: React.MutableRefObject<HTMLDivElement>;
}

const Spinner: React.FC<Props> = ({ spinner }) => {
  return (
    <React.Fragment>
      <div id="spinner" className="smt-spinner-circle" ref={spinner}>
        <div className="smt-spinner" />
      </div>

      <style jsx>{`
        .smt-spinner-circle {
          width: 17px;
          height: 17px;
          position: relative;
          border-radius: 50%;
          margin: 0 auto;
          display: none;
        }

        .smt-spinner {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          border-right: 2px solid rgba(255, 255, 255, 0.6);
          border-top: 2px solid #bababa;
          border-left: 2px solid #dedede;
          border-bottom: 2px solid #ffffff;
          animation: rotate--spinner 1.6s infinite;
        }

        @keyframes rotate--spinner {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Spinner;
