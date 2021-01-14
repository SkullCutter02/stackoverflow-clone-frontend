import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Layout from "../components/Layout";
import { UserContextProvider } from "../context/UserContext";

import "../styles.css";
import "../hljs-styles.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>
          AskProgramming | The ultimate site to ask for programming help!
        </title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <script>0</script>
          <Layout />
          <Component {...pageProps} />
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
