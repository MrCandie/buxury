import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

export default function TextareaComponent({
  label,
  type,
  value,
  onChange,
  placeholder,
  readOnly,
  border,
  p,
  required = true,
  rows,
}: any) {
  return (
    <FormControl isRequired={required}>
      <FormLabel fontWeight="medium" color="#515050">
        {label}
      </FormLabel>
      <Textarea
        readOnly={readOnly ? readOnly : false}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        focusBorderColor="brand.900"
        border={border ? border : "1px solid #ccc"}
        p={p ? p : ""}
        rows={rows ? rows : 3}
      />
      {false && <FormHelperText>We'll never share your email.</FormHelperText>}
    </FormControl>
  );
}
