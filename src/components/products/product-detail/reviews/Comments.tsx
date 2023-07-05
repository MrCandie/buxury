import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Comments({ reviews }: any) {
  return (
    <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
      {reviews?.reverse().map((item: any, i: number) => (
        <Flex key={i} align="center" w="100%" gap="2.5rem">
          <Flex align="center" gap="1rem">
            <Avatar
              size={{ lg: "sm", md: "sm", base: "xs" }}
              name={item?.user}
            />
            <Flex align="start" direction="column" gap="3px">
              <Heading
                textTransform="capitalize"
                size={{ lg: "sm", md: "xs", base: "xs" }}
                color="#333"
              >
                {item?.user}
              </Heading>
              <Text
                textTransform="capitalize"
                fontSize={{ lg: "14px", md: "12px", base: "8px" }}
                color="#333"
              >
                {new Date(item?.createdAt).toLocaleDateString()}
              </Text>
            </Flex>
          </Flex>
          <Flex align="start" direction="column" gap="4px">
            <Rating
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
              readonly={true}
              initialValue={+item?.rating}
              size={18}
            />
            <Text
              textTransform="capitalize"
              fontSize={{ lg: "16px", md: "14px", base: "13px" }}
              color="#333"
            >
              {item?.review}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
