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

export default function CartItem({
  item,
  isLoading,
  setIsLoading,
  isLoading1,
  setIsLoading1,
  setStoreId,
}: any) {
  const navigate = useNavigate();
  const product = item?.product[0];
  console.log(item);

  useEffect(() => {
    setStoreId(product?.storeId);
  }, [product, setStoreId]);

  const toast = useToast();

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
  }, [isLoading, isLoading1, product]);

  async function removeCartHandler(type: string) {
    const data: any = { type: type ? type : "reduce" };

    try {
      setIsLoading1(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await removeCart(item.id, data);
      window.location.reload();
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
      setIsLoading1(false);
    } catch (error: any) {
      setIsLoading1(false);
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
      setIsLoading(true);
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
      window.location.reload();
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
              fontSize={{ lg: "16px", md: "16px", base: "12px" }}
            >
              {product?.name}
            </Heading>
            <Button variant="ghost">
              <AiOutlineHeart color="red" fontSize="24px" />
            </Button>
          </Flex>
          <Flex align="center" w="100%" justify="space-between">
            <Text fontSize={{ lg: "18px", md: "18px", base: "14px" }}>
              $
              {calcDicountedPrice(
                product?.price,
                product?.discount
              )?.toLocaleString()}
            </Text>
            <s style={{ fontSize: "12px" }}>
              ${product?.price?.toLocaleString()}
            </s>
          </Flex>
          <Flex align="center" w="100%" justify="space-between">
            <CartBtn
              addHandler={addCartHandler}
              removeHandler={removeCartHandler}
              loading={isLoading}
              loading1={isLoading1}
              quantity={cart?.quantity}
              disabled={product?.units <= 0}
            />
            <Button
              padding="0px"
              bg="transparent"
              colorScheme="red"
              variant="ghost"
              isLoading={isLoading1}
              loadingText=""
              size={{ lg: "sm", md: "sm", base: "xs" }}
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
