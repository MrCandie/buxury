import { Flex } from "@chakra-ui/react";
import UserTitle from "./UserTitle";
import UserList from "./UserList";
import ChartData from "components/ui/ChartData";
import Filter from "components/ui/Filter";

export default function Users() {
  return (
    <Flex w="100%" align="start" direction="column">
      <Filter />
      <ChartData />
      <UserTitle />
      <UserList />
    </Flex>
  );
}
