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
import Orders from "./Orders";

export default function StoreDetailCenter() {
  const [store, setStore]: any = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await viewStore(params.slug);
        setLoading(false);
        setProducts(response?.data?.products);
        setStore(response?.data?.store);
      } catch (error) {
        setLoading(false);
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
          <Tab fontSize={{ lg: 24, md: 20, base: 14 }} color="blue.500">
            Orders
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <StoreProfile loading={loading} store={store} />
          </TabPanel>
          <TabPanel>
            <Products products={products} id={store?.id} loading={loading} />
          </TabPanel>
          <TabPanel>
            <Orders id={store?.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
