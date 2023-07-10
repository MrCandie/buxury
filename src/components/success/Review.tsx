import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import Rate from "components/ui/Rating";
import TextareaComponent from "components/ui/Textarea";

export default function Review({ show }: any) {
  return (
    <>
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex w="100%" align="start" direction="column" gap="1rem">
          <Heading size="md" color="#333">
            Leave a review
          </Heading>
          <Divider />
          <Flex w="100%" align="center" justify="center">
            <Rate size={35} readonly={false} />
          </Flex>
          <TextareaComponent label="Add comment" placeholder="Add Comment" />
          <Flex w="100%" align="center">
            <Button w="100%" variant="solid" bg="green.500" color="#fff">
              Submit
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
