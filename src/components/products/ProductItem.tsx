import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  Flex,
  Badge,
  Radio,
  Button,
} from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProductItem() {
  const navigate = useNavigate();
  return (
    <Card bg="white" color="#333">
      <CardHeader>
        <Flex w="100%" align="center" justify="space-between">
          <Badge color="#333">Available</Badge>
          <Radio colorScheme="gray" value="1" />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box w="100%">
            <ImageComponent
              fit="contain"
              src="/sneakers.jpeg"
              alt="product"
              height="200px"
            />
          </Box>
          <Box
            cursor="pointer"
            onClick={() => navigate("/products/gf6t6ffdfgh")}
          >
            <Heading size="xs" textTransform="uppercase">
              Naked Wolfe Sneakers
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out this latest naked wolf foot wear...
            </Text>
          </Box>
          <Flex align="center" w="100%" justify="space-between">
            <Text fontWeight="medium" fontSize="sm">
              $250
            </Text>
            <s>$280</s>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex align="center" w="100%" justify="space-between">
          <Button
            onClick={() => navigate("/cart")}
            colorScheme="blue"
            leftIcon={<AiOutlineShoppingCart />}
          >
            Add to cart
          </Button>
          <Button variant="ghost" colorScheme="red">
            <AiOutlineHeart />
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}
