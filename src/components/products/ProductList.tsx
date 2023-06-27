import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }: any) {
  return (
    <Flex
      align="center"
      justify={{ lg: "space-between", md: "center", base: "center" }}
      w="100%"
      gap="1rem"
      wrap="wrap"
      p={{ lg: "2rem", md: "1rem", base: "0rem" }}
    >
      {data.map((item: any, i: number) => (
        <ProductItem key={i} />
      ))}
    </Flex>
  );
}
