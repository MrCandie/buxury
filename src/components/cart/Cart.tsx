import { Divider, Flex, Heading } from "@chakra-ui/react";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
      <Heading size={{ base: "md", md: "md", lg: "lg" }}>Shopping Cart</Heading>
      <Divider />
      <Flex
        w={{ lg: "100%", md: "100%", base: "100%" }}
        align="center"
        gap="1rem"
        wrap="wrap"
        justify="space-between"
        position="relative"
      >
        <CartList />
        <OrderSummary />
      </Flex>
    </Flex>
  );
}
