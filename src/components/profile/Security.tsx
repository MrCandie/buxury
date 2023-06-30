import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import Loader from "components/ui/Loader";
import PasswordInput from "components/ui/Password";
import { useState } from "react";
import { updatePassword } from "util/http";

export default function Security() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading]: any = useState(false);
  const [progress, setProgress]: any = useState(0);

  const toast = useToast();

  async function updateHandler() {
    const data = { password, oldPassword };

    if (!password || !oldPassword) {
      toast({
        title: "Password cannot be empty",
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
      await updatePassword(data);
      setProgress(80);
      setProgress(100);
      toast({
        title: "Password successfully updated",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setLoading(false);
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
      <Flex
        w={{ lg: "40%", md: "100%", base: "100%" }}
        align="start"
        direction="column"
        gap="1rem"
      >
        <Heading
          py="1rem"
          size={{ lg: "md", md: "sm", base: "sm" }}
          color="#333"
        >
          Change Password
        </Heading>
        <PasswordInput
          onChange={(e: any) => setOldPassword(e.target.value)}
          value={oldPassword}
          label="Old password"
        />
        <PasswordInput
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
          label="New password"
        />
        <PasswordInput
          onChange={(e: any) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          label="Confirm New password"
        />
        <Flex my="2rem" w="100%" align="center" justify="space-between">
          <Button variant="ghost" colorScheme="red">
            Delete Account
          </Button>
          <Button
            isLoading={loading}
            loadingText=""
            onClick={updateHandler}
            variant="solid"
            colorScheme="blue"
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
