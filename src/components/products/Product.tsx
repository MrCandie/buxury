import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import ProductList from "./ProductList";
import { MdAdd } from "react-icons/md";
import CreateProduct from "./CreateProduct";
import Wrapper from "components/ui/Wrapper";
import Filter from "components/ui/Filter";

export default function Product() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Wrapper>
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        <Filter />
        <Flex px="1rem" align="center" justify="space-between" w="100%">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            All Products
          </Heading>
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            leftIcon={<MdAdd />}
            onClick={onOpen}
          >
            Create
          </Button>
        </Flex>
        <ProductList data={data} />
      </Flex>
      <CreateProduct isOpen={isOpen} onClose={onClose} />
    </Wrapper>
  );
}
