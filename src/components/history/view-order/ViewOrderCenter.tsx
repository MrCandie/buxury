import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewOrder } from "util/http";
import TrackOrder from "./TrackOrder";

export default function ViewOrderCenter() {
  const [order, setOrder]: any = useState("");

  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await viewOrder(params.id);
        console.log(response);
        setOrder(response?.order);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Heading
          py="1rem"
          size={{ lg: "md", md: "md", base: "sm" }}
          color="#333"
        >
          Thanks for your patronage
        </Heading>
        <Heading size={{ lg: "md", md: "md", base: "sm" }} color="blue.500">
          Order Summary
        </Heading>
        <Divider />
        <Flex
          w={{ lg: "80%", md: "100%", base: "100%" }}
          mx="auto"
          align="start"
          direction="column"
          p="1rem"
          boxShadow="lg"
          gap="1rem"
        >
          {order?.order?.map((el: any) => (
            <>
              <Flex w="100%" align="start" direction="column" gap="1rem">
                <Flex w="100%" align="center" justify="space-between">
                  <Heading size="sm" color="#333">
                    Quantity
                  </Heading>
                  <Text fontSize="15px" color="#333" fontWeight="normal">
                    x{el?.quantity}
                  </Text>
                </Flex>
                <Flex w="100%" align="center" justify="space-between">
                  <Heading size="sm" color="#333">
                    Product
                  </Heading>
                  <Text fontSize="15px" color="#333" fontWeight="normal">
                    {el?.product[0]?.name}
                  </Text>
                </Flex>
              </Flex>
              <Divider />
            </>
          ))}
          <Flex w="100%" align="center" justify="space-between">
            <Heading size="sm" color="#333">
              Total Price
            </Heading>
            <Text fontSize="15px" color="#333" fontWeight="normal">
              ${order?.price?.toLocaleString()}
            </Text>
          </Flex>
          <Flex w="100%" align="center" justify="space-between">
            <Heading size="sm" color="#333">
              Delivery Address
            </Heading>
            <Text
              textTransform="capitalize"
              fontSize="15px"
              color="#333"
              fontWeight="normal"
            >
              {order?.address}
            </Text>
          </Flex>
        </Flex>
        <Heading size={{ lg: "md", md: "md", base: "sm" }} color="blue.600">
          Track Order
        </Heading>
        <TrackOrder />
      </Flex>
    </Flex>
  );
}
