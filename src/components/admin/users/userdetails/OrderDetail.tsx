import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";

export default function OrderDetail({ show }: any) {
  return (
    <>
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex w="100%" align="start" direction="column" gap="1rem">
          <Heading color="#000" size={{ lg: "md", md: "md", base: "sm" }}>
            Order Details
          </Heading>
          <Divider />
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              w="30%"
              color="#000"
              size={{ lg: "md", md: "md", base: "sm" }}
            >
              Delivery Address:
            </Heading>
            <Text
              w="70%"
              fontSize={16}
              color="#333"
              fontWeight={500}
              textAlign="center"
            >
              no 90, doe street ikeja
            </Text>
          </Flex>
          <Divider />
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              w="30%"
              color="#000"
              size={{ lg: "md", md: "md", base: "sm" }}
            >
              Quantity:
            </Heading>
            <Text
              w="70%"
              fontSize={16}
              color="#333"
              fontWeight={500}
              textAlign="center"
            >
              12
            </Text>
          </Flex>
          <Divider />
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              w="30%"
              color="#000"
              size={{ lg: "md", md: "md", base: "sm" }}
            >
              Product:
            </Heading>
            <Text
              w="70%"
              fontSize={16}
              color="#333"
              fontWeight={500}
              textAlign="center"
            >
              Naked wolfe
            </Text>
          </Flex>
          <Divider />
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              w="30%"
              color="#000"
              size={{ lg: "md", md: "md", base: "sm" }}
            >
              Price:
            </Heading>
            <Text
              w="70%"
              fontSize={16}
              color="#333"
              fontWeight={500}
              textAlign="center"
            >
              $120
            </Text>
          </Flex>
          <Divider />
          <Flex w="100%" align="center" justify="space-between">
            <Heading
              w="30%"
              color="#000"
              size={{ lg: "md", md: "md", base: "sm" }}
            >
              Contact Detail:
            </Heading>
            <Text
              w="70%"
              fontSize={16}
              color="#333"
              fontWeight={500}
              textAlign="center"
            >
              89776545678
            </Text>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
