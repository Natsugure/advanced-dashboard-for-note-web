import { Container, Tabs, Title } from "@mantine/core"
import { useDashboardData } from "../hooks/useDashboardData";
import { TrendTabContent } from "../components/TrendTabContent";
import { ArticleTabContent } from "../components/ArticleTabContent";

export function DashboardPage() {
  const { trendData, articleData } = useDashboardData()

  return (
    <>
      <Container size="lg" mt="xl">
        <Title order={2}>ダッシュボード</Title>
        <Tabs defaultValue="trend" mt="md">
          <Tabs.List>
            <Tabs.Tab value="trend">推移</Tabs.Tab>
            <Tabs.Tab value="article">記事別</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="trend">
            <TrendTabContent data={trendData} />
          </Tabs.Panel>
          <Tabs.Panel value="article">
            <ArticleTabContent data={articleData} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  )
}
