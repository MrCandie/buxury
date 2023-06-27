import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Comments() {
  const [rating, setRating] = useState(0);
  const data = [1, 1, 1, 1, 1, 1, 1, 1];

  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
      {data.map((item, i) => (
        <Flex key={i} align="center" w="100%" gap="2.5rem">
          <Flex align="center" gap="1rem">
            <Avatar name="exekiel" />
            <Heading size="sm" color="#333">
              Ezekiel
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
              initialValue={3.5}
              size={25}
            />
            <Text fontSize="16px" color="#333">
              EzekielDeliver was really slow
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
