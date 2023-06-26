import { Flex } from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      display={{ lg: "flex", md: "none", base: "none" }}
      w="20%"
      height="100vh"
      borderRight="1px solid #ccc"
    ></Flex>
  );
}
