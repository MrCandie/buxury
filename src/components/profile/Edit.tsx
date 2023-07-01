import { Button, Divider, Flex, Heading, useToast } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import { useContext, useState } from "react";
import { AuthContext } from "util/context";
import { updateProfile } from "util/http";
import { storeItem } from "util/lib";

export default function Edit({ show }: any) {
  const { user, setUser }: any = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function editHandler() {
    const data = { name, phone, address };

    try {
      setLoading(true);
      const response = await updateProfile(data);
      storeItem("user", response.data.user, 86400000);
      setUser(response.data.user);
      window.location.reload();
      setLoading(false);
      toast({
        title: "Profile successfully updated",
        description: "",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } catch (error: any) {
      setLoading(false);
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
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex align="start" direction="column" gap="1rem" py="1rem">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            Edit Profile
          </Heading>
          <Divider />
          <InputComponent
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            label="Name"
            placeholder="Enter Name"
          />
          <InputComponent
            label="Email"
            placeholder="Enter email"
            type="email"
            readOnly={true}
            value={user?.email}
          />
          <InputComponent
            onChange={(e: any) => setPhone(e.target.value)}
            value={phone}
            label="Phone Number"
            placeholder="Enter phone number"
            type="number"
          />
          <InputComponent
            onChange={(e: any) => setAddress(e.target.value)}
            value={address}
            label="Address"
            placeholder="Enter address"
          />
          <Flex w="100%" align="center" justify="space-between">
            <Button
              onClick={() => show(false)}
              variant="ghost"
              colorScheme="red"
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText=""
              onClick={editHandler}
              variant="solid"
              colorScheme="green"
            >
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
