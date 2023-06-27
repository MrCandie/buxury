import { Divider, Flex } from "@chakra-ui/react";
import ProductBody from "./ProductBody";
import Wrapper from "components/ui/Wrapper";
import DetailTab from "./DetailTab";

export default function ProductDetail() {
  return (
    <Wrapper>
      <Flex
        p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
        w="100%"
        align="start"
        direction="column"
        gap="3rem"
        bg="white"
        color="#333"
      >
        <ProductBody />
        <Divider />
        <DetailTab />
      </Flex>
    </Wrapper>
  );
}
