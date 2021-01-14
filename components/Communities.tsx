import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import Community from "./Community";
import { CommunitiesType } from "../utils/types/communityType";
import PageHandlers from "./PageHandlers";

interface Props {
  filter: string;
}

const Communities: React.FC<Props> = ({ filter }) => {
  const [page, setPage] = useState<number>(1);

  const fetchCommunities = async (page: number = 1, filter: string = "") => {
    const res = await fetch(
      `${host}/communities?page=${page}&limit=20&filter=${filter}`
    );
    const data: CommunitiesType = await res.json();
    return data;
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    CommunitiesType,
    Error
  >(["communities", page, filter], () => fetchCommunities(page, filter), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <React.Fragment>
      <div className="communities-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <React.Fragment>
            {data.communities.map((community) => (
              <Community
                uuid={community.uuid}
                name={community.name}
                description={community.description}
                count={community.posts.length}
                key={community.uuid}
              />
            ))}
            <PageHandlers
              page={page}
              setPage={setPage}
              isPreviousData={isPreviousData}
              hasMore={data.hasMore}
              width={96}
            />
          </React.Fragment>
        )}
      </div>

      <style jsx>{`
        .communities-container {
          position: relative;
          margin-bottom: 40px;
          min-height: 20px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Communities;
