import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AuthWrapper({
  children,
  text,
  description,
  btnText,
  title,
  link,
}: any) {
  return (
    <Flex
      bg="#fff"
      color="#333s"
      w="100%"
      align="center"
      justify="center"
      height="100vh"
      position="relative"
    >
      <Flex
        w={{ lg: "60%", md: "100%", base: "100%" }}
        h="100%"
        align="center"
        direction="column"
        justify="center"
        gap="1rem"
        bg="white"
      >
        {children}
      </Flex>
      <Flex
        style={{
          background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0,0,255, 0.73)),
        url('/bg.jpg')`,
        }}
        align="center"
        justify="center"
        display={{ lg: "block", md: "none", base: "none" }}
        w="40%"
        h="100vh"
      >
        <Flex
          w="100%"
          align="center"
          justify="center"
          direction="column"
          gap="1rem"
          h="100%"
        >
          <Heading color="#fff" size={{ lg: "lg", md: "md", base: "sm" }}>
            {title ? "Already here" : "New Here"}
          </Heading>
          <Text color="#fff" fontSize="18px" fontWeight="500">
            {description
              ? "Login and continue enjoying seamless shopping experience"
              : "Sign up and enjoy seamless shopping experience"}
          </Text>
          <Link
            style={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 600,
              borderRadius: 20,
              padding: "8px 16px",
              fontSize: 16,
            }}
            to={link ? "/auth/login" : "/auth/register"}
          >
            {btnText ? "Login" : "Sign Up"}
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
