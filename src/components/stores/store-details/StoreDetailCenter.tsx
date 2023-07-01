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
import { useState, useEffect } from "react";
import { viewStore } from "util/http";
import { useParams } from "react-router-dom";

export default function StoreDetailCenter() {
  const [store, setStore] = useState("");
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await viewStore(params.slug);
        setStore(response?.store);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
            <StoreProfile store={store} />
          </TabPanel>
          <TabPanel>
            <Products />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
