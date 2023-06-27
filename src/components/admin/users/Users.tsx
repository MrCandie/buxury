import { Flex } from "@chakra-ui/react";
import UserTitle from "./UserTitle";
import UserList from "./UserList";

export default function Users() {
  return (
    <Flex w="100%" align="start" direction="column">
      <UserTitle />
      <UserList />
    </Flex>
  );
}
