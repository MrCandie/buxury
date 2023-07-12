import { Box, Flex, Heading } from "@chakra-ui/react";
import { MdOutlinePayment } from "react-icons/md";
import { BsTruck, BsFillHouseFill } from "react-icons/bs";
import { useState } from "react";

export default function TrackOrder() {
  const [status, setStatus] = useState(2);
  return (
    <Flex
      w={{ lg: "80%", md: "100%", base: "100%" }}
      mx="auto"
      align="center"
      justify="space-between"
      p="1rem"
      boxShadow="lg"
      gap="1rem"
      position="relative"
      zIndex={10}
    >
      <Flex
        w="70%"
        h="2px"
        position="absolute"
        top={{ lg: "40%", md: "40%", base: "30%" }}
        left="15%"
        zIndex="-1"
        align="center"
      >
        <Box
          w="50%"
          h="2px"
          bg={status === 2 || status === 3 ? "green.500" : "transparent"}
        ></Box>
        <Box
          bg={status === 3 ? "green.500" : "transparent"}
          w="50%"
          h="2px"
        ></Box>
      </Flex>
      <Flex w="30%" align="center" direction="column" gap="5px">
        <Flex
          align="center"
          border={
            status === 1 || status === 2 || status === 3
              ? "1px solid green"
              : "1px solid #ccc"
          }
          justify="center"
          p="1rem"
          borderRadius="100%"
          bg="white"
        >
          <MdOutlinePayment
            color={
              status === 1 || status === 2 || status === 3 ? "green" : "#333"
            }
            size={24}
          />
        </Flex>
        <Heading
          size={{ lg: "sm", md: "sm", base: "xs" }}
          textAlign="center"
          color={
            status === 1 || status === 2 || status === 3 ? "green" : "#333"
          }
          h={{ lg: "100%", md: "100%", base: "50px" }}
        >
          Payment Confirmed
        </Heading>
      </Flex>

      <Flex w="30%" align="center" direction="column" gap="5px">
        <Flex
          align="center"
          border={
            status === 2 || status === 3 ? "1px solid green" : "1px solid #ccc"
          }
          justify="center"
          p="1rem"
          borderRadius="100%"
          bg="white"
        >
          <BsTruck
            color={status === 2 || status === 3 ? "green" : "#333"}
            size={24}
          />
        </Flex>
        <Heading
          size={{ lg: "sm", md: "sm", base: "xs" }}
          textAlign="center"
          color={status === 2 || status === 3 ? "green" : "#333"}
          h={{ lg: "100%", md: "100%", base: "50px" }}
        >
          Order Shipped
        </Heading>
      </Flex>

      <Flex w="30%" align="center" direction="column" gap="5px">
        <Flex
          align="center"
          border={status === 3 ? "1px solid green" : "1px solid #ccc"}
          justify="center"
          p="1rem"
          borderRadius="100%"
          bg="white"
        >
          <BsFillHouseFill color={status === 3 ? "green" : "#333"} size={24} />
        </Flex>
        <Heading
          size={{ lg: "sm", md: "sm", base: "xs" }}
          textAlign="center"
          color={status === 3 ? "green" : "#333"}
          h={{ lg: "100%", md: "100%", base: "50px" }}
        >
          Order Arrived
        </Heading>
      </Flex>
    </Flex>
  );
}
