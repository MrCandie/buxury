import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function HistoryItem({ index, item }: any) {
  const navigate = useNavigate();

  return (
    <Flex
      py="1rem"
      cursor="pointer"
      bg={index % 2 === 0 ? "gray.100" : ""}
      w="100%"
      align="center"
      onClick={() => navigate(`/history/${item.id}`)}
    >
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        {item?.order[0]?.product[0]?.id?.slice(0, 15)}
      </Text>
      <Text
        textAlign="center"
        w="30%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        {item?.order[0]?.product[0]?.name?.slice(0, 25)}
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        {item?.order[0]?.quantity}
      </Text>
      <Text
        textAlign="center"
        w="15%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        ${item?.price?.toLocaleString()}
      </Text>
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 10 }}
        fontWeight={500}
        color="#000"
      >
        {new Date(item?.createdAt).toLocaleDateString()}
      </Text>
    </Flex>
  );
}
