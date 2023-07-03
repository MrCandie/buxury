import { Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import FavoriteItem from "./FavoriteItem";

export default function FavoriteList({ data, loading }: any) {
  const dummyData = [1, 1, 1, 1, 1, 1];
  return (
    <>
      {loading ? (
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
      ) : (
        <Flex
          w="100%"
          align="start"
          direction="column"
          maxHeight={{ lg: "700px", md: "100%", base: "100%" }}
          overflow={{ lg: "scroll" }}
        >
          {data.map((item: any, i: number) => (
            <FavoriteItem item={item} key={i} />
          ))}
        </Flex>
      )}
    </>
  );
}
