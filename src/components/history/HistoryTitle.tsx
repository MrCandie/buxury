import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function HistoryTitle() {
  return (
    <Flex
      w="100%"
      align="center"
      py="1rem"
      borderTopRadius={16}
      borderBottom="1px solid #ccc"
    >
      <Text
        w="20%"
        textAlign="center"
        fontSize={{ lg: 18, md: "16", base: "12" }}
        fontWeight={600}
        color="#000"
      >
        Product ID
      </Text>
      <Text
        textAlign="center"
        w="30%"
        fontSize={{ lg: 18, md: "16", base: "12" }}
        fontWeight={600}
        color="#000"
      >
        Product Name
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 18, md: "16", base: "12" }}
        fontWeight={600}
        color="#000"
      >
        Quantity
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 18, md: "16", base: "12" }}
        fontWeight={600}
        color="#000"
      >
        Price
      </Text>
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 18, md: "16", base: "12" }}
        fontWeight={600}
        color="#000"
      >
        Date
      </Text>
    </Flex>
  );
}
