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
  useToast,
  Avatar,
} from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "components/ui/Loader";
import { addCart, addFavorite, checkProduct, deleteFavorite } from "util/http";

function calcDicountedPrice(price: number, discount: number) {
  return (price * (100 - discount)) / 100;
}

export default function ProductItem({ item }: any) {
  const navigate = useNavigate();

  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await checkProduct({ productId: item.id });
        setIsFavorite(response?.exists);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isLoading]);

  async function favoriteHandler() {
    const data = {
      productId: item.id,
    };

    try {
      setIsLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      if (isFavorite) {
        await deleteFavorite(item.id);
      } else {
        await addFavorite(data);
      }
      await "";
      toast({
        title: `Successful`,
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setProgress(80);
      setProgress(100);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setProgress(100);
      toast({
        title: `${error?.response?.data?.message || "something went wrong"}`,
        description: "",
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  }

  async function cartHandler() {
    const data = { productId: item.id };

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await addCart(data);
      toast({
        title: `${item.name} added to your cart`,
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setProgress(80);
      setProgress(100);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setProgress(100);
      toast({
        title: `${error?.response?.data?.message || "something went wrong"}`,
        description: "",
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Card
        w={{ lg: "30%", md: "45%", base: "90%" }}
        mx="auto"
        bg="white"
        color="#333"
      >
        <CardHeader>
          <Flex w="100%" align="center" justify="space-between">
            <Badge color="#333">Available</Badge>
            <Radio
              onChange={(e: any) => {
                if (e.target.checked) {
                  cartHandler();
                }
              }}
              colorScheme="gray"
              value="1"
            />
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
              <Flex align="center" gap="1rem">
                <Text fontWeight="medium" fontSize="sm">
                  ${calcDicountedPrice(item?.price, item?.discount)}
                </Text>
                <s>${item?.price}</s>
              </Flex>
              <Avatar
                cursor="pointer"
                onClick={() => navigate(`/stores/${item?.store[0]?.slug}`)}
                size="xs"
                name={item?.store[0]?.name}
                src={item?.store[0]?.image}
              />
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex align="center" w="100%" justify="space-between">
            <Button
              onClick={() => {
                cartHandler();
                navigate("/cart");
              }}
              colorScheme="blue"
              leftIcon={<AiOutlineShoppingCart />}
              isLoading={loading}
              loadingText=""
            >
              Add to cart
            </Button>
            <Button
              isLoading={isLoading}
              loadingText=""
              onClick={favoriteHandler}
              variant="ghost"
              colorScheme="red"
            >
              {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
}
