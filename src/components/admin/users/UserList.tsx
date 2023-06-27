import { Flex } from "@chakra-ui/react";
import UserItem from "./UserItem";

export default function UserList() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex w="100%" align="start" direction="column">
      {data.map((item: any, i: number) => (
        <UserItem key={i} index={i} />
      ))}
    </Flex>
  );
}
