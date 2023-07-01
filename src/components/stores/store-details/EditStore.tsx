import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";

export default function EditStore({ show }: any) {
  return (
    <>
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex align="start" direction="column" gap="1rem" py="1rem">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            Edit Store
          </Heading>
          <Divider />
          <InputComponent label="Store Name" placeholder="Enter Name" />

          <InputComponent
            label="Phone Number"
            placeholder="Enter phone number"
            type="number"
          />
          <InputComponent label="Address" placeholder="Enter address" />
          <Flex w="100%" align="center" justify="space-between">
            <Button
              onClick={() => show(false)}
              variant="ghost"
              colorScheme="red"
            >
              Cancel
            </Button>
            <Button variant="solid" colorScheme="green">
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
