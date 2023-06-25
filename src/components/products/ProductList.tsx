import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }: any) {
  return (
    <Flex align="center" justify="center" w="100%" gap="1rem" wrap="wrap">
      {data.map((item: any, i: number) => (
        <ProductItem key={i} />
      ))}
    </Flex>
  );
}
