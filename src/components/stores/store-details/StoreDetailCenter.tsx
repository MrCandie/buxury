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
import { useState, useEffect, useContext } from "react";
import { getStoreOrders, viewStore } from "util/http";
import { useParams } from "react-router-dom";
import Orders from "./Orders";
import { AuthContext } from "util/context";

export default function StoreDetailCenter() {
  const [store, setStore]: any = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const params = useParams();
  const { user }: any = useContext(AuthContext);

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
  }, [params]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStoreOrders(store?.id);

        setList(response.orders);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [store.id]);

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
          {user?.id === store?.userId && (
            <Tab fontSize={{ lg: 24, md: 20, base: 14 }} color="blue.500">
              Orders
            </Tab>
          )}
        </TabList>

        <TabPanels>
          <TabPanel w="100%">
            <StoreProfile
              orders={list}
              products={products}
              loading={loading}
              store={store}
            />
          </TabPanel>
          <TabPanel>
            <Products
              store={store}
              products={products}
              id={store?.id}
              loading={loading}
            />
          </TabPanel>
          {user?.id === store?.userId && (
            <TabPanel>
              <Orders list={list} id={store?.id} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
