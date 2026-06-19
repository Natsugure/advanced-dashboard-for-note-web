import { Box, Container, LoadingOverlay, SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { ArticleBarChart, type Type } from "./ArticleBarChart";
import { ArticleTable } from "./ArticleTable";
import { useArticleData } from "../hooks/useArticleData";

const DATA_TYPE_OPTIONS: { label: string; value: Type }[] = [
  { label: "ビュー", value: "read" },
  { label: "スキ", value: "like" },
  { label: "コメント", value: "comment" },
]

export function ArticleTabContent() {
  const [dataType, setDataType] = useState<Type>("read")
  const { data, isLoading } = useArticleData()
  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 1 }}
      />
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
    </Box>
  )
}
