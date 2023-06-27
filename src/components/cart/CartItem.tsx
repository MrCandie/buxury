import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import CartBtn from "components/ui/CartBtn";
import ImageComponent from "components/ui/Image";
import { AiOutlineHeart } from "react-icons/ai";

export default function CartItem() {
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
      <Box w="30%">
        <ImageComponent
          //   fit="contain"
          src="/sneakers.jpeg"
          alt="product"
          height="150px"
        />
      </Box>
      <Flex px="1rem" w="70%" align="start" gap="1rem" direction="column">
        <Heading size={{ lg: "md", md: "md", base: "sm" }}>
          Naked Wolfe Sneakers
        </Heading>
        <Flex align="center" w="100%" justify="space-between">
          <Text fontSize={{ lg: "24px", md: "20px", base: "16px" }}>$120</Text>
          <s>$150</s>
        </Flex>
        <Flex align="center" w="100%" justify="space-between">
          <CartBtn />
          <Button variant="ghost">
            <AiOutlineHeart color="red" fontSize="24px" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
