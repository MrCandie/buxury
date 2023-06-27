import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function Filter() {
  return (
    <Flex py="2rem" px="2rem" w="100%" align="center" justify="space-between">
      <InputGroup w="40%">
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
      <Select w="20%" placeholder="Select option">
        <option value="option1">7 days</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
}
