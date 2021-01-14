import React from "react";

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isPreviousData: boolean;
  hasMore: boolean;
  width: number;
  flex?: "flex-start";
}

const PageHandlers: React.FC<Props> = ({
  page,
  setPage,
  isPreviousData,
  hasMore,
  width,
  flex,
}) => {
  return (
    <React.Fragment>
      <div className="page-handlers">
        <p className="current-page">Current Page: {page}</p>
        <button
          onClick={() => {
            setPage((old) => Math.max(old - 1, 0));
            window.scrollTo(0, -500);
          }}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            if (!isPreviousData && hasMore) {
              setPage((old) => old + 1);
              window.scrollTo(0, -500);
            }
          }}
          disabled={isPreviousData || !hasMore}
        >
          Next Page
        </button>
      </div>

      <style jsx>{`
        .page-handlers {
          width: ${width}%;
          margin: 20px auto;
          display: flex;
          justify-content: ${flex === undefined ? "flex-end" : flex};
        }

        button {
          width: 90px;
          margin: 0 5px;
          font-size: 0.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PageHandlers;
