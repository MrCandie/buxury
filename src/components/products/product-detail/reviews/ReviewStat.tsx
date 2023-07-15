import { Flex, Heading, Text } from "@chakra-ui/react";
import Rate from "components/ui/Rating";

export default function ReviewStat({ product }: any) {
  return (
    <Flex py="1rem" w="100%" align="start" direction="column">
      <Flex py="1rem" align="center" gap="8px">
        <Heading size="4xl" color="#333">
          {product?.ratingsAverage}
        </Heading>
        <Text fontSize={16} fontWeight={400} color="#333">
          out of 5
        </Text>
      </Flex>

      <Rate rating={product?.ratingsAverage} size={25} />
    </Flex>
  );
}
