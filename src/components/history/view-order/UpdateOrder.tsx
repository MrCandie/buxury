import { Button, Flex, useToast } from "@chakra-ui/react";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import SelectComponent from "components/ui/Select";
import { useState } from "react";
import { updateOrder } from "util/http";

export default function UpdateOrder({ show, id }: any) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function updateHandler() {
    const data = { status };

    try {
      setLoading(true);
      await updateOrder(id, data);
      window.location.reload();
      show(false);
      toast({
        title: "Successful",
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
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex w="100%" gap="1.5rem" align="start" direction="column">
          <SelectComponent
            label="Select Status"
            onChange={(e: any) => setStatus(e.target.value)}
            options={["shipped", "arrived"]}
          />
          <Button
            isLoading={loading}
            loadingText=""
            variant="solid"
            onClick={updateHandler}
            w="100%"
            bg="green.500"
            color="white"
          >
            Update
          </Button>
        </Flex>
      </Modal>
      ;
    </>
  );
}
