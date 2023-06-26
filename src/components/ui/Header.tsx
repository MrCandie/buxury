import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <Flex
      w="100%"
      px="1rem"
      align="center"
      borderBottom="1px solid #ccc"
      py="1rem"
      justify="space-between"
    >
      <Box display={{ lg: "none", md: "block", base: "block" }}>
        <AiOutlineMenu />
      </Box>
      Buxury
    </Flex>
  );
}
