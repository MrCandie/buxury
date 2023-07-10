import { Flex } from "@chakra-ui/react";
import HistoryItem from "./HistoryItem";

export default function HistoryList({ list }: any) {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex w="100%" align="start" direction="column">
      {list?.map((item: any, i: number) => (
        <HistoryItem key={i} item={item} index={i} />
      ))}
    </Flex>
  );
}
