import { Flex } from "@chakra-ui/react";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex w="100%" align="start" direction="column">
      {data.map((item: any, i: number) => (
        <OrderItem key={i} index={i} />
      ))}
    </Flex>
  );
}
