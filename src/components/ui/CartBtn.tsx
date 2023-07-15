import { Button, Flex } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartBtn({
  addHandler,
  removeHandler,
  loading,
  loading1,
  quantity,
  disabled,
}: any) {
  return (
    <Flex w="100%" align="start" justify="start">
      <Flex align="center">
        <Button
          isLoading={loading}
          loadingText=""
          onClick={addHandler}
          size={{ lg: "sm", md: "sm", base: "xs" }}
          color="#333"
          variant="solid"
          isDisabled={disabled}
        >
          <MdAdd />
        </Button>
        <Button
          bg="transparent"
          size={{ lg: "sm", md: "sm", base: "xs" }}
          color="#333"
          variant="ghost"
        >
          {quantity}
        </Button>
        <Button
          isLoading={loading1}
          loadingText=""
          onClick={() => removeHandler("reduce")}
          size={{ lg: "sm", md: "sm", base: "xs" }}
          color="#333"
          variant="solid"
          isDisabled={+quantity === 0}
        >
          <AiOutlineMinus />
        </Button>
      </Flex>
    </Flex>
  );
}
