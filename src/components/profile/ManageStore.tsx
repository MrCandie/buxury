import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import StoreList from "components/stores/StoreList";
import CreateStore from "./CreateStore";
import { useEffect, useState } from "react";
import { getUserStores } from "util/http";

export default function ManageStore() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserStores();
        setList(response?.stores);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Flex w="100%" align="start" direction="column">
        <Flex w="100%" align="center" justify="space-between">
          <Button
            size={{ lg: "md", base: "sm", md: "sm" }}
            onClick={onOpen}
            colorScheme="green"
            leftIcon={<AddIcon />}
          >
            Create Store
          </Button>
        </Flex>
        <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
          <Flex px="1rem" align="center" justify="space-between" w="100%">
            <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
              My Stores
            </Heading>
          </Flex>
          <StoreList data={list} />
        </Flex>
      </Flex>
      <CreateStore isOpen={isOpen} onClose={onClose} />
    </>
  );
}
