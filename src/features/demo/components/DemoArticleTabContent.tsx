import { Box, Container, SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { ArticleBarChart, type Type } from "@/features/dashboard/components/ArticleBarChart";
import { ArticleTable, type SortType } from "@/features/dashboard/components/ArticleTable";
import { mockArticleData } from "../mocks/articleData";

const DATA_TYPE_OPTIONS: { label: string; value: Type }[] = [
  { label: "ビュー", value: "read" },
  { label: "スキ", value: "like" },
  { label: "コメント", value: "comment" },
]

export function DemoArticleTabContent() {
  const [dataType, setDataType] = useState<Type>("read")

  const sortType: SortType = (() => {
    switch (dataType) {
      case "read": return "readDsc"
      case "like": return "likeDsc"
      case "comment": return "commentDsc"
    }
  })()

  return (
    <Box>
      <Container size="lg" mt="xl">
        <SegmentedControl
          value={dataType}
          onChange={(v) => setDataType(v)}
          data={DATA_TYPE_OPTIONS}
          mb="md"
        />
        <ArticleBarChart
          data={mockArticleData.toSorted((a, b) => b[dataType] - a[dataType]).slice(0, 10)}
          type={dataType}
        />
      </Container>
      <Container size="md" mt="xl" mb="xl">
        <ArticleTable data={mockArticleData} sortType={sortType} />
      </Container>
    </Box>
  )
}
