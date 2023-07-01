import { Flex, Heading } from "@chakra-ui/react";
import ProductList from "components/products/ProductList";
import { Link } from "react-router-dom";

export default function Products() {
  const data = [1, 1, 1, 1, 1];
  return (
    <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
      <Flex px="1rem" align="center" justify="space-between" w="100%">
        <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
          Products
        </Heading>
        <Link to={`/stores/hjdfjdk/products`}>View All {">"} </Link>
      </Flex>
      <ProductList data={data} />
    </Flex>
  );
}
