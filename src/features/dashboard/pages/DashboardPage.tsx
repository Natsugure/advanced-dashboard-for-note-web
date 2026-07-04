import { Anchor, Box, Center, Container, EmptyState, Overlay, Tabs, Text, Title } from "@mantine/core"
import { TrendTabContent } from "../components/TrendTabContent";
import { ArticleTabContent } from "../components/ArticleTabContent";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { UserContext } from "@/features/auth/contexts/userContext";
import { useAuth } from "@clerk/react";
import { RxLinkBreak2 } from "react-icons/rx";
import { useCurrentUser } from "@/infrastructures/api/hooks/useCurrentUser";
import { CrxStoreButton } from "@/features/help/components/CrxStoreButton";
import { notifications } from "@mantine/notifications";

export function DashboardPage() {
  const [isPresentTutorialOverlay, setIsPresentTutorialOverlay] = useState(false)
  const { setUser, setIsLoading } = useContext(UserContext)
  const { isLoaded, isSignedIn } = useAuth()
  const { fetchUser } = useCurrentUser()

  useEffect(() => {
    const setUserContext = async () => {
      if (isLoaded && isSignedIn) {
        setIsLoading(true)

        try {
          const res = await fetchUser()
          setUser(res)
          setIsPresentTutorialOverlay(!res)
        } catch(e) {
          console.error(e)
          notifications.show({
            title: 'エラー',
            message: 'ユーザー情報の取得に失敗しました',
            color: "red"
          })
        } finally {
          setIsLoading(false)
        }
      }
    }
    
    void setUserContext()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded])

  return (
    <>
      <Container size="lg" mt="xl">
        <Box pos="relative">
        {isPresentTutorialOverlay && (
          <Overlay zIndex={1001} color="#fff" backgroundOpacity={1} radius="sm">
            <Center h="100%">
              <EmptyState
                icon={<RxLinkBreak2 />}
                title="noteとの連携が完了していません"
                description="統計情報を閲覧するには、Chrome 拡張機能を使って note の統計情報を取得する必要があります。"
              >
                <EmptyState.Actions>
                  <CrxStoreButton size="md" />
                </EmptyState.Actions>
                <Text mt="xl">詳しい使い方は、<Anchor component={Link} to="/help" fw={700}>ヘルプページ</Anchor>をご覧ください。</Text>
              </EmptyState>
            </Center>
          </Overlay>
        )}
        <Title order={2}>ダッシュボード</Title>
        <Tabs defaultValue="trend" mt="md" keepMountedMode="display-none">
          <Tabs.List>
            <Tabs.Tab value="trend">推移</Tabs.Tab>
            <Tabs.Tab value="article">記事別</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="trend" keepMounted>
            <TrendTabContent />
          </Tabs.Panel>
          <Tabs.Panel value="article" keepMounted>
            <ArticleTabContent />
          </Tabs.Panel>
        </Tabs>
        </Box>
      </Container>
    </>
  )
}
