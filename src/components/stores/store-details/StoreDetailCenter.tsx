import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import StoreProfile from "./StoreProfile";
import Products from "./Products";

export default function StoreDetailCenter() {
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Tabs colorScheme="blue" w="100%">
        <TabList>
          <Tab fontSize={{ lg: 24, md: 20, base: 14 }} color="blue.500">
            Profile
          </Tab>
          <Tab fontSize={{ lg: 24, md: 20, base: 14 }} color="blue.500">
            Products
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <StoreProfile />
          </TabPanel>
          <TabPanel>
            <Products />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
