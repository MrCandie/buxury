import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import Loader from "components/ui/Loader";
import PasswordInput from "components/ui/Password";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "util/http";

export default function ResetPassword() {
  const navigate = useNavigate();
  const toast = useToast();
  const params = useParams();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function resetHandler() {
    const data = {
      password,
      passwordConfirm,
      token: params.token,
    };

    if (!password) {
      toast({
        title: "Passowrd cannot be empty",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    if (!passwordConfirm && password !== passwordConfirm) {
      toast({
        title: "Password do not match",
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
      await resetPassword(data);
      toast({
        title: "Password reset successful",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      navigate("/auth/login");
      setProgress(80);
      setProgress(100);
      setLoading(false);
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
          Reset Password?
        </Heading>

        <Flex
          align="center"
          direction="column"
          gap="1.5rem"
          w={{ lg: "60%", md: "100%", base: "100%" }}
          px={{ lg: "0rem", base: "2rem", md: "2rem" }}
        >
          <PasswordInput
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            label="New Password"
          />
          <PasswordInput
            onChange={(e: any) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            label="Confirm New Password"
          />

          <Flex w="100%" align="center">
            <Button
              onClick={resetHandler}
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
