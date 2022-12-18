import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "../components/Login";
import { useState } from "react";
import {ContextProvider} from "../context";
import { useContext } from "react";
import { userContext } from "../context";

export default function App({ Component, pageProps }: AppProps) {
  const {username} = userContext();
  console.log(username);

  if (!username)
    {
      return (
          <Login />
      );

    }
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
