import { Flex } from "@chakra-ui/react";
import ChartData from "components/ui/ChartData";
import Filter from "components/ui/Filter";
import OrderTitle from "./OrderTitle";
import OrderList from "./OrderList";

export default function Orders() {
  return (
    <Flex w="100%" align="start" direction="column">
      <Filter />
      <ChartData />
      <OrderTitle />
      <OrderList />
    </Flex>
  );
}
