import { Button, Divider, Flex, Heading, useToast } from "@chakra-ui/react";
import FileComponent from "components/ui/File";
import InputComponent from "components/ui/Input";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import PreviewComponent from "components/ui/Preview";
import { useState } from "react";
import { updateStore } from "util/http";

export default function EditStore({ show, store }: any) {
  const [name, setName] = useState(store?.name || "");
  const [phone, setPhone] = useState(store?.phone || "");
  const [address, setAddress] = useState(store?.address || "");
  const [logo, setLogo] = useState(store?.logo || "");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function editHandler() {
    const data = { name, phone, address, image: logo };

    try {
      setLoading(true);
      const response = await updateStore(store?.id, data);
      console.log(response);
      show(false);
      toast({
        title: "Store successfully updated",
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
    <>
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex align="start" direction="column" gap="1rem" py="1rem">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            Edit Store
          </Heading>
          <Divider />
          <FileComponent
            title="Change logo"
            onChange={(e: any) => setLogo(e.target.files[0])}
          />
          <Flex w="100%" align="start">
            <PreviewComponent file={logo} />
          </Flex>
          <InputComponent
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            label="Store Name"
            placeholder="Enter Name"
          />

          <InputComponent
            label="Phone Number"
            onChange={(e: any) => setPhone(e.target.value)}
            value={phone}
            placeholder="Enter phone number"
            type="number"
          />
          <InputComponent
            onChange={(e: any) => setAddress(e.target.value)}
            value={address}
            label="Address"
            placeholder="Enter address"
          />
          <Flex w="100%" align="center" justify="space-between">
            <Button
              onClick={() => show(false)}
              variant="ghost"
              colorScheme="red"
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText=""
              onClick={editHandler}
              variant="solid"
              colorScheme="green"
            >
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
