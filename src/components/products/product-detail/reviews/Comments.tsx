import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Comments({ reviews }: any) {
  const [rating, setRating] = useState(0);
  const data = [1, 1, 1, 1, 1, 1, 1, 1];

  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
      {reviews?.reverse().map((item: any, i: number) => (
        <Flex key={i} align="center" w="100%" gap="2.5rem">
          <Flex align="center" gap="1rem">
            <Avatar name={item?.user[0]?.name} />
            <Heading size="sm" color="#333">
              {item?.user[0]?.name}
            </Heading>
          </Flex>
          <Flex align="start" direction="column" gap="4px">
            <Rating
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
              onClick={handleRating}
              readonly={true}
              initialValue={+item?.rating}
              size={25}
            />
            <Text fontSize="16px" color="#333">
              {item?.review}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
