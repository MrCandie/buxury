import { Button, Flex } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartBtn() {
  return (
    <Flex w="100%" align="start" justify="start">
      <Flex align="center">
        <Button color="#333" variant="solid">
          <MdAdd />
        </Button>
        <Button color="#333" variant="ghost">
          1
        </Button>
        <Button color="#333" variant="solid">
          <AiOutlineMinus />
        </Button>
      </Flex>
    </Flex>
  );
}
