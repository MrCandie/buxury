import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import FileComponent from "components/ui/File";
import InputComponent from "components/ui/Input";
import PreviewComponent from "components/ui/Preview";
import SelectComponent from "components/ui/Select";
import { useState } from "react";
import { createStore } from "util/http";

export default function CreateStore({ isOpen, onClose }: any) {
  const [images, setImages] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [tags, setTags]: any = useState([]);

  const toast = useToast();
  const [loading, setLoading] = useState(false);

  async function createHandler() {
    const data = {
      name,
      email,
      phone,
      address,
      tags,
      image: images,
    };

    try {
      setLoading(true);
      await createStore(data);
      toast({
        title: "Store successfully created",
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
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader color="#333">Create new store</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="start" direction="column" w="100%" gap="1rem" py="1rem">
            <FileComponent
              title="Store Logo"
              multiple={false}
              onChange={(e: any) => setImages(e.target.files[0])}
            />
            <Flex w="100%">
              <PreviewComponent file={images} />
            </Flex>
            <InputComponent
              onChange={(e: any) => setName(e.target.value)}
              value={name}
              label="Store Name"
              placeholder="Enter store name"
            />
            <InputComponent
              label="Contact Email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter contact email"
            />

            <InputComponent
              label="Phone Number"
              onChange={(e: any) => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter phone number"
              type="number"
            />
            <InputComponent
              label="Physical Address (OPTIONAL)"
              placeholder="Enter physical address"
              onChange={(e: any) => setAddress(e.target.value)}
              value={address}
            />

            <SelectComponent
              label="Select tags (up to 4)"
              options={["shoes", "clothes"]}
              onChange={(e: any) =>
                setTags((prev: any) => [e.target.value, ...prev])
              }
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Flex align="center" w="100%" justify="space-between">
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText=""
              onClick={createHandler}
              variant="solid"
              colorScheme="blue"
            >
              Create
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
