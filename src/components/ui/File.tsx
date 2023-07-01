import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function FileComponent({
  onChange,
  title,
  multiple = true,
}: any) {
  return (
    <FormControl>
      <FormLabel>{title ? title : "Brief Documents"}</FormLabel>
      <FormLabel
        cursor="pointer"
        w="100%"
        htmlFor="file"
        fontWeight="medium"
        color="#515050"
      >
        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="0.5rem"
          w="100%"
          p="1rem"
          border="1px solid #ccc"
        >
          <Box w="2rem" height="2rem" bg="#ccc" borderRadius="100%"></Box>
          <Text color="#7F7E7E" fontSize="14px" fontWeight="light">
            Click to upload or drag and drop
          </Text>
          <Text color="#7F7E7E" fontSize="14px" fontWeight="light">
            PDF, PNG, JPEG, JPG
          </Text>
        </Flex>
      </FormLabel>
      <Input
        id="file"
        display="none"
        type="file"
        name="document_upload"
        onChange={(e) => onChange(e)}
        multiple={multiple}
      />
      {false && <FormHelperText>We'll never share your email.</FormHelperText>}
    </FormControl>
  );
}
