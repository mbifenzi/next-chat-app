import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
      <Avatar src="" marginEnd={3} />
      <Text>khchafikba9lo@gmail.zb</Text>
    </Flex>
  );
};

const Sidebar = () => {
  const [user] = useAuthState(auth);
  return (
    <Flex
      // bg="blue.200"
      w="300px"
      h="100vh"
      borderEnd="1px"
      borderColor="gray.300"
      flexDirection="column"
    >
      <Flex
        w="100%"
        h="81px"
        // bg="red.200"
        align="center"
        justifyContent="space-between"
        p={3}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex align="center">
          <Avatar src={user?.photoURL} marginEnd={3} />
          <Text>{user?.displayName}</Text>
        </Flex>
        <IconButton aria-label="" size="sm" icon={<CloseIcon />} onClick={() => signOut(auth)}/>
      </Flex>
      <Button m={5} p={4}>
        New Chat
      </Button>
      <Flex overflowX="scroll" direction="column" flex={1}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
