import { Flex } from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function CartList() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex
      w={{ lg: "70%", md: "100%", base: "100%" }}
      align="start"
      direction="column"
      maxHeight={{ lg: "700px", md: "100%", base: "100%" }}
      overflow={{ lg: "scroll" }}
    >
      {data.map((item: any, i: number) => (
        <CartItem key={i} />
      ))}
    </Flex>
  );
}
