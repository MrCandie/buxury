import { Flex } from "@chakra-ui/react";
import HistoryItem from "./HistoryItem";

export default function HistoryList() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex w="100%" align="start" direction="column">
      {data.map((item, i) => (
        <HistoryItem key={i} index={i} />
      ))}
    </Flex>
  );
}
