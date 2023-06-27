import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import OrderDetail from "./OrderDetail";
import { useState } from "react";

export default function Order() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex
        w="100%"
        align="start"
        p={{ lg: "2rem", md: "1rem", base: "1rem" }}
        wrap="wrap"
        direction="column"
        gap="2.5rem"
        style={{
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
      >
        <Heading color="#000" size={{ lg: "lg", md: "md", base: "sm" }}>
          User Orders
        </Heading>
        <Flex w="100%" align="start" direction="column">
          {data.map((item: any, i: number) => (
            <Flex
              onClick={() => setShow(true)}
              cursor="pointer"
              py="1rem"
              align="center"
              key={i}
              w="100%"
            >
              <Box w="20%">
                <ImageComponent
                  height="50px"
                  src="/sneakers.jpeg"
                  fit="contain"
                  alt="order"
                />
              </Box>
              <Flex w="80%" align="center" justify="space-around">
                <Text
                  fontSize={16}
                  color="#333"
                  fontWeight={500}
                  textAlign="center"
                >
                  John Doe
                </Text>
                <Text
                  fontSize={16}
                  color="#333"
                  fontWeight={500}
                  textAlign="center"
                >
                  $120
                </Text>
                <Text
                  fontSize={16}
                  color="#333"
                  fontWeight={500}
                  textAlign="center"
                >
                  12/12/2020
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {show && <OrderDetail show={setShow} />}
    </>
  );
}
