import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import getOtherEmails from "../utils/getOtherEmails";
import { useRouter } from "next/router";



const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();
  const redirect = (id:any) => {
    router.push(`/chat/${id}`);
  }
  const chatList = () => {
    return (chats?.filter(chat => chat?.users.includes(user?.email)).map(chat => 
        <Flex key={Math.random()} p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={() => redirect(chat.id)}>
          <Avatar src="" marginEnd={3} />
          <Text>{getOtherEmails(chat?.users, user)}</Text>
        </Flex>)
    )
  }

  const chatExists = email => chats?.find(chat => chat?.users.includes(email) && chat?.users.includes(user?.email));


  const newChat = async () => {
    const input = prompt("Enter email address");
    if (!chatExists(input)) {
      await addDoc(collection(db, "chats"), { users: [user?.email, input] });
  }
}

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
          <Avatar src={`${user?.photoURL}`} marginEnd={3} />
          <Text>{user?.displayName}</Text>
        </Flex>
        <IconButton aria-label="" size="sm" icon={<CloseIcon />} onClick={() => signOut(auth)}/>
      </Flex>
      <Button m={5} p={4} onClick={() => newChat()}>
        New Chat
      </Button>
      <Flex overflowX="scroll" direction="column" flex={1}>
        {chatList()}

      </Flex>
    </Flex>
  );
};

export default Sidebar;
