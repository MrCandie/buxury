import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AuthContext } from "util/context";

export default function User({ show }: any) {
  const { user }: any = useContext(AuthContext);
  return (
    <Flex
      style={{
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
      w={{ lg: "80%", md: "100%", base: "100%" }}
      mx="auto"
      align="center"
      justify="center"
      position="relative"
      py="5rem"
    >
      <Box
        bg="white"
        p="1rem"
        borderRadius="100%"
        position="absolute"
        right="0"
        top="0"
        onClick={() => show(true)}
      >
        <AiFillEdit color="#333" cursor="pointer" fontSize={24} />
      </Box>
      <Flex w="100%" wrap="wrap" align="center" justify="space-between">
        <Flex
          align="center"
          justify="center"
          w={{ lg: "30%", md: "100%", base: "100%" }}
        >
          <Avatar name={user?.name} size="2xl" />
        </Flex>

        <Flex
          w={{ lg: "70%", md: "100%", base: "100%" }}
          align="start"
          p={{ lg: "2rem", md: "1rem", base: "1rem" }}
          wrap="wrap"
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
              {user?.name}
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
              {user?.email}
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
              {user?.phone}
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
              {user?.address}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
