import { Box, Flex } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import React from "react";
import ProductDescription from "./ProductDescription";

export default function ProductBody() {
  const data = [1, 1, 1, 1];
  return (
    <Flex
      align="center"
      w="100%"
      justify="space-between"
      direction={{ lg: "row", md: "row", base: "column" }}
      gap={{ lg: "0rem", md: "0rem", base: "2rem" }}
    >
      <Flex
        w={{ lg: "50%", md: "50%", base: "100%" }}
        align="start"
        direction="column"
        gap="1rem"
      >
        <Box w="100%">
          <ImageComponent src="/sneakers.jpeg" alt="product" height="500px" />
        </Box>
        <Flex align="center" gap="1rem" w="100%">
          {data.map((item, i) => (
            <Box w="25%" key={i}>
              <ImageComponent
                src="/sneakers.jpeg"
                alt="product"
                height="50px"
                fit="contain"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <ProductDescription />
    </Flex>
  );
}
