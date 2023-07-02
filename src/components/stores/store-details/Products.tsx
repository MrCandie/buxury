import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CreateProduct from "components/products/CreateProduct";
import ProductList from "components/products/ProductList";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Products({ products, loading, id }: any) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        <Flex px="1rem" align="center" justify="space-between" w="100%">
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            leftIcon={<MdAdd />}
            onClick={onOpen}
          >
            Create
          </Button>
          <Link to={`/stores/hjdfjdk/products`}>View All {">"} </Link>
        </Flex>
        <ProductList data={products} loading={loading} />
      </Flex>
      <CreateProduct isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
}
