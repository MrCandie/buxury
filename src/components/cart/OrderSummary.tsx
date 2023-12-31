import { Button, Divider, Flex, Heading, useToast } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import DeliveryAddress from "./DeliverAddress";
import { useEffect, useState } from "react";
import { applyCoupon, createOrder, getTotalAmount, viewCart } from "util/http";
import { storeItem } from "util/lib";

export default function OrderSummary({ loading, loading1, storeId }: any) {
  const [price, setPrice] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [code, setCode] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [address, setAddress]: any = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function applyCouponHandler() {
    const data = {
      code,
      storeId,
    };

    try {
      setLoading2(true);
      const response = await applyCoupon(data);
      setPrice(response?.discountedPrice);
      setSubtotal(response?.total);
      toast({
        title: "Coupon applied",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setLoading2(false);
    } catch (error: any) {
      console.log(error);
      setLoading2(false);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTotalAmount();
        setSubtotal(response.amount);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [loading, loading1]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await viewCart();
        setCart(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function checkoutHandler() {
    const data = {
      order: cart,
      price: price ? String(price) : String(subTotal),
      address,
    };

    if (!address) {
      toast({
        title: "Enter delivery address",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    if (cart.length === 0) {
      toast({
        title: "cart cannot be empty",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await createOrder(data);
      setAddress("");
      storeItem(
        "transaction-reference",
        response.data.data.reference,
        86400000
      );
      window.location.href = response?.data?.data?.authorization_url;

      toast({
        title: "Successful... Redirecting to payment page",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setIsLoading(false);
    } catch (error: any) {
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
    <Flex
      align="start"
      w={{ lg: "30%", md: "100%", base: "100%" }}
      direction="column"
      gap="1rem"
      position={{ lg: "absolute" }}
      top="0"
      right="0"
      p="1rem"
      border="1px solid #ccc"
      maxHeight={{ lg: "700px", md: "100%", base: "100%" }}
      overflow={{ lg: "scroll" }}
    >
      <Heading color="#333" size="md">
        Order Summary
      </Heading>
      <Divider />
      <Flex w="100%" align="center" justify="space-between">
        <Heading color="#333" size="sm">
          SubTotal
        </Heading>
        <Heading color="#333" size="sm">
          ${subTotal?.toLocaleString()}
        </Heading>
      </Flex>
      <Flex w="100%" my="2rem" align="start" direction="column" gap="1rem">
        <InputComponent
          label="Apply Coupon Code"
          placeholder="Apply coupon code here"
          onChange={(e: any) => setCode(e.target.value)}
          value={code}
        />
        <Flex align="center" w="100%">
          <Button
            isLoading={loading2}
            loadingText=""
            onClick={applyCouponHandler}
            w="100%"
            colorScheme="blue"
            variant="solid"
          >
            Apply
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" align="center" justify="space-between">
        <Heading color="#333" size="sm">
          Discount
        </Heading>
        <Heading color="#333" size="sm">
          -${`${price ? (subTotal - price)?.toLocaleString() : 0}`}
        </Heading>
      </Flex>
      <Flex w="100%" align="center" justify="space-between">
        <Heading color="#333" size="sm">
          Total
        </Heading>
        <Heading color="#333" size="sm">
          ${`${price ? price?.toLocaleString() : subTotal?.toLocaleString()}`}
        </Heading>
      </Flex>
      <Divider />
      <DeliveryAddress setAddress={setAddress} />
      <Divider />
      <Button
        onClick={checkoutHandler}
        isLoading={isLoading}
        loadingText=""
        w="100%"
        p="1rem"
        colorScheme="green"
        variant="solid"
      >
        Proceed to checkout
      </Button>
    </Flex>
  );
}
