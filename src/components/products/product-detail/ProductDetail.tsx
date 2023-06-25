import { Divider, Flex } from "@chakra-ui/react";
import ProductBody from "./ProductBody";
import RelatedProducts from "./related-products/RelatedProducts";

export default function ProductDetail() {
  return (
    <Flex
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
      w="100%"
      align="start"
      direction="column"
      gap="3rem"
    >
      <ProductBody />
      <Divider />
      <RelatedProducts />
    </Flex>
  );
}
