import { SignIn } from "@clerk/react";
import { Title } from "@mantine/core";

export function LoginPage() {
  return (
    <>
      <Title order={2}>ログインページ</Title>
      <SignIn routing="path" path="/login" fallbackRedirectUrl="/dashboard" />
    </>
  )
}