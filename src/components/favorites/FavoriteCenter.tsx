import { Flex, Heading } from "@chakra-ui/react";
import Filter from "components/ui/Filter";
import FavoriteList from "./FavoriteList";

export default function FavoriteCenter({ list, loading }: any) {
  const data = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        <Filter />
        <Flex px="1rem" align="center" justify="space-between" w="100%">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            All Products
          </Heading>
        </Flex>
        <FavoriteList loading={loading} data={list} />
      </Flex>
    </Flex>
  );
}
