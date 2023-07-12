import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import HistoryList from "components/history/HistoryList";
import HistoryTitle from "components/history/HistoryTitle";
import { getStoreOrders } from "util/http";

export default function Orders({ id }: any) {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStoreOrders(id);
        console.log(response);
        setList(response.orders);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

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
