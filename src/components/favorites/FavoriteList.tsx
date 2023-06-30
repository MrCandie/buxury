import { Flex } from "@chakra-ui/react";
import React from "react";
import FavoriteItem from "./FavoriteItem";

export default function FavoriteList({ data }: any) {
  return (
    <Flex
      w="100%"
      align="start"
      direction="column"
      maxHeight={{ lg: "700px", md: "100%", base: "100%" }}
      overflow={{ lg: "scroll" }}
    >
      {data.map((item: any, i: number) => (
        <FavoriteItem key={i} />
      ))}
    </Flex>
  );
}
