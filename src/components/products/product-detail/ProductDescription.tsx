import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import CartBtn from "components/ui/CartBtn";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function ProductDescription({ product }: any) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
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
        <Heading textTransform="uppercase" color="#333" size="lg">
          {product?.name}
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
        height={{ lg: "300px", md: "300px", base: "100%" }}
        overflow="scroll"
        bg="white"
      >
        <Text
          color="#333"
          fontSize="15px"
          fontWeight="normal"
          textTransform="capitalize"
        >
          {product?.description}
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
