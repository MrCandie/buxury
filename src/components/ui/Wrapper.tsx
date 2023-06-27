import { Flex } from "@chakra-ui/react";
import Menu from "./Menu";
import Header from "./Header";

export default function Wrapper({ children }: any) {
  return (
    <Flex w="100%" align="center" bg="white">
      <Menu />
      <Flex
        align="start"
        w={{ lg: "80%", md: "100%", base: "100%" }}
        direction="column"
        maxHeight="100vh"
        overflow="scroll"
      >
        <Header />
        {children}
      </Flex>
    </Flex>
  );
}
