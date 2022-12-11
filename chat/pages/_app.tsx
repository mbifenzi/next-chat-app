import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Sidebar />
      {/* <Login /> */}
      {/* <Component {...pageProps} /> */}
    </ChakraProvider>
  );
}
