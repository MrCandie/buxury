import {
  Box,
  Divider,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import ImageComponent from "./Image";
import {
  AiFillShopping,
  AiOutlineHeart,
  AiOutlineHistory,
  AiOutlineLogout,
  AiFillAppstore,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SideMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="white">
        <DrawerCloseButton />
        <DrawerHeader>
          <Box w="40%" mx="auto">
            <ImageComponent src="/buxury (1).png" alt="logo" />
          </Box>
        </DrawerHeader>

        <DrawerBody padding="0px">
          <Flex
            w="100%"
            borderRight="1px solid #ccc"
            align="start"
            direction="column"
            bg="white"
            py="2rem"
          >
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
