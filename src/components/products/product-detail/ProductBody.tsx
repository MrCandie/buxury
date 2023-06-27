import { Box, Flex } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import React from "react";
import ProductDescription from "./ProductDescription";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/sneakers.jpeg",
    thumbnail: "/sneakers.jpeg",
  },
  {
    original: "/sneakers.jpeg",
    thumbnail: "/sneakers.jpeg",
  },
  {
    original: "/sneakers.jpeg",
    thumbnail: "/sneakers.jpeg",
  },
];

export default function ProductBody() {
  const data = [1, 1, 1, 1];
  return (
    <Flex
      align="center"
      w="100%"
      bg="white"
      justify="space-between"
      direction={{ lg: "row", md: "row", base: "column" }}
      gap={{ lg: "0rem", md: "0rem", base: "2rem" }}
    >
      <Flex
        w={{ lg: "50%", md: "50%", base: "100%" }}
        align="center"
        justify="center"
        direction="column"
        gap="1rem"
      >
        <ImageGallery
          items={images}
          showPlayButton={false}
          // autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
        />
      </Flex>
      <ProductDescription />
    </Flex>
  );
}
