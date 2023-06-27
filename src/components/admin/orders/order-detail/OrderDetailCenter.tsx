import { Flex } from "@chakra-ui/react";
import ProductDetail from "./ProductDetail";

export default function OrderDetailCenter() {
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      direction="column"
      gap="1rem"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <ProductDetail />
    </Flex>
  );
}
