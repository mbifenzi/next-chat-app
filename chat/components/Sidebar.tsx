import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";

const Sidebar = () => {
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
          <Avatar src="" marginEnd={3} />
          <Text>Hamid Sma9lo</Text>
        </Flex>
        <IconButton aria-label="" size="sm" icon={<CloseIcon />} />
      </Flex>
      <Button m={5} p={4}>
        New Chat
      </Button>
    </Flex>
  );
};

export default Sidebar;
