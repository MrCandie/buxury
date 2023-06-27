import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function Shipping() {
  return (
    <Flex w="100%" align="center" gap="1rem">
      <Box>
        <MdOutlineLocalShipping color="blue" fontSize={30} />
      </Box>
      <Flex w="80%" align="start" direction="column">
        <Heading size="sm" color="#333">
          Delivery
        </Heading>
        <Text fontSize={16} fontWeight={500} color="#333">
          Estimated delivery time: 1 - 7 days
        </Text>
      </Flex>
    </Flex>
  );
}
