import { Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import ImageComponent from "components/ui/Image";
import { AiOutlineCheck } from "react-icons/ai";
import Review from "./Review";
import { useState } from "react";

export default function SuccessCenter() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex w="100%" align="center" h="100vh">
        <Flex
          w="40%"
          align="center"
          direction="column"
          gap="1rem"
          justify="center"
          h="100vh"
        >
          <Flex
            w="100px"
            h="100px"
            bg="green.500"
            borderRadius="100%"
            boxShadow="2xl"
            align="center"
            justify="center"
          >
            <AiOutlineCheck color="white" size={20} />
          </Flex>
          <Heading size="md" color="#333">
            Purchase Successful
          </Heading>
        </Flex>
        <Flex
          w="60%"
          align="start"
          h="90vh"
          overflow="scroll"
          direction="column"
          gap="1rem"
        >
          {data.map((el: any, i: number) => (
            <Flex
              w="100%"
              align="center"
              py="1rem"
              borderBottom="1px solid #ccc"
            >
              <Box w="20%">
                <ImageComponent
                  src="/sneakers.jpeg"
                  fit="contain"
                  height="50px"
                />
              </Box>
              <Flex px="1rem" w="80%" align="start" direction="column">
                <Flex w="100%" align="center" justify="space-between">
                  <Heading size="sm" color="#333">
                    Naked Wolfe
                  </Heading>
                  <Button variant="ghost" colorScheme="teal">
                    Order again
                  </Button>
                </Flex>
                <Flex w="100%" align="center" justify="space-between">
                  <Text fontSize={15} fontWeight="medium" color="#333">
                    $100
                  </Text>
                  <Button
                    onClick={() => setShow(true)}
                    variant="ghost"
                    colorScheme="green"
                  >
                    Leave a review
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {show && <Review show={setShow} />}
    </>
  );
}
