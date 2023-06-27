import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function OrderItem({ index }: any) {
  const navigate = useNavigate();
  return (
    <Flex
      py="1rem"
      cursor="pointer"
      bg={index % 2 === 0 ? "gray.100" : ""}
      w="100%"
      align="center"
      onClick={() => navigate("/admin/orders/dhjighgg")}
    >
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        gdhgjfy7y
      </Text>
      <Text
        textAlign="center"
        w="30%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        Naked wolfe
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        4
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        $120
      </Text>
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 10 }}
        fontWeight={500}
        color="#000"
      >
        12/12/2022
      </Text>
    </Flex>
  );
}
