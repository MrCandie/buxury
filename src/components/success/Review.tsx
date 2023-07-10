import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import Rate from "components/ui/Rating";
import TextareaComponent from "components/ui/Textarea";

export default function Review({
  show,
  setReview,
  setRating,
  onReview,
  loading,
}: any) {
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
            <Rate
              onRating={(e: any) => setRating(e)}
              size={35}
              readonly={false}
            />
          </Flex>
          <TextareaComponent
            onChange={(e: any) => setReview(e.target.value)}
            label="Add comment"
            placeholder="Add Comment"
          />
          <Flex w="100%" align="center">
            <Button
              onClick={onReview}
              w="100%"
              variant="solid"
              bg="green.500"
              color="#fff"
              isLoading={loading}
              loadingText=""
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
