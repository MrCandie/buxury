import { Flex } from "@chakra-ui/react";
import User from "./User";
import Edit from "./Edit";
import { useState } from "react";

export default function ProfileDetails() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex
        h="100%"
        w="100%"
        p={{ lg: "2rem", md: "1rem", base: "0.2rem" }}
        align="center"
        justify="center"
      >
        <User show={setShow} />
      </Flex>
      {show && <Edit show={setShow} />}
    </>
  );
}
