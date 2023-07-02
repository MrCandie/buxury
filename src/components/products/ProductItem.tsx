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

function calcDicountedPrice(price: number, discount: number) {
  return (price * (100 - discount)) / 100;
}

export default function ProductItem({ item }: any) {
  const navigate = useNavigate();
  return (
    <Card
      w={{ lg: "30%", md: "45%", base: "90%" }}
      mx="auto"
      bg="white"
      color="#333"
    >
      <CardHeader>
        <Flex w="100%" align="center" justify="space-between">
          <Badge color="#333">Available</Badge>
          <Radio colorScheme="gray" value="1" />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box
            w="100%"
            cursor="pointer"
            onClick={() => navigate(`/products/${item?.id}`)}
            _hover={{ opacity: "80%" }}
          >
            <ImageComponent
              fit="contain"
              src={item?.image[0] || ""}
              alt="product"
              height="200px"
            />
          </Box>
          <Box
            cursor="pointer"
            onClick={() => navigate(`/products/${item?.id}`)}
          >
            <Heading size="xs" textTransform="uppercase">
              {item?.name}
            </Heading>
            <Text textTransform="capitalize" pt="2" fontSize="sm">
              {item?.description?.slice(0, 30)}
            </Text>
          </Box>
          <Flex align="center" w="100%" justify="space-between">
            <Text fontWeight="medium" fontSize="sm">
              ${calcDicountedPrice(item?.price, item?.discount)}
            </Text>
            <s>${item?.price}</s>
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
