import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CreateProduct from "components/products/CreateProduct";
import ProductList from "components/products/ProductList";
import CreateCoupon from "components/profile/CreateCoupon";
import { useContext, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "util/context";

export default function Products({ store, products, loading, id }: any) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user }: any = useContext(AuthContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex py="1rem" w="100%" align="start" direction="column" gap="1rem">
        {user?.id === store?.userId && (
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
            <Button
              size={{ lg: "md", base: "sm", md: "sm" }}
              onClick={() => setShow(true)}
              colorScheme="green"
              leftIcon={<AddIcon />}
            >
              Create Coupon
            </Button>
          </Flex>
        )}

        <ProductList data={products} loading={loading} />
      </Flex>
      <>
        {user?.id === store?.userId && (
          <CreateProduct isOpen={isOpen} onClose={onClose} id={id} />
        )}
      </>
      {show && <CreateCoupon store={store} show={setShow} />}
    </>
  );
}
