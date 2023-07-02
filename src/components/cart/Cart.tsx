import { Divider, Flex, Heading } from "@chakra-ui/react";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import Wrapper from "components/ui/Wrapper";
import { useState, useEffect } from "react";
import { viewCart } from "util/http";

export default function Cart() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await viewCart();
        setLoading(false);
        setList(response?.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Flex
        p="2rem"
        w="100%"
        align="start"
        bg="white"
        direction="column"
        gap="1rem"
      >
        <Heading color="#333" size={{ base: "md", md: "md", lg: "lg" }}>
          Shopping Cart
        </Heading>
        <Divider />
        <Flex
          w={{ lg: "100%", md: "100%", base: "100%" }}
          align="center"
          gap="1rem"
          wrap="wrap"
          justify="space-between"
          position="relative"
        >
          <CartList loading={loading} data={list} />
          <OrderSummary />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
