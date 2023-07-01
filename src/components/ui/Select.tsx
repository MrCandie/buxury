import {
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

export default function SelectComponent({
  label,
  onChange,
  options,
  value,
}: any) {
  return (
    <>
      <FormControl isRequired>
        <FormLabel fontWeight="medium" color="#515050">
          {label}
        </FormLabel>
        <Select onChange={onChange}>
          {options.map((el: string, i: number) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
