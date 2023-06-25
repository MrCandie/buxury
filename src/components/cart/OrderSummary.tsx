import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import DeliveryAddress from "./DeliverAddress";

export default function OrderSummary() {
  return (
    <Flex
      align="start"
      w={{ lg: "30%", md: "100%", base: "100%" }}
      direction="column"
      gap="1rem"
      position={{ lg: "absolute" }}
      top="0"
      right="0"
      p="1rem"
      border="1px solid #ccc"
      maxHeight="450px"
      overflow="scroll"
    >
      <Heading size="md">Order Summary</Heading>
      <Divider />
      <Flex w="100%" align="center" justify="space-between">
        <Heading size="sm">SubTotal</Heading>
        <Heading size="sm">$1,200</Heading>
      </Flex>
      <Flex w="100%" my="2rem" align="start" direction="column" gap="1rem">
        <InputComponent
          label="Apply Coupon Code"
          placeholder="Apply coupon code here"
        />
        <Flex align="center" w="100%">
          <Button colorScheme="blue" variant="solid">
            Apply
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" align="center" justify="space-between">
        <Heading size="sm">Total</Heading>
        <Heading size="sm">$1,200</Heading>
      </Flex>
      <Divider />
      <DeliveryAddress />
      <Divider />
      <Button w="100%" p="1rem" colorScheme="green" variant="solid">
        Proceed to checkout
      </Button>
    </Flex>
  );
}
