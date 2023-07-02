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
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

export default function StoreItem({ item }: any) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <Card
      w={{ lg: "25%", md: "40%", base: "90%" }}
      mx="auto"
      bg="white"
      color="#333"
    >
      <CardHeader>
        <Flex w="100%" align="center" justify="space-between">
          <Badge color="#333">Recommended</Badge>
          <Button variant="ghost" colorScheme="red">
            <AiOutlineHeart />
          </Button>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box
            w="100%"
            cursor="pointer"
            onClick={() => navigate(`/stores/${item?.slug}/products`)}
          >
            <ImageComponent
              fit="contain"
              src={item?.image}
              alt="product"
              height="200px"
            />
          </Box>
          <Box
            cursor="pointer"
            onClick={() => navigate(`/stores/${item?.slug}`)}
          >
            <Heading size="xs" textTransform="uppercase">
              {item.name || <Skeleton />}
            </Heading>
            <Flex w="100%" align="center" direction="row" gap="1rem">
              <Rating
                size={20}
                readonly={true}
                initialValue={item?.ratingsAverage}
              />
              <Text fontSize="14px" color="#333" fontWeight="medium">
                {item.ratingsQuantity} rating
              </Text>
            </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
