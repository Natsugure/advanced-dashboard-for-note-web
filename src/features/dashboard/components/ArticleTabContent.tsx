import { Container, SegmentedControl } from "@mantine/core";
import { useState } from "react";
import type { ArticleDataPoint } from "../types";
import { ArticleBarChart, type Type } from "./ArticleBarChart";
import { ArticleTable } from "./ArticleTable";

const DATA_TYPE_OPTIONS: { label: string; value: Type }[] = [
  { label: "ビュー", value: "read" },
  { label: "スキ", value: "like" },
  { label: "コメント", value: "comment" },
]

interface Props {
  data: ArticleDataPoint[]
}

export function ArticleTabContent({ data }: Props) {
  const [dataType, setDataType] = useState<Type>("read")
  return (
    <>
      <Container size="lg" mt="xl">
        <SegmentedControl
          value={dataType}
          onChange={(v) => setDataType(v)}
          data={DATA_TYPE_OPTIONS}
          mb="md"
        />
        <ArticleBarChart data={data} type={dataType} />
      </Container>
      <Container size="md" mt="xl">
        <ArticleTable data={data} />
      </Container>
    </>
  )
}
