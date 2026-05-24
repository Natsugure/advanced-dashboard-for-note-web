import { Container, Tabs, Title } from "@mantine/core"
import type { ArticleDataPoint, TrendDataPoint } from "../types";
import { TrendTabContent } from "../components/TrendTabContent";
import { ArticleTabContent } from "../components/ArticleTabContent";

export function DashboardPage() {
  const trendData: TrendDataPoint[] = [
    { date: '2025-03-22', read: 2890, like: 2338, comment: 2452 },
    { date: '2025-03-23', read: 2756, like: 2103, comment: 2402 },
    { date: '2025-03-24', read: 3322, like: 986,  comment: 1821 },
    { date: '2025-03-25', read: 3470, like: 2108, comment: 2809 },
    { date: '2025-03-26', read: 3129, like: 1726, comment: 2290 },
  ]

  const articleData: ArticleDataPoint[] = [
    { title: 'TypeScriptで始めるReact開発',   read: 3470, like: 2108, comment: 2809 },
    { title: 'Next.jsのApp Routerを理解する', read: 2890, like: 1726, comment: 1821 },
    { title: 'Mantineで作るモダンなUI',        read: 2756, like: 986,  comment: 2290 },
    { title: 'OpenAPIで型安全なAPIを構築する', read: 3322, like: 2338, comment: 2452 },
    { title: 'Prismaでデータベースを操作する', read: 3129, like: 2103, comment: 2402 },
  ]

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
