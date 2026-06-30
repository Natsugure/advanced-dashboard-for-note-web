import { Container, Tabs, Title } from "@mantine/core";
import { DemoBanner } from "../components/DemoBanner";
import { DemoTrendTabContent } from "../components/DemoTrendTabContent";
import { DemoArticleTabContent } from "../components/DemoArticleTabContent";

export function DemoPage() {
  return (
    <>
      <Container size="lg" mt="xl">
        <DemoBanner />
        <Title order={2} mt="xl">ダッシュボード</Title>
        <Tabs defaultValue="trend" mt="md" keepMountedMode="display-none">
          <Tabs.List>
            <Tabs.Tab value="trend">推移</Tabs.Tab>
            <Tabs.Tab value="article">記事別</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="trend" keepMounted>
            <DemoTrendTabContent />
          </Tabs.Panel>
          <Tabs.Panel value="article" keepMounted>
            <DemoArticleTabContent />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  )
}
