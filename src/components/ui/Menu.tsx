import { Flex, Box, Divider, Text } from "@chakra-ui/react";
import ImageComponent from "./Image";
import NavItem from "./NavItem";
import {
  AiFillShopping,
  AiOutlineHistory,
  AiOutlineLogout,
  AiOutlineHeart,
  AiFillAppstore,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        display={{ lg: "flex", md: "none", base: "none" }}
        w="20%"
        height="100vh"
        borderRight="1px solid #ccc"
        align="start"
        direction="column"
        bg="white"
      >
        <Box w="40%" mx="auto">
          <ImageComponent src="/buxury (1).png" alt="logo" />
        </Box>
        <Divider />
        <Flex w="100%" align="start" direction="column">
          <NavItem
            link="stores"
            title="Stores"
            icon={<AiFillAppstore fontSize={20} />}
          />
          <NavItem
            link="products"
            title="Shop"
            icon={<AiFillShopping fontSize={20} />}
          />
          <NavItem
            link="history"
            title="History"
            icon={<AiOutlineHistory fontSize={20} />}
          />
          <NavItem
            link="favorite"
            title="Favorites"
            icon={<AiOutlineHeart fontSize={20} />}
          />
          <NavItem
            link="profile"
            title="Profile"
            icon={<FaUser fontSize={20} />}
          />
          <NavItem
            link="admin"
            title="Admin"
            icon={<MdAdminPanelSettings fontSize={20} />}
          />
        </Flex>
        <Flex
          py="1rem"
          px="1.5rem"
          cursor="pointer"
          mt="3rem"
          w="100%"
          align="center"
          gap="1rem"
          borderLeft="1px solid #fff"
          onClick={() => navigate("/auth/login")}
        >
          <AiOutlineLogout color="red" fontSize={20} />
          <Text fontSize="16px" fontWeight={600} color="red.600">
            Logout
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
