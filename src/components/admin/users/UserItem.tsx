import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UserItem({ index }: any) {
  const navigate = useNavigate();
  return (
    <Flex
      py="1rem"
      cursor="pointer"
      bg={index % 2 !== 0 ? "gray.100" : ""}
      w="100%"
      align="center"
      onClick={() => navigate("/admin/user/efbhhfejnw")}
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
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 12 }}
        fontWeight={500}
        color="#000"
      >
        John doe
      </Text>
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 10 }}
        fontWeight={500}
        color="#000"
      >
        {"johndoe@gmail.com".slice(0, 10)}
      </Text>
      <Text
        textAlign="center"
        w="20%"
        fontSize={{ lg: 16, md: 14, base: 10 }}
        fontWeight={500}
        color="#000"
      >
        {"2349087654323".slice(0, 10)}
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
