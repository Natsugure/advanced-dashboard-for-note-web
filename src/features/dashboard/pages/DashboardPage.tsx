import { Container, Tabs, Title } from "@mantine/core"
import { TrendTabContent } from "../components/TrendTabContent";
import { ArticleTabContent } from "../components/ArticleTabContent";

export function DashboardPage() {
  return (
    <>
      <Container size="lg" mt="xl">
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
      </Container>
    </>
  )
}
