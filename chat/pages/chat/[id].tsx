import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar, FormControl, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";

const TopBar = () => {
  return (
    <Flex w="100%" h="81px" bg="gray.100" align="center" p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">Friend@gmail.com</Heading>
    </Flex>
  );
};

const BottomBar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="send your message here"/>
      <Button type="submit"  hidden> Send </Button>
    </FormControl>
  );
};

const Chat = () => {
  return (
    <Flex h="100vh">
      <Head>
        <title>Ponx Chat</title>
      </Head>
      <Sidebar />
      <Flex flex={1} flexDirection="column">
        <TopBar />
        <Flex flex={1} direction="column" pt={4} marginX={5} overflowX="scroll">
            <Flex w="fit-content" minWidth="100px" bg="green.100" p={3} margin={1}  rounded="full">
                <Text>howa test message</Text>
            </Flex>
            <Flex w="fit-content" minWidth="100px" bg="blue.100" p={3} margin={1}  rounded="full" alignSelf="flex-end">
                <Text>ana sift msg</Text>
            </Flex>
            <Flex w="fit-content" minWidth="100px" bg="blue.100" p={3} margin={1}  rounded="full" alignSelf="flex-end">
                <Text>ana sift msg</Text>
            </Flex>
            <Flex w="fit-content" minWidth="100px" bg="blue.100" p={3} margin={1}  rounded="full" alignSelf="flex-end">
                <Text>ana sift msg</Text>
            </Flex>
        </Flex>
        <BottomBar />
      </Flex>
    </Flex>
  );
};

export default Chat;
