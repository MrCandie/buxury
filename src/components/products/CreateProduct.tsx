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
import TextareaComponent from "components/ui/Textarea";
import { useState } from "react";
import { createProduct, uploadFile } from "util/http";

export default function CreateProduct({ isOpen, onClose, id }: any) {
  const [images, setImages]: any = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [units, setUnits] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function createHandler() {
    try {
      let imageArray: any = [];
      setLoading(true);
      for (let i = 0; i <= images.length - 1; i++) {
        const response = await uploadFile({ image: images[i] });
        imageArray.push(response.data);
      }

      const data = {
        name: title,
        description,
        price,
        discount,
        units,
        image: imageArray?.slice(0, 4),
        storeId: id,
      };

      await createProduct(data);

      toast({
        title: "Product added",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      onClose();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
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
        <ModalHeader color="#333">Create new product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="start" direction="column" w="100%" gap="1rem" py="1rem">
            <InputComponent
              label="Product Title"
              placeholder="Enter product name"
              onChange={(e: any) => setTitle(e.target.value)}
              value={title}
            />
            <TextareaComponent
              label="Product Description"
              placeholder="Enter product description"
              onChange={(e: any) => setDescription(e.target.value)}
              value={description}
            />
            <Flex align="center" gap="1rem" w="100%" justify="space-between">
              <InputComponent
                label="Product Price"
                placeholder="Enter product price"
                type="number"
                onChange={(e: any) => setPrice(e.target.value)}
                value={price}
              />
              <InputComponent
                label="Product discount"
                placeholder="10%"
                type="number"
                onChange={(e: any) => setDiscount(e.target.value)}
                value={discount}
              />
            </Flex>
            <InputComponent
              label="Total units available"
              placeholder="10"
              type="number"
              onChange={(e: any) => setUnits(e.target.value)}
              value={units}
            />
            <FileComponent
              disabled={images.length >= 4}
              title="Product images (up to 5)"
              onChange={(e: any) =>
                setImages((prev: any) => [e.target.files[0], ...prev])
              }
            />
            <Flex align="center" gap="1rem" w="100%" wrap="wrap">
              {images?.map((image: any, i: number) => (
                <PreviewComponent file={image} key={i} />
              ))}
            </Flex>
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
