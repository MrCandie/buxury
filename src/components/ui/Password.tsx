import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
  showText = false,
}: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isRequired>
      <FormLabel fontWeight="medium" color="#515050">
        {label}
      </FormLabel>
      <InputGroup border="1px solid #ccc" borderRadius="8px" size="md">
        <Input
          pr="4.5rem"
          color="#000"
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Enter password"
          _placeholder={{ color: "gray.500" }}
          focusBorderColor="transparent"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon color="#222" /> : <ViewIcon color="#222" />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {showText && (
        <FormHelperText color="error.900">
          Incorrect password, kindly confirm
        </FormHelperText>
      )}
    </FormControl>
  );
}
