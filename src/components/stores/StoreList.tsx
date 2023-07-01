import { Flex } from "@chakra-ui/react";
import StoreItem from "./StoreItem";

export default function StoreList({ data }: any) {
  return (
    <Flex
      align="center"
      justify={{ lg: "space-between", md: "center", base: "center" }}
      w="100%"
      gap="1rem"
      wrap="wrap"
      p={{ lg: "2rem", md: "1rem", base: "0rem" }}
    >
      {data.map((item: any, i: number) => (
        <StoreItem key={i} />
      ))}
    </Flex>
  );
}
