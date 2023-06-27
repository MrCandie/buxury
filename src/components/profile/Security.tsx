import { Button, Flex, Heading } from "@chakra-ui/react";
import PasswordInput from "components/ui/Password";

export default function Security() {
  return (
    <Flex
      w={{ lg: "40%", md: "100%", base: "100%" }}
      align="start"
      direction="column"
      gap="1rem"
    >
      <Heading py="1rem" size={{ lg: "md", md: "sm", base: "sm" }} color="#333">
        Change Password
      </Heading>
      <PasswordInput label="Old password" />
      <PasswordInput label="New password" />
      <PasswordInput label="Confirm New password" />
      <Flex my="2rem" w="100%" align="center" justify="space-between">
        <Button variant="ghost" colorScheme="red">
          Delete Account
        </Button>
        <Button variant="solid" colorScheme="blue">
          Save
        </Button>
      </Flex>
    </Flex>
  );
}
