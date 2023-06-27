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
          <Tab color="blue.500">Profile</Tab>
          <Tab color="blue.500">Security</Tab>
          <Tab color="blue.500">Statistics</Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <ProfileDetails />
          </TabPanel>
          <TabPanel>
            <Security />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
