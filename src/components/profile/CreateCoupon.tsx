import {
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import { useState } from "react";
import { createCoupon } from "util/http";

export default function CreateCoupon({ show, store }: any) {
  const [code, setCode] = useState("");
  const [percentage, setPercentage] = useState("");
  const [expiry, setExpiry] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  function closeMenu() {
    show(false);
  }

  async function couponHandler() {
    const data = {
      code,
      percentage,
      expiresAt: expiry,
      storeId: store?.id,
    };

    try {
      setLoading(true);
      await createCoupon(data);
      closeMenu();
      toast({
        title: `Coupon created for ${store.name?.toUpperCase()} store`,
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
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
    <>
      <Overlay hide={closeMenu} />
      <Modal hide={closeMenu}>
        <Flex w="100%" align="start" direction="column" gap="1.5rem" py="1rem">
          <Flex w="100%" align="center" justify="space-between">
            <Heading size="md" color="#333" fontWeight={600}>
              Create A Coupon
            </Heading>
            <CloseButton onClick={closeMenu} />
          </Flex>
          <Divider />
          <InputComponent
            onChange={(e: any) => setCode(e.target.value)}
            value={code}
            label="Enter Code"
            placeholder="coupon"
          />
          <InputComponent
            onChange={(e: any) => setPercentage(e.target.value)}
            value={percentage}
            label="Enter Percentage"
            placeholder="10"
          />
          <InputComponent
            onChange={(e: any) => setExpiry(e.target.value)}
            value={expiry}
            type="datetime-local"
            label="Expiry Date"
          />
          <Button
            isLoading={loading}
            loadingText=""
            onClick={couponHandler}
            variant="solid"
            colorScheme="green"
          >
            Submit
          </Button>
        </Flex>
      </Modal>
    </>
  );
}
