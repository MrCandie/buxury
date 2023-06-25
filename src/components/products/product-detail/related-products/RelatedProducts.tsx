import { Flex, Heading } from "@chakra-ui/react";
import ProductList from "components/products/ProductList";

export default function RelatedProducts() {
  const data = [1, 1, 1, 1];
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
      <Heading size={{ lg: "lg", md: "md", base: "md" }}>
        Related Products
      </Heading>
      <ProductList data={data} />
    </Flex>
  );
}
