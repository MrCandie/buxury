import {
  HStack,
  PinInput,
  PinInputField,
  Box,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import { useNavigate } from "react-router-dom";

export default function ConfirmSignup({
  setPin1,
  setPin2,
  setPin3,
  setPin4,
  setPin5,
  setPin6,
  valid,
}: any) {
  const navigate = useNavigate();
  return (
    <AuthWrapper>
      <Box w="100px" position="absolute" top="0" left="0">
        <ImageComponent src="/buxury (1).png" alt="logo" />
      </Box>
      <Heading
        size={{ lg: "lg", md: "md", base: "md" }}
        color="#000"
        textAlign="center"
      >
        Confirm Signup
      </Heading>
      <Text
        w="80%"
        mx="auto"
        textAlign="center"
        fontSize="14px"
        fontWeight="normal"
        color="#333"
      >
        Enter the six-digits OTP sent to your mail to complete sign up
      </Text>
      <Flex
        align="center"
        direction="column"
        gap="1.5rem"
        w={{ lg: "60%", md: "100%", base: "100%" }}
        px={{ lg: "0rem", base: "2rem", md: "2rem" }}
      >
        <HStack>
          <PinInput isInvalid={valid} size="lg" otp placeholder="0">
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin1(e.target.value)}
            />
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin2(e.target.value)}
            />
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin3(e.target.value)}
            />
            <Box w="10px" height="5px" bg="#A8A8A7"></Box>
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin4(e.target.value)}
            />
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin5(e.target.value)}
            />
            <PinInputField
              border="1px solid #ccc"
              color="#000"
              onChange={(e) => setPin6(e.target.value)}
            />
          </PinInput>
        </HStack>
        <Flex w="100%" align="center">
          <Button
            onClick={() => navigate("/")}
            w="100%"
            colorScheme="blue"
            variant="solid"
          >
            Complete Signup
          </Button>
        </Flex>
      </Flex>
    </AuthWrapper>
  );
}
