import { Button, Divider, Flex, Heading } from "@chakra-ui/react";
import InputComponent from "components/ui/Input";
import Modal from "components/ui/Modal";
import Overlay from "components/ui/Overlay";
import SelectComponent from "components/ui/Select";
import TextareaComponent from "components/ui/Textarea";

export default function ReportStore({ show }: any) {
  return (
    <>
      <Overlay hide={() => show(false)} />
      <Modal hide={() => show(false)}>
        <Flex align="start" direction="column" gap="1rem" py="1rem">
          <Heading color="#333" size={{ lg: "md", md: "sm", base: "sm" }}>
            Report Store
          </Heading>
          <Divider />
          <SelectComponent
            label="Select Reason"
            options={["Scam", "Bad customer service", "Impersonation"]}
          />

          <TextareaComponent
            label="Description"
            placeholder="we need more details to follow up your report"
            type="number"
          />

          <Flex w="100%" align="center" justify="space-between">
            <Button
              onClick={() => show(false)}
              variant="ghost"
              colorScheme="red"
            >
              Cancel
            </Button>
            <Button variant="solid" colorScheme="red">
              Report
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}
