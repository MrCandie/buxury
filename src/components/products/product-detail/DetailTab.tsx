import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RelatedProducts from "./related-products/RelatedProducts";
import Shipping from "./shipping/Shipping";
import Warranty from "./warranty/Warranty";
import ReturnPolicy from "./return-policy/ReturnPolicy";
import Reviews from "./reviews/Reviews";
import Chat from "./chat/Chat";

export default function DetailTab({ reviews, product }: any) {
  return (
    <Tabs>
      <TabList>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Related Products</Tab>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Warranty</Tab>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Shipping</Tab>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Return Policy</Tab>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Reviews</Tab>
        <Tab fontSize={{ lg: 24, md: 20, base: 8 }}>Chat</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <RelatedProducts />
        </TabPanel>
        <TabPanel>
          <Warranty />
        </TabPanel>
        <TabPanel>
          <Shipping />
        </TabPanel>
        <TabPanel>
          <ReturnPolicy />
        </TabPanel>
        <TabPanel>
          <Reviews product={product} reviews={reviews} />
        </TabPanel>
        <TabPanel>
          <Chat />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
