import { Divider, Flex } from "@chakra-ui/react";
import ProductBody from "./ProductBody";
import Wrapper from "components/ui/Wrapper";
import DetailTab from "./DetailTab";
import { useState, useEffect } from "react";
import { viewProduct } from "util/http";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct]: any = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await viewProduct(params.id);

        setLoading(false);
        setProduct(response?.data?.product);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Flex
        p={{ lg: "2rem", md: "1rem", base: "0.5rem" }}
        w="100%"
        align="start"
        direction="column"
        gap="3rem"
        bg="white"
        color="#333"
      >
        <ProductBody loading={loading} product={product} />
        <Divider />
        <DetailTab reviews={product.reviews} />
      </Flex>
    </Wrapper>
  );
}
