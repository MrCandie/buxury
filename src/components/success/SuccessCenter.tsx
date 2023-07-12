import { Flex, Heading, Box, Text, Button, useToast } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { AiOutlineCheck } from "react-icons/ai";
import Review from "./Review";
import { useEffect, useState } from "react";
import { addReview, getOrder } from "util/http";
import { getStoredItem } from "util/lib";
import { useNavigate } from "react-router-dom";

export default function SuccessCenter() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    async function fetchData() {
      try {
        const reference = getStoredItem("transaction-reference");
        const response = await getOrder(reference);
        const products = response.order.order
          ?.map((el: any) => el.product)
          ?.flatMap((el: any) => el);
        setProduct(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function reviewHandler() {
    const data = {
      productId,
      review,
      rating,
    };

    try {
      setLoading(true);
      const response = await addReview(data);
      setLoading(false);
      toast({
        title: "Review added",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setShow(false);
    } catch (error: any) {
      setLoading(false);
      toast({
        title: `${error?.response?.data.message || "something went wrong"}`,
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
      <Flex w="100%" wrap="wrap" align="center" h="100vh">
        <Flex
          w={{ lg: "40%", md: "90%", base: "90%" }}
          mx="auto"
          align="center"
          direction="column"
          gap="1rem"
          justify="center"
          h={{ lg: "100vh", md: "100%", base: "100%" }}
        >
          <Flex
            w="100px"
            h="100px"
            mx="auto"
            bg="green.500"
            borderRadius="100%"
            boxShadow="2xl"
            align="center"
            justify="center"
          >
            <AiOutlineCheck color="white" size={20} />
          </Flex>
          <Heading textAlign="center" size="md" color="#333">
            Purchase Successful
          </Heading>
          <Button
            onClick={() => navigate("/stores")}
            bg="green.500"
            color="#fff"
            variant="solid"
          >
            Back to Store
          </Button>
        </Flex>
        <Flex
          w={{ lg: "60%", md: "90%", base: "90%" }}
          mx="auto"
          align="start"
          h={{ lg: "90vh", md: "100%", base: "100%" }}
          overflow="scroll"
          direction="column"
          gap="1rem"
        >
          {product?.map((el: any, i: number) => (
            <Flex
              w="100%"
              align="center"
              py="1rem"
              borderBottom="1px solid #ccc"
            >
              <Box w="20%">
                <ImageComponent
                  src={el?.image[0]}
                  fit="contain"
                  height="50px"
                />
              </Box>
              <Flex px="1rem" w="80%" align="start" direction="column">
                <Flex w="100%" align="center" justify="space-between">
                  <Heading size="sm" color="#333">
                    {el?.name}
                  </Heading>
                  <Button variant="ghost" colorScheme="teal">
                    Order again
                  </Button>
                </Flex>
                <Flex w="100%" align="center" justify="space-between">
                  <Text fontSize={15} fontWeight="medium" color="#333">
                    ${el?.price}
                  </Text>
                  <Button
                    onClick={() => {
                      setShow(true);
                      setProductId(el?._id);
                    }}
                    variant="ghost"
                    colorScheme="green"
                  >
                    Leave a review
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {show && (
        <Review
          setReview={setReview}
          setRating={setRating}
          onReview={reviewHandler}
          show={setShow}
          loading={loading}
        />
      )}
    </>
  );
}
