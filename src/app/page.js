"use client";

import { TermsAndCondsModal } from "@/components/TermsAndCondsModal";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { runningPlans } from "../libs/runningPlans";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Container size="500px">
        <Title italic align="center" color="pink">
          Register CMU Marathon 🥈
        </Title>
        <Stack spacing="sm">
          <Group grow align="start">
            <TextInput label="First Name" />
            <TextInput label="Last Name" />
          </Group>
          <TextInput label="Email" />
          <Select
            label="Plan"
            data={runningPlans}
            placeholder="Please select plan..."
          />
          <Radio.Group label="Gender">
            <Radio value="male" label="Male 👨" mb="xs" />
            <Radio value="female" label="Female 👧" />
          </Radio.Group>

          <Checkbox
            label={
              <Text>
                I accept{" "}
                <Anchor onClick={open} href="#">
                  terms and conditions
                </Anchor>
              </Text>
            }
          />
          <Button>Register</Button>
        </Stack>
      </Container>

      <TermsAndCondsModal opened={opened} close={close} />
    </div>
  );
}
