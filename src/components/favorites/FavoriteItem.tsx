import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deleteFavorite } from "util/http";
import { useState } from "react";

function calcDicountedPrice(price: number, discount: number) {
  return (price * (100 - discount)) / 100;
}

export default function FavoriteItem({ item }: any) {
  const navigate = useNavigate();
  const product = item?.product[0];
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function deleteFavoriteHandler() {
    try {
      setLoading(true);
      await deleteFavorite(product.id);
      toast({
        title: `Successful`,
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      window.location.reload();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
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
    <Flex
      cursor="pointer"
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
        <Heading size={{ lg: "md", md: "md", base: "sm" }}>
          {product?.name}
        </Heading>
        <Flex align="center" w="100%" justify="space-between">
          <Text
            fontWeight="medium"
            fontSize={{ lg: "22px", md: "20px", base: "16px" }}
          >
            $
            {calcDicountedPrice(
              product?.price,
              product?.discount
            ).toLocaleString()}
          </Text>
          <s>${product?.price?.toLocaleString()}</s>
        </Flex>
        <Flex align="center" w="100%" justify="space-between">
          <Button
            isLoading={loading}
            loadingText=""
            onClick={deleteFavoriteHandler}
            p="0"
            colorScheme="red"
            variant="ghost"
          >
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
