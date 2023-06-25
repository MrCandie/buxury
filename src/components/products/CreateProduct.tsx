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
} from "@chakra-ui/react";
import FileComponent from "components/ui/File";
import InputComponent from "components/ui/Input";
import PreviewComponent from "components/ui/Preview";
import TextareaComponent from "components/ui/Textarea";
import { useState } from "react";

export default function CreateProduct({ isOpen, onClose }: any) {
  const [images, setImages]: any = useState([]);
  console.log(images);

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="start" direction="column" w="100%" gap="1rem" py="1rem">
            <InputComponent
              label="Product Title"
              placeholder="Enter product name"
            />
            <TextareaComponent
              label="Product Description"
              placeholder="Enter product description"
            />
            <Flex align="center" gap="1rem" w="100%" justify="space-between">
              <InputComponent
                label="Product Price"
                placeholder="Enter product price"
                type="number"
              />
              <InputComponent
                label="Product discount"
                placeholder="10%"
                type="number"
              />
            </Flex>
            <InputComponent
              label="Total units available"
              placeholder="10"
              type="number"
            />
            <FileComponent
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
            <Button variant="solid" colorScheme="blue">
              Create
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
