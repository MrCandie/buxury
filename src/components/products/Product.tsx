import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import ProductList from "./ProductList";

import Wrapper from "components/ui/Wrapper";
import Filter from "components/ui/Filter";
import { useState, useEffect } from "react";
import { getAllProducts } from "util/http";

export default function Product() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getAllProducts();
        setLoading(false);
        setList(response.data?.reverse());
      } catch (error: any) {
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
            All Products
          </Heading>
        </Flex>

        <ProductList data={list} loading={loading} />
      </Flex>
    </Wrapper>
  );
}
