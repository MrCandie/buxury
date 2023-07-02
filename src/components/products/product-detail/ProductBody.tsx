import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
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

export default function ProductBody({ product, loading }: any) {
  const img = product?.image?.map((el: any, i: number) => {
    return {
      original: el,
      thumbnail: el,
    };
  });

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

  return (
    <>
      {loading ? (
        <Box w="80%" h="40vh" mx="auto" padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle isLoaded={false} size="10" />
          <SkeletonText
            isLoaded={false}
            mt="4"
            noOfLines={6}
            spacing="4"
            skeletonHeight="2"
          />
        </Box>
      ) : (
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
            {product?.image && (
              <ImageGallery
                items={img}
                showPlayButton={false}
                autoPlay={true}
                showNav={false}
                showFullscreenButton={false}
                showBullets={true}
              />
            )}
          </Flex>
          <ProductDescription product={product} />
        </Flex>
      )}
    </>
  );
}
