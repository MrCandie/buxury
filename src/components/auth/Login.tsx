import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import InputComponent from "components/ui/Input";
import Loader from "components/ui/Loader";
import PasswordInput from "components/ui/Password";
import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "util/context";
import { login } from "util/http";
import { storeItem } from "util/lib";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  async function loginHandler() {
    const data = { email, password };

    if (!email || !password) {
      toast({
        title: "Enter your login details",
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
      const response = await login(data);
      storeItem("token", response.token, 86400000);
      storeItem("user", response.data.user, 86400000);
      setUser(response.data.user);
      navigate("/");
      setLoading(false);
      setProgress(80);
      setProgress(100);
    } catch (error: any) {
      setLoading(false);
      setProgress(100);
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
          Login to your account
        </Heading>
        <Text fontSize="14px" fontWeight="normal" color="#333">
          Or login using
        </Text>
        <Flex align="center" justify="center" gap="1rem">
          <Box p="1.4rem" cursor="pointer" bg="#000" borderRadius="100%">
            <BsGoogle color="#fff" fontSize={22} />
          </Box>
        </Flex>
        <Flex w="80%" mx="auto" justify="center" gap="8px" align="center">
          <Box w="40%" height="2px" bg="#333"></Box>
          <Text fontSize="16px" fontWeight={500} color="#333">
            Or
          </Text>
          <Box w="40%" height="2px" bg="#333"></Box>
        </Flex>
        <Flex
          align="center"
          direction="column"
          gap="1.5rem"
          w={{ lg: "60%", md: "100%", base: "100%" }}
          px={{ lg: "0rem", base: "2rem", md: "2rem" }}
        >
          <InputComponent
            label="Email"
            placeholder="Enter email"
            type="email"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <PasswordInput
            label="Password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
          <Flex w="100%" align="end" justify="end">
            <Link
              style={{ fontWeight: 600, color: "blue", margin: 0 }}
              to="/auth/forgot-password"
            >
              Forgot password?
            </Link>
          </Flex>
          <Flex w="100%" align="center">
            <Button
              isLoading={loading}
              loadingText=""
              onClick={loginHandler}
              w="100%"
              colorScheme="blue"
              variant="solid"
            >
              Sign In
            </Button>
          </Flex>
          <Text
            display={{ lg: "none", md: "block", base: "block" }}
            color="#222"
            fontSize={16}
            fontWeight={400}
          >
            New here?{" "}
            <Link style={{ fontWeight: 500 }} to="/auth/register">
              Sign Up
            </Link>
          </Text>
        </Flex>
      </AuthWrapper>
    </>
  );
}
