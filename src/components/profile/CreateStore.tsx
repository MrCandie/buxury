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
import SelectComponent from "components/ui/Select";
import TextareaComponent from "components/ui/Textarea";
import { useState } from "react";

export default function CreateStore({ isOpen, onClose }: any) {
  const [images, setImages] = useState("");

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
              onChange={(e: any) => setImages(e.target.files[0])}
            />
            <PreviewComponent file={images} />
            <InputComponent label="Store Name" placeholder="Enter store name" />
            <TextareaComponent
              label="Contact Email"
              placeholder="Enter contact email"
            />
            <Flex align="center" gap="1rem" w="100%" justify="space-between">
              <InputComponent
                label="Phone Number"
                placeholder="Enter phone number"
                type="number"
              />
              <InputComponent
                label="Physical Address (OPTIONAL)"
                placeholder="Enter physical address"
                type="number"
              />
            </Flex>
            <SelectComponent
              label="Select tags (up to 4)"
              options={["shoes", "clothes"]}
            />
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
