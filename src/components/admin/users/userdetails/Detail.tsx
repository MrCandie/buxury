import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Detail() {
  return (
    <Flex
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "1rem" }}
      wrap="wrap"
      style={{
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
    >
      <Flex
        my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
        w={{ lg: "50%", md: "100%", base: "100%" }}
        align="start"
        direction="column"
        gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
      >
        <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
          Name
        </Heading>
        <Text fontSize="16px" fontWeight={500} color="#333">
          John Doe
        </Text>
      </Flex>

      <Flex
        my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
        w={{ lg: "50%", md: "100%", base: "100%" }}
        align="start"
        direction="column"
        gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
      >
        <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
          Email
        </Heading>
        <Text fontSize="16px" fontWeight={500} color="#333">
          johndoe@gmail.com
        </Text>
      </Flex>

      <Flex
        w={{ lg: "50%", md: "100%", base: "100%" }}
        align="start"
        direction="column"
        gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
        my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
      >
        <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
          Phone Number
        </Heading>
        <Text fontSize="16px" fontWeight={500} color="#333">
          090876543345
        </Text>
      </Flex>

      <Flex
        w={{ lg: "50%", md: "100%", base: "100%" }}
        align="start"
        direction="column"
        gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
        my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
      >
        <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
          Address
        </Heading>
        <Text fontSize="16px" fontWeight={500} color="#333">
          No 22, doe street ikeja lagos
        </Text>
      </Flex>
    </Flex>
  );
}
