import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function FavoriteItem() {
  const navigate = useNavigate();
  return (
    <Flex
      cursor="pointer"
      align="center"
      borderBottom="1px solid #ccc"
      gap="1rem"
      w="100%"
      bg="white"
      color="#333"
    >
      <Box w="100px" onClick={() => navigate("/products/gf6t6ffdfgh")}>
        <ImageComponent
          fit="contain"
          src="/sneakers.jpeg"
          alt="product"
          height="70px"
        />
      </Box>
      <Flex px="1rem" w="70%" align="start" gap="0.2rem" direction="column">
        <Heading size={{ lg: "md", md: "md", base: "sm" }}>
          Naked Wolfe Sneakers
        </Heading>
        <Flex align="center" w="100%" justify="space-between">
          <Text
            fontWeight="medium"
            fontSize={{ lg: "22px", md: "20px", base: "16px" }}
          >
            $120
          </Text>
          <s>$150</s>
        </Flex>
        <Flex align="center" w="100%" justify="space-between">
          <Button p="0" colorScheme="red" variant="ghost">
            Delete
          </Button>
          <Button variant="ghost">
            <AiFillHeart color="red" fontSize="24px" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
