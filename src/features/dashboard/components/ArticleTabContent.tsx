import { Alert, Box, Center, Container, LoadingOverlay, Overlay, SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { ArticleBarChart, type Type } from "./ArticleBarChart";
import { ArticleTable, type SortType } from "./ArticleTable";
import { useArticleData } from "../hooks/useArticleData";

const DATA_TYPE_OPTIONS: { label: string; value: Type }[] = [
  { label: "ビュー", value: "read" },
  { label: "スキ", value: "like" },
  { label: "コメント", value: "comment" },
]

export function ArticleTabContent() {
  const [dataType, setDataType] = useState<Type>("read")
  const { data, isLoading, error } = useArticleData()

  const sortType: SortType = (() => {
    switch (dataType) {
      case "read": 
        return "readDsc"
      case "like":
        return "likeDsc"
      case "comment":
        return "commentDsc"
    }
  })()

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 1 }}
      />
      {error && (
        <Overlay zIndex={1000} color="#fff" backgroundOpacity={0.8} radius="sm">
          <Center h="100%">
            <Alert color="red" title="エラーが発生しました" maw={400}>
              {error}
            </Alert>
          </Center>
        </Overlay>
      )}
      <Container size="lg" mt="xl">
        <SegmentedControl
          value={dataType}
          onChange={(v) => setDataType(v)}
          data={DATA_TYPE_OPTIONS}
          mb="md"
        />
        <ArticleBarChart 
          data={data.toSorted((a, b) => b[dataType] - a[dataType]).slice(0, 10)} 
          type={dataType}
        />
      </Container>
      <Container size="md" mt="xl">
        <ArticleTable data={data} sortType={sortType}/>
      </Container>
    </Box>
  )
}
