import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import InputComponent from "components/ui/Input";
import Loader from "components/ui/Loader";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "util/http";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function forgotHandler() {
    if (!email) {
      toast({
        title: "Enter your registered email address",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      await forgotPassword({ email });
      navigate("/auth/check-mail");
      setLoading(false);
      setProgress(80);
      setProgress(100);
      toast({
        title: "Password reset email sent",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } catch (error: any) {
      setProgress(100);
      setLoading(false);
      toast({
        title: `${error?.response?.data.message || "something went wrong"}`,
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
      <Loader progress={progress} setprogress={setProgress} />
      <AuthWrapper>
        <Box w="100px" position="absolute" top="0" left="0">
          <ImageComponent src="/buxury (1).png" alt="logo" />
        </Box>
        <Heading
          size={{ lg: "lg", md: "md", base: "md" }}
          color="#000"
          textAlign="center"
        >
          Forgot Password?
        </Heading>

        <Flex
          align="center"
          direction="column"
          gap="1.5rem"
          w={{ lg: "60%", md: "100%", base: "100%" }}
          px={{ lg: "0rem", base: "2rem", md: "2rem" }}
        >
          <InputComponent
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            label="Email"
            placeholder="Enter email"
            type="email"
          />

          <Flex w="100%" align="center">
            <Button
              onClick={forgotHandler}
              w="100%"
              colorScheme="blue"
              variant="solid"
              isLoading={loading}
              loadingText=""
            >
              Reset Password
            </Button>
          </Flex>
          <Text
            display={{ lg: "none", md: "block", base: "block" }}
            color="#222"
            fontSize={16}
            fontWeight={400}
          >
            <Link style={{ fontWeight: 500 }} to="/auth/register">
              Back to login
            </Link>
          </Text>
        </Flex>
      </AuthWrapper>
    </>
  );
}
