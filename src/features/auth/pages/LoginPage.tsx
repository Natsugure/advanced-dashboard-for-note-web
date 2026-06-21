import { SignIn } from "@clerk/react";
import { Container, Stack, Title } from "@mantine/core";

export function LoginPage() {
  return (
    <>
      <Container mt="md">
        <Title order={2}>ログインページ</Title>
        <Stack mt="xl" align="center">
          <SignIn routing="path" path="/login" fallbackRedirectUrl="/dashboard" />
        </Stack>
    </Container>
    </>
  )
}