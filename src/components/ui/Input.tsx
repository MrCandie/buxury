import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function InputComponent({
  label,
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  border,
  p,
  required = true,
  multiple,
  id,
}: any) {
  return (
    <FormControl isRequired={required}>
      <FormLabel fontWeight="medium" color="#515050">
        {label}
      </FormLabel>
      <Input
        id={id}
        readOnly={readOnly ? readOnly : false}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        focusBorderColor="brand.900"
        border={border ? border : "1px solid #ccc"}
        p={p ? p : ""}
        multiple={multiple}
      />
      {false && <FormHelperText>We'll never share your email.</FormHelperText>}
    </FormControl>
  );
}
