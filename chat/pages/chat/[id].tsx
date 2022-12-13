import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar, FormControl, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCollectionData, useDocument, useDocumentData } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, orderBy, query, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import getOtherEmails from "../../utils/getOtherEmails";
import { useState } from "react";

const TopBar = ({email}) => {
  return (
    <Flex w="100%" h="81px" bg="gray.100" align="center" p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">{email}</Heading>
    </Flex>
  );
};

const BottomBar = ({id, user}) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e:any) => {
    e.preventDefault();
    console.log(input);
    await addDoc(collection(db, `chats/${id}/messages`), 
    { text: input, sender: user?.email, timestamp: serverTimestamp() });
    setInput("");
  }
  return (
    <FormControl p={3} onSubmit={sendMessage} as="form">
      <Input placeholder="send your message here" value={input} onChange={e => setInput(e.target.value)} />
      <Button type="submit"  hidden> Send </Button>
    </FormControl>
  );
};

const Chat = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const [messages] = useCollectionData (query(collection(db, `chats/${id}/messages`), orderBy("timestamp")));
  const [chat] = useDocumentData (doc(db , "chats", id));
  // console.log(chat);

  const getMessages = () =>
    messages?.map(message => {
      const sender = message?.sender === user?.email;
      // console.log(message?.text);
      return (
        <Flex key={Math.random()} alignSelf={sender ? "flex-end" : "flex-start"} p={3} bg={sender ? "blue.200" : "gray.200"} borderRadius="md" marginY={2}>
          <Text>{message?.text}</Text>
        </Flex>
      )
    });
  
  return (
    <Flex h="100vh">
      <Head>
        <title>Ponx Chat</title>
      </Head>
      <Sidebar />
      <Flex flex={1} flexDirection="column">
        <TopBar email={getOtherEmails(chat?.users, user)} />
        <Flex flex={1} direction="column" pt={4} marginX={5} overflowX="scroll">
          {getMessages()}
        </Flex>
        <BottomBar id={id} user={user} />
      </Flex>
    </Flex>
  );
};

export default Chat;
