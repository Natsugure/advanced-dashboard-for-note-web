import { Box, Container, LoadingOverlay } from "@mantine/core"
import { TrendLineChart } from "./TrendLineChart"
import { TrendTable } from "./TrendTable"
import { useTrendData } from "../hooks/useTrendData"

export function TrendTabContent() {
  const { data, isLoading, error } = useTrendData()

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 1 }}
      />
      <Container size="lg" mt="xl">
        <TrendLineChart data={data} />
      </Container>
      <Container size="md" mt="xl">
        <TrendTable data={data} />
      </Container>
    </Box>
  )
}