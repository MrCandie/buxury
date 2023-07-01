import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import StoreList from "components/stores/StoreList";
import CreateStore from "./CreateStore";

export default function ManageStore() {
  const data = [1, 1, 1, 1];
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex w="100%" align="start" direction="column">
        <Flex w="100%" align="end" justify="end">
          <Button onClick={onOpen} colorScheme="green" leftIcon={<AddIcon />}>
            Create Store
          </Button>
        </Flex>
        <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
          <Flex px="1rem" align="center" justify="space-between" w="100%">
            <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
              My Stores
            </Heading>
          </Flex>
          <StoreList data={data} />
        </Flex>
      </Flex>
      <CreateStore isOpen={isOpen} onClose={onClose} />
    </>
  );
}
