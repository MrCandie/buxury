import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import ProductList from "./ProductList";
import { MdAdd } from "react-icons/md";
import CreateProduct from "./CreateProduct";

export default function Product() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Flex align="center" justify="space-between" w="100%">
          <Heading size={{ lg: "lg", md: "md", base: "md" }}>
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
    </>
  );
}
