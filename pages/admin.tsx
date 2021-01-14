import React, { useState, useContext, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import PageHandlers from "../components/PageHandlers";

import host from "../utils/host";
import { UserContext } from "../context/UserContext";
import { getCookie } from "../utils/functions";

type RequestType = {
  requests: {
    uuid: string;
    name: string;
    link: string;
    createdAt: string;
    updatedAt: string;
  }[];
  hasMore: boolean;
};

const AdminPage = () => {
  const [page, setPage] = useState<number>(1);

  const userContext = useContext(UserContext);
  const queryClient = useQueryClient();

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const fetchRequests = async (page: number) => {
    const res = await fetch(`${host}/requests?page=${page}&limit=20`);
    return await res.json();
  };

  const { isLoading, isError, error, data, isPreviousData } = useQuery<
    RequestType,
    Error
  >(["requests", page], () => fetchRequests(page), {
    keepPreviousData: true,
  });

  const postCommunity = (e) => {
    e.preventDefault();

    if (userContext.user) {
      fetch(`${host}/communities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          uuid: userContext.user.uuid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg) {
            console.log(data.msg);
          } else {
            nameRef.current.value = "";
            descriptionRef.current.value = "";
          }
        });
    }
  };

  const deleteRequest = async (uuid: string) => {
    await fetch(`${host}/requests/${uuid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    });
    await queryClient.prefetchQuery(["requests", page]);
  };

  if (userContext.user === undefined) {
    return <div />;
  }

  return (
    <React.Fragment>
      {userContext.user.role === "god" ? (
        <div className="admin-area-container">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <div className="admin-area">
              <div className="requests-container">
                {data.requests.map((request) => (
                  <div>
                    <p>{request.name}</p>
                    <a href={request.link} style={{ color: "white" }}>
                      {request.link}
                    </a>
                    <button onClick={() => deleteRequest(request.uuid)}>
                      Remove
                    </button>
                  </div>
                ))}
                <PageHandlers
                  page={page}
                  setPage={setPage}
                  isPreviousData={isPreviousData}
                  hasMore={data.hasMore}
                  width={100}
                  flex={"flex-start"}
                />
              </div>
              <form onSubmit={postCommunity}>
                <input
                  type="text"
                  placeholder="Name: "
                  ref={nameRef}
                  required
                />
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Description: "
                  ref={descriptionRef}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="rickroll">
          <img src={"/rick.gif"} alt="rick" />
        </div>
      )}

      <style jsx>{`
        .rickroll {
          margin: 100px auto;
        }

        .rickroll img {
          display: block;
          margin: 0 auto;
        }

        .admin-area {
          margin: 200px 200px;
          display: flex;
          justify-content: space-between;
        }

        form input,
        form textarea {
          display: block;
          resize: none;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AdminPage;
