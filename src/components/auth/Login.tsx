import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import InputComponent from "components/ui/Input";
import PasswordInput from "components/ui/Password";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Login() {
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
        <InputComponent label="Email" placeholder="Enter email" type="email" />
        <PasswordInput label="Password" />
        <Flex w="100%" align="end" justify="end">
          <Link
            style={{ fontWeight: 600, color: "blue", margin: 0 }}
            to="/auth/forgot-password"
          >
            Forgot password?
          </Link>
        </Flex>
        <Flex w="100%" align="center">
          <Button w="100%" colorScheme="blue" variant="solid">
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
            Login
          </Link>
        </Text>
      </Flex>
    </AuthWrapper>
  );
}
