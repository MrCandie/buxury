import { Flex, Heading } from "@chakra-ui/react";
import Wrapper from "components/ui/Wrapper";
import StoreList from "./StoreList";
import Filter from "components/ui/Filter";

export default function Store() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Wrapper>
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        <Filter />
        <Flex px="1rem" align="center" justify="space-between" w="100%">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            All Stores
          </Heading>
        </Flex>
        <StoreList data={data} />
      </Flex>
    </Wrapper>
  );
}
