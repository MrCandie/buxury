import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import ImageComponent from "components/ui/Image";
import PasswordInput from "components/ui/Password";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
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
        Reset Password?
      </Heading>

      <Flex
        align="center"
        direction="column"
        gap="1.5rem"
        w={{ lg: "60%", md: "100%", base: "100%" }}
        px={{ lg: "0rem", base: "2rem", md: "2rem" }}
      >
        <PasswordInput label="New Password" />
        <PasswordInput label="Confirm New Password" />

        <Flex w="100%" align="center">
          <Button
            onClick={() => navigate("/auth/login")}
            w="100%"
            colorScheme="blue"
            variant="solid"
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
  );
}
