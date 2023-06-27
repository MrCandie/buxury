import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Users from "./users/Users";
import Orders from "./orders/Orders";

export default function AdminCenter() {
  return (
    <Flex
      h="90vh"
      w="100%"
      align="start"
      p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
    >
      <Tabs colorScheme="blue" w="100%">
        <TabList>
          <Tab fontSize={{ lg: 24, md: 20, base: 8 }} color="blue.500">
            Users
          </Tab>
          <Tab fontSize={{ lg: 24, md: 20, base: 8 }} color="blue.500">
            Order
          </Tab>
          <Tab fontSize={{ lg: 24, md: 20, base: 8 }} color="blue.500">
            Statistics
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <Users />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
