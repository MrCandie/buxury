import { Divider, Flex } from "@chakra-ui/react";
import ReviewStat from "./ReviewStat";
import Comments from "./Comments";

export default function Reviews({reviews}:any) {
  return (
    <Flex w="100%" align="start" direction="column">
      <ReviewStat />
      <Divider />
      <Comments reviews={reviews} />
    </Flex>
  );
}
