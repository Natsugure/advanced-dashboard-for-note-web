import { useAuth } from "@clerk/react";
import { Button, Center, Group, Stack, Text, Title } from "@mantine/core";
import { Navigate, useNavigate } from "react-router";

export function PromotionPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const navigate = useNavigate()

  if (!isLoaded) return null
  if (isSignedIn) return <Navigate to="/dashboard" />

  return (
    <Center style={{ minHeight: 'calc(100vh - 120px)' }}>
      <Stack align="center" gap="xl" maw={600} px="md">
        <Stack align="center" gap="sm">
          <Title order={1} ta="center">note のダッシュボードで</Title>
          <Title order={1} ta="center" c="teal">執筆データを可視化しよう</Title>
          <Text c="dimmed" size="lg" ta="center" mt="xs">
            ビュー・いいね・コメントの推移をグラフで確認。記事別の反響も一目でわかります。
          </Text>
        </Stack>
        <Group>
          <Button size="lg" onClick={() => navigate('/signup')}>
            新規登録（無料）
          </Button>
          <Button size="lg" variant="default" onClick={() => navigate('/demo')}>
            サンプルを見る
          </Button>
        </Group>
      </Stack>
    </Center>
  )
}
