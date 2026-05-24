import { Container } from "@mantine/core";
import type { ArticleDataPoint } from "../types";
import { ArticleBarChart } from "./ArticleBarChart";
import { ArticleTable } from "./ArticleTable";

interface Props {
  data: ArticleDataPoint[]
}

export function ArticleTabContent({ data }: Props) {
  return (
    <>
      <Container size="lg" mt="xl">
        <ArticleBarChart data={data} />
      </Container>
      <Container size="md" mt="xl">
        <ArticleTable data={data} />
      </Container>
    </>
  )
}
