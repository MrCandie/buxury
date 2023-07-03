import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import DeliveryAddress from "./DeliverAddress";
import { useEffect, useState } from "react";
import { getTotalAmount } from "util/http";

export default function OrderSummary({ loading, loading1 }: any) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTotalAmount();
        setPrice(response.amount);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [loading, loading1]);

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
      maxHeight={{ lg: "700px", md: "100%", base: "100%" }}
      overflow={{ lg: "scroll" }}
    >
      <Heading color="#333" size="md">
        Order Summary
      </Heading>
      <Divider />
      <Flex w="100%" align="center" justify="space-between">
        <Heading color="#333" size="sm">
          SubTotal
        </Heading>
        <Heading color="#333" size="sm">
          ${price?.toLocaleString()}
        </Heading>
      </Flex>
      <Flex w="100%" my="2rem" align="start" direction="column" gap="1rem">
        <InputComponent
          label="Apply Coupon Code"
          placeholder="Apply coupon code here"
        />
        <Flex align="center" w="100%">
          <Button w="100%" colorScheme="blue" variant="solid">
            Apply
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" align="center" justify="space-between">
        <Heading color="#333" size="sm">
          Total
        </Heading>
        <Heading color="#333" size="sm">
          $0.00
        </Heading>
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
