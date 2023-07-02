import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import CartBtn from "components/ui/CartBtn";
import ImageComponent from "components/ui/Image";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addCart, getCart, removeCart } from "util/http";
import Loader from "components/ui/Loader";

function calcDicountedPrice(price: number, discount: number) {
  return (price * (100 - discount)) / 100;
}

export default function CartItem({ item }: any) {
  const navigate = useNavigate();
  const product = item?.product[0];

  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cart, setCart]: any = useState("");

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

  async function removeCartHandler(type: string) {
    const data: any = { type: type ? type : "reduce" };

    try {
      setLoading1(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await removeCart(item.id, data);
      if (type === "delete") {
        window.location.reload();
      }
      toast({
        title: `${product.name} ${
          type === "reduce" ? "removed" : "deleted"
        } from your cart`,
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
        title: `${product.name} added to your cart`,
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
        align="center"
        borderBottom="1px solid #ccc"
        gap="1rem"
        w="100%"
        bg="white"
        color="#333"
      >
        <Box w="100px" onClick={() => navigate(`/products/${product.id}`)}>
          <ImageComponent
            fit="contain"
            src={product?.image[0]}
            alt="product"
            height="70px"
          />
        </Box>
        <Flex px="1rem" w="70%" align="start" gap="0.2rem" direction="column">
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              textTransform="uppercase"
              size={{ lg: "md", md: "md", base: "xs" }}
            >
              {product?.name}
            </Heading>
            <Button variant="ghost">
              <AiOutlineHeart color="red" fontSize="24px" />
            </Button>
          </Flex>
          <Flex align="center" w="100%" justify="space-between">
            <Text fontSize={{ lg: "18px", md: "18px", base: "14px" }}>
              ${calcDicountedPrice(product?.price, product?.discount)}
            </Text>
            <s style={{ fontSize: "12px" }}>${product?.price}</s>
          </Flex>
          <Flex align="center" w="100%" justify="space-between">
            <CartBtn
              addHandler={addCartHandler}
              removeHandler={removeCartHandler}
              loading={loading}
              loading1={loading1}
              quantity={cart?.quantity}
            />
            <Button
              padding="0px"
              bg="transparent"
              colorScheme="red"
              variant="ghost"
              isLoading={loading1}
              loadingText=""
              onClick={() => removeCartHandler("delete")}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
