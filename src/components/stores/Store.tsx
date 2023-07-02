import { Flex, Heading } from "@chakra-ui/react";
import Wrapper from "components/ui/Wrapper";
import StoreList from "./StoreList";
import Filter from "components/ui/Filter";
import { useState, useEffect } from "react";
import { getAllStores } from "util/http";

export default function Store() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getAllStores();
        setLoading(false);
        setList(response?.stores?.reverse());
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        <Filter />
        <Flex px="1rem" align="center" justify="space-between" w="100%">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            All Stores
          </Heading>
        </Flex>
        <StoreList loading={loading} data={list} />
      </Flex>
    </Wrapper>
  );
}
