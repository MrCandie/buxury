import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ProfileDetails from "./ProfileDetails";
import Security from "./Security";
import ManageStore from "./ManageStore";

export default function ProfileCenter() {
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
            Security
          </Tab>
          <Tab fontSize={{ lg: 24, md: 20, base: 14 }} color="blue.500">
            Stores
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <ProfileDetails />
          </TabPanel>
          <TabPanel>
            <Security />
          </TabPanel>
          <TabPanel>
            <ManageStore />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
