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
import { signup } from "util/http";
import { storeItem } from "util/lib";

export default function Register() {
  const navigate = useNavigate();
  const toast = useToast();
  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function signupHandler() {
    const data: any = { email, password };

    if (!email) {
      toast({
        title: "Email cannot be empty",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    if (!password) {
      toast({
        title: "password cannot be empty",
        description: "",
        status: "warning",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    if (password !== passwordConfirm) {
      toast({
        title: "password do not match",
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
      const response = await signup(data);
      storeItem("token", response.token, 86400000);
      storeItem("user", response.data.user, 86400000);
      ctx.setUser(response.data.user);
      setProgress(80);
      setProgress(100);
      setLoading(false);
      toast({
        title: "Signup successful",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });

      navigate("/auth/confirm");
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
      <AuthWrapper title={true} description={true} link={true} btnText={true}>
        <Box w="100px" position="absolute" top="0" left="0">
          <ImageComponent src="/buxury (1).png" alt="logo" />
        </Box>
        <Flex
          align="center"
          gap="1rem"
          direction="column"
          w={{ lg: "80%" }}
          mx="auto"
        >
          <Heading
            size={{ lg: "lg", md: "md", base: "md" }}
            color="#000"
            textAlign="center"
          >
            Create a new account
          </Heading>
          <Text fontSize="14px" fontWeight="normal" color="#333">
            Or signup using
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
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              label="Email"
              placeholder="Enter email"
              type="email"
            />
            <PasswordInput
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
              label="Password"
            />
            <PasswordInput
              onChange={(e: any) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              label="Confirm Password"
            />
            <Flex w="100%" align="center">
              <Button
                onClick={signupHandler}
                w="100%"
                colorScheme="blue"
                variant="solid"
                isLoading={loading}
                loadingText=""
              >
                Sign Up
              </Button>
            </Flex>
            <Text
              display={{ lg: "none", md: "block", base: "block" }}
              color="#222"
              fontSize={16}
              fontWeight={400}
            >
              Already here?{" "}
              <Link style={{ fontWeight: 500 }} to="/auth/login">
                Login
              </Link>
            </Text>
          </Flex>
        </Flex>
      </AuthWrapper>
    </>
  );
}
