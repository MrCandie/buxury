import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import StoreItem from "./StoreItem";

export default function StoreList({ data, loading }: any) {
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
      {!loading ? (
        <>
          {data?.length > 0 ? (
            <>
              {data.map((item: any, i: number) => (
                <StoreItem item={item} key={i} />
              ))}
            </>
          ) : (
            <Flex w="100%" align="center" justify="center" height="20vh">
              Store empty
            </Flex>
          )}
        </>
      ) : (
        <Flex
          align="center"
          justify={{ lg: "start", md: "center", base: "center" }}
          w="100%"
          gap={{ lg: "2rem", md: "1rem", base: "1rem" }}
          wrap="wrap"
          p={{ lg: "2rem", md: "1rem", base: "0rem" }}
        >
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
        </Flex>
      )}
    </Flex>
  );
}
