import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

export default function ProductList({ data, loading }: any) {
  const dummyData = [1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex
      align="center"
      justify={{ lg: "start", md: "center", base: "center" }}
      w="100%"
      gap={{ lg: "2rem", md: "1rem", base: "1rem" }}
      wrap="wrap"
      p={{ lg: "2rem", md: "1rem", base: "0rem" }}
    >
      {loading ? (
        <>
          {dummyData.map((el: any, i: number) => (
            <Box
              w={{ lg: "30%", md: "40%", base: "90%" }}
              mx="auto"
              key={i}
              padding="6"
              boxShadow="lg"
              bg="white"
            >
              <SkeletonCircle isLoaded={false} size="10" />
              <SkeletonText
                isLoaded={false}
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          ))}
        </>
      ) : (
        <>
          {data?.length > 0 ? (
            <>
              {data.map((item: any, i: number) => (
                <ProductItem item={item} key={i} />
              ))}
            </>
          ) : (
            <Flex w="100%" align="center" justify="center" h="80vh">
              No products found
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
}
