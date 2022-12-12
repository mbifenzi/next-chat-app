import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth);
  if (loading)
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl"/>
        </Center>
      </ChakraProvider>
    );
  if (!user)
    return (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    );
  return (
    <ChakraProvider>
      {/* <Sidebar /> */}
      {/* <Login /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
