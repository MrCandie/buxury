import {
  Avatar,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import CartBtn from "components/ui/CartBtn";
import Loader from "components/ui/Loader";
import Rate from "components/ui/Rating";
import { useState, useEffect } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  addCart,
  addFavorite,
  checkProduct,
  deleteFavorite,
  getCart,
  removeCart,
} from "util/http";
import { MdOutlineCall } from "react-icons/md";

export default function ProductDescription({ product }: any) {
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cart, setCart]: any = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await checkProduct({ productId: product.id });
        setIsFavorite(response?.exists);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isLoading, product]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCart(product.id);
        setCart(response?.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [loading, loading1, product]);

  async function favoriteHandler() {
    const data = {
      productId: product.id,
    };

    try {
      setIsLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      if (isFavorite) {
        await deleteFavorite(product.id);
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

  async function removeCartHandler() {
    const data: any = { type: "reduce" };

    try {
      setLoading1(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await removeCart(cart.id, data);
      toast({
        title: `${product.name} removed from your cart`,
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setProgress(80);
      setProgress(100);
      setLoading1(false);
    } catch (error: any) {
      setLoading1(false);
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

  async function addCartHandler() {
    const data = { productId: product.id };

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await addCart(data);
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
          <Button
            isLoading={isLoading}
            loadingText=""
            onClick={favoriteHandler}
            variant="ghost"
          >
            {isFavorite ? (
              <AiFillHeart fontSize={24} color="red" />
            ) : (
              <AiOutlineHeart fontSize={24} color="red" />
            )}
          </Button>
        </Flex>
        <Flex w="100%" align="center" direction="row" gap="1rem">
          <Rate rating={product?.ratingsAverage} />
          <Text color="#333" fontSize="15px" fontWeight="normal">
            {product?.reviews?.length} Review(s) ({product?.ratingsAverage}{" "}
            rating)
          </Text>
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
        <Flex w="100%" align="center" justify="space-between">
          <CartBtn
            removeHandler={removeCartHandler}
            addHandler={addCartHandler}
            loading={loading}
            loading1={loading1}
            quantity={cart?.quantity || 0}
            disabled={product?.units === 0}
          />
          <Avatar
            size="sm"
            name={product?.store && product?.store[0]?.name}
            src={product?.store && product?.store[0]?.image}
            onClick={() => {
              product?.store && navigate(`/stores/${product?.store[0]?.slug}`);
            }}
            cursor="pointer"
          />
        </Flex>
        <Flex
          w="100%"
          gap="1rem"
          align="center"
          wrap="wrap"
          justify="space-between"
        >
          <Button
            onClick={() => navigate("/cart")}
            w={{ lg: "45%", md: "47s%", base: "100%" }}
            p="1rem"
            colorScheme="green"
            variant="solid"
            leftIcon={<AiOutlineShoppingCart />}
          >
            Proceed to cart
          </Button>
          <Button
            onClick={() => {
              window.location.href = `tel:${product?.store[0]?.phone}`;
            }}
            w={{ lg: "45%", md: "47s%", base: "100%" }}
            p="1rem"
            colorScheme="blue"
            variant="solid"
            leftIcon={<MdOutlineCall />}
          >
            Call Vendor
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
