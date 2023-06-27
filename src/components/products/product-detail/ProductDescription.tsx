import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import CartBtn from "components/ui/CartBtn";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function ProductDescription() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };

  return (
    <Flex
      align="start"
      direction="column"
      gap="1rem"
      bg="white"
      px="1rem"
      height={{ lg: "500px", md: "500px", base: "100%" }}
      w={{ lg: "50%", md: "50%", base: "100%" }}
    >
      <Flex bg="white" align="center" justify="space-between" w="100%">
        <Heading color="#333" size="lg">
          Naked wolfe sneakers
        </Heading>
        <Button variant="ghost">
          <AiOutlineHeart fontSize={24} color="red" />
        </Button>
      </Flex>
      <Flex w="100%" align="center" direction="row">
        <Rating transition={false} size={25} onClick={handleRating} />
      </Flex>

      <Flex
        align="start"
        direction="column"
        maxHeight={{ lg: "300px", md: "300px", base: "100%" }}
        overflow="scroll"
        bg="white"
      >
        <Text
          color="#333"
          fontSize="15px"
          fontWeight="normal"
          textTransform="capitalize"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          color="#333"
          fontSize="15px"
          fontWeight="normal"
          textTransform="capitalize"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Text>
      </Flex>
      <CartBtn />
      <Button
        onClick={() => navigate("/cart")}
        w="100%"
        p="1rem"
        colorScheme="green"
        variant="solid"
      >
        Proceed to cart
      </Button>
    </Flex>
  );
}
