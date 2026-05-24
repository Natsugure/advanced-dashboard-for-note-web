import { Container } from "@mantine/core"
import type { TrendDataPoint } from "../types"
import { TrendLineChart } from "./TrendLineChart"
import { TrendTable } from "./TrendTable"

interface Props {
  data: TrendDataPoint[]
}

export function TrendTabContent({ data }: Props) {
  return (
    <>
      <Container size="lg" mt="xl">
        <TrendLineChart data={data} />
      </Container>
      <Container size="md" mt="xl">
        <TrendTable data={data} />
      </Container>
    </>
  )
}