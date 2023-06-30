import { Avatar, Box, Flex, useDisclosure } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "util/context";

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const { user }: any = useContext(AuthContext);
  return (
    <>
      <Flex
        w="100%"
        px="1rem"
        align="center"
        borderBottom="1px solid #ccc"
        py="1rem"
        justify="space-between"
      >
        <Flex
          w="100%"
          align={{ lg: "end", md: "center", base: "center" }}
          justify={{ lg: "end", md: "space-between", base: "space-between" }}
        >
          <Box
            onClick={onOpen}
            display={{ lg: "none", md: "block", base: "block" }}
          >
            <AiOutlineMenu fontSize={24} color="#333" />
          </Box>
          <Flex align="center" gap="2rem">
            <Box onClick={() => navigate("/cart")} cursor="pointer">
              <AiOutlineShoppingCart color="#333" fontSize={24} />
            </Box>
            <Avatar
              onClick={() => navigate("/profile")}
              cursor="pointer"
              name={user?.name}
            />
          </Flex>
        </Flex>
      </Flex>
      <SideMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
}
