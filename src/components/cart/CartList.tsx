import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function CartList({
  data,
  loading,
  isLoading,
  setIsLoading,
  isLoading1,
  setIsLoading1,
  setStoreId
}: any) {
  const dummyData = [1, 1, 1, 1, 1, 1];
  return (
    <Flex
      w={{ lg: "70%", md: "100%", base: "100%" }}
      align="start"
      direction="column"
      height={{ lg: "700px", md: "100%", base: "100%" }}
      overflow={{ lg: "scroll" }}
    >
      {loading ? (
        <>
          <Flex w="100%" align="start" direction="column">
            {dummyData.map((el: any, i: number) => (
              <Flex
                align="center"
                gap="1rem"
                w="90%"
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
                  noOfLines={1}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Flex>
            ))}
          </Flex>
        </>
      ) : (
        <>
          {data?.length > 0 ? (
            <>
              {data?.map((item: any, i: number) => (
                <CartItem
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  isLoading1={isLoading1}
                  setIsLoading1={setIsLoading1}
                  item={item}
                  key={i}
                  setStoreId={setStoreId}
                />
              ))}
            </>
          ) : (
            <Flex w="100%" align="center" justify="center" h="80vh">
              Your cart is empty
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
}
