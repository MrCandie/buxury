import { Button, Flex } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

export default function CartBtn() {
  return (
    <Flex w="100%" align="start" justify="start">
      <Flex align="center">
        <Button variant="solid">
          <MdAdd />
        </Button>
        <Button variant="ghost">1</Button>
        <Button variant="solid">
          <AiOutlineMinus />
        </Button>
      </Flex>
    </Flex>
  );
}
