import { Flex, Heading } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";

export default function DeliveryAddress({ setAddress }: any) {
  return (
    <Flex w="100%" align="start" direction="column" gap="1rem">
      <Heading color="#333" size={{ lg: "md", md: "md", base: "sm" }}>
        Add Delivery Address
      </Heading>
      <InputComponent
        onChange={(e: any) => setAddress(e.target.value.trim())}
        label="Address"
        placeholder="No 4, john doe street"
      />
      {false && (
        <Flex w="100%" align="center" gap="1rem">
          <InputComponent label="State" placeholder="Enter state" />
          <InputComponent label="Country" placeholder="Enter country" />
        </Flex>
      )}
    </Flex>
  );
}
