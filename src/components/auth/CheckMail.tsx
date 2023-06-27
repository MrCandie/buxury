import { Heading, Text } from "@chakra-ui/react";
import AuthWrapper from "components/ui/AuthWrapper";
import { Link } from "react-router-dom";

export default function CheckMail() {
  return (
    <AuthWrapper>
      <Heading
        size={{ lg: "lg", md: "md", base: "md" }}
        color="#000"
        textAlign="center"
        w="60%"
        mx="auto"
      >
        Kindly check your email to complete your password reset
      </Heading>
      <Text color="#222" fontSize={16} fontWeight={400}>
        <Link style={{ fontWeight: 500, color: "blue" }} to="/auth/login">
          Back to login
        </Link>
      </Text>
    </AuthWrapper>
  );
}
