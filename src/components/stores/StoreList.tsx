import { Flex } from "@chakra-ui/react";
import StoreItem from "./StoreItem";

export default function StoreList({ data }: any) {
  return (
    <Flex
      align="center"
      justify={{ lg: "start", md: "center", base: "center" }}
      w="100%"
      gap={{ lg: "2rem", md: "1rem", base: "1rem" }}
      wrap="wrap"
      p={{ lg: "2rem", md: "1rem", base: "0rem" }}
    >
      {data?.length > 0 ? (
        <>
          {data.map((item: any, i: number) => (
            <StoreItem item={item} key={i} />
          ))}
        </>
      ) : (
        <Flex w="100%" align="center" justify="center" height="30vh">
          You haven't created any store
        </Flex>
      )}
    </Flex>
  );
}
