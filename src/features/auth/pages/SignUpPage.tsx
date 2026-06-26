import { SignUp } from "@clerk/react";
import { Checkbox, Container, Paper, ScrollArea, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { PrivacyPolicyPage } from "../../help/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "../../help/pages/TermsOfServicePage";

export function SignUpPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Container mt="md" mb="xl">
      <Title order={2}>新規登録</Title>
      <Text mt="lg">会員登録には、 利用規約 と プライバシーポリシー への同意が必要です。</Text>
      <Stack mt="xl">
        <Paper withBorder>
          <ScrollArea h={250}>
            <TermsOfServicePage />
          </ScrollArea>
        </Paper>

        <Paper withBorder>
          <ScrollArea h={250}>
            <PrivacyPolicyPage />
          </ScrollArea>
        </Paper>

        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.currentTarget.checked)}
          label={<Text size="sm">利用規約とプライバシーポリシーに同意します</Text>}
        />

        {agreed && (
          <Stack align="center" mt="md">
            <SignUp />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}