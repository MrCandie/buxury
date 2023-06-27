import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function ReviewStat() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <Flex py="1rem" w="100%" align="start" direction="column">
      <Flex py="1rem" align="center" gap="8px">
        <Heading size="4xl" color="#333">
          4.4
        </Heading>
        <Text fontSize={16} fontWeight={400} color="#333">
          out of 5
        </Text>
      </Flex>

      <Rating
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
        onClick={handleRating}
        readonly={true}
        initialValue={3.5}
        size={25}
      />
    </Flex>
  );
}
