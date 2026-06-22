import { SignUp } from "@clerk/react";
import { Container, Stack, Title } from "@mantine/core";

export function SignUpPage() {
  return (
    <>
    <Container mt="md">
      <Title order={2}>新規登録</Title>
      <Stack mt="xl" align="center">
        <SignUp />
      </Stack>
    </Container>
    </>
  )
}