import {
  HStack,
  PinInput,
  PinInputField,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import Loader from "components/ui/Loader";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "util/context";
import { verifyOtp } from "util/http";

export default function ConfirmSignup() {
  const navigate = useNavigate();
  const toast = useToast();
  const { user }: any = useContext(AuthContext);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [countDown, setCountdown]: any = useState(60);

  const token = `${pin1}${pin2}${pin3}${pin4}`;

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown === 0) {
        clearInterval(timer);
        return;
      }

      setCountdown((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [setCountdown, countDown]);

  useEffect(() => {
    if (token.length < 4) {
      setValid(true);
      return;
    } else {
      setValid(false);
    }
  }, [pin1, pin2, pin3, pin4]);

  async function resendToken() {}

  async function confirmHandler() {
    if (!token) {
      setValid(true);
      toast({
        title: "Invalid token",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    } else {
      setValid(false);
    }

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await verifyOtp({ token, userId: user?.id });
      setProgress(80);
      setProgress(100);
      toast({
        title: "Verification successful",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });

      setLoading(false);
      navigate("/");
    } catch (error: any) {
      setProgress(100);
      setLoading(false);
      toast({
        title: `${error?.response?.data?.message || "something went wrong"}`,
        description: "",
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
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
          Enter the four-digits OTP sent to your mail to complete sign up
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

              <PinInputField
                border="1px solid #ccc"
                color="#000"
                onChange={(e) => setPin4(e.target.value)}
              />
            </PinInput>
          </HStack>
          <Flex w="100%" align="center">
            <Button
              onClick={confirmHandler}
              w="100%"
              colorScheme="blue"
              variant="solid"
              isLoading={loading}
              loadingText=""
            >
              Complete Signup
            </Button>
          </Flex>
          <Flex align="center" direction="column" justify="center" gap="0.5rem">
            <Text color="#2E4A49" fontSize="16px" fontWeight="normal">
              Did not receive an email?
            </Text>
            <Button
              variant="ghost"
              onClick={resendToken}
              isDisabled={countDown !== 0}
              style={{ color: "#2BA2DA", fontWeight: "medium" }}
              loadingText=""
              isLoading={loading}
            >
              Click here to resend in {countDown.toString().padStart(2, 0)}
            </Button>
          </Flex>
        </Flex>
      </AuthWrapper>
    </>
  );
}
