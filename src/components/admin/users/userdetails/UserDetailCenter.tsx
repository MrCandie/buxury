import { Flex } from "@chakra-ui/react";
import Detail from "./Detail";
import Order from "./Order";

export default function UserDetailCenter() {
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      direction="column"
      gap="1rem"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Detail />
      <Order />
    </Flex>
  );
}
