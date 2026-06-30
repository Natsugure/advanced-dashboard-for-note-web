import { Box, Container } from "@mantine/core";
import { TrendLineChart } from "@/features/dashboard/components/TrendLineChart";
import { TrendTable } from "@/features/dashboard/components/TrendTable";
import { mockTrendData } from "../mocks/trendData";

export function DemoTrendTabContent() {
  return (
    <Box>
      <Container size="lg" mt="xl">
        <TrendLineChart data={mockTrendData} />
      </Container>
      <Container size="md" mt="xl">
        <TrendTable data={mockTrendData} />
      </Container>
    </Box>
  )
}
