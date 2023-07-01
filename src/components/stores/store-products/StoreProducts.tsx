import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CreateProduct from "components/products/CreateProduct";
import ProductList from "components/products/ProductList";
import Filter from "components/ui/Filter";
import Wrapper from "components/ui/Wrapper";

export default function StoreProducts() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Wrapper>
        <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
          <Filter />
          <Flex px="1rem" align="center" justify="space-between" w="100%">
            <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
              All Products
            </Heading>
            <Button
              size={{ base: "xs" }}
              onClick={onOpen}
              colorScheme="green"
              leftIcon={<AddIcon />}
            >
              Upload Product
            </Button>
          </Flex>
          <ProductList data={data} />
        </Flex>
      </Wrapper>
      <CreateProduct isOpen={isOpen} onClose={onClose} />
    </>
  );
}
