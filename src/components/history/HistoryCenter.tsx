import { Flex } from "@chakra-ui/react";
import HistoryTitle from "./HistoryTitle";
import HistoryList from "./HistoryList";

export default function HistoryCenter({ list }: any) {
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Flex w="100%" align="start" direction="column">
        <HistoryTitle />
        <HistoryList list={list} />
      </Flex>
    </Flex>
  );
}
