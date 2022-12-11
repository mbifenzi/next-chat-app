import Head from "next/head";
import React from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Center h="100vh">
      <Stack align="center" bgColor="slateGray" rounded="3xl" p={16}>
        <Head>
          <title>Ponx Chat</title>
        </Head>
        <Box
          bgColor="blue.500"
          w="fit-content"
          p={5}
          rounded="3xl"
          boxShadow="md"
        >
          <ChatIcon w="100px" h="100px" color="white" />
        </Box>
        <Button boxShadow="md">Sign in With Google</Button>
      </Stack>
    </Center>
  );
};

export default Login;
