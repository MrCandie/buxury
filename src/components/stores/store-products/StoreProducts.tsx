import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CreateProduct from "components/products/CreateProduct";
import ProductList from "components/products/ProductList";
import Filter from "components/ui/Filter";
import Wrapper from "components/ui/Wrapper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewStore } from "util/http";

export default function StoreProducts() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [store, setStore]: any = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await viewStore(params.slug);
        setLoading(false);
        setProducts(response?.data?.products);
        setStore(response?.data?.store);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Wrapper>
        <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
          <Filter />
          <Flex px="1rem" align="center" justify="space-between" w="100%">
            <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
              {store?.name} Products
            </Heading>
            <Button
              size={{ base: "sm" }}
              onClick={onOpen}
              colorScheme="green"
              leftIcon={<AddIcon />}
            >
              Upload Product
            </Button>
          </Flex>
          <ProductList data={products} loading={loading} />
        </Flex>
      </Wrapper>
      <CreateProduct id={store?.id} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
