import { Avatar, Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import EditStore from "./EditStore";
import ReportStore from "./ReportStore";

export default function StoreProfile({ store }: any) {
  const [show, setShow] = useState(false);
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <Flex
        style={{
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        }}
        w={{ lg: "80%", md: "100%", base: "100%" }}
        mx="auto"
        align="center"
        justify="center"
        position="relative"
        py="5rem"
      >
        <Box
          bg="white"
          p="1rem"
          borderRadius="100%"
          position="absolute"
          right="0"
          top="0"
          onClick={() => setShow(true)}
        >
          <AiFillEdit color="#333" cursor="pointer" fontSize={24} />
        </Box>
        <Flex w="100%" wrap="wrap" align="center" justify="space-between">
          <Flex
            align="center"
            justify="center"
            w={{ lg: "30%", md: "100%", base: "100%" }}
          >
            <Avatar name={store?.name} src={store?.image} size="2xl"></Avatar>
          </Flex>

          <Flex
            w={{ lg: "70%", md: "100%", base: "100%" }}
            align="start"
            p={{ lg: "2rem", md: "1rem", base: "1rem" }}
            wrap="wrap"
          >
            <Flex
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Store Name
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                {store?.name}
              </Text>
            </Flex>

            <Flex
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Contact Email
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                {store?.email}
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Phone Number
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                {store?.phone}
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Physical Address
              </Heading>
              <Text
                fontSize="16px"
                textTransform="capitalize"
                fontWeight={500}
                color="#333"
              >
                {store?.address}
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Total Listed Products
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                50
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Total Orders
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                20
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Rating
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                4.0
              </Text>
            </Flex>

            <Flex
              w={{ lg: "50%", md: "100%", base: "100%" }}
              align="start"
              direction="column"
              gap={{ lg: "1rem", md: "0.5rem", base: "0.3rem" }}
              my={{ lg: "2rem", md: "0.4rem", base: "1rem" }}
            >
              <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
                Join Date
              </Heading>
              <Text fontSize="16px" fontWeight={500} color="#333">
                {new Date(store?.createdAt).toLocaleDateString()}
              </Text>
            </Flex>
            <Flex align="start">
              <Button
                onClick={() => setShowReport(true)}
                variant="ghost"
                colorScheme="red"
              >
                Report Store
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {showReport && <ReportStore show={setShowReport} />}
      {show && <EditStore store={store} show={setShow} />}
    </>
  );
}
