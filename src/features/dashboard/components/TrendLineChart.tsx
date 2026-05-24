import { LineChart } from "@mantine/charts";
import type { TrendDataPoint } from "../types";

interface Props {
  data: TrendDataPoint[]
}

export function TrendLineChart({ data }: Props) {
  return (
    <>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'read', label: "ビュー",color: 'green.8' },
          { name: 'like', label: "いいね", color: 'pink.6' },
          { name: 'comment', label: "コメント", color: 'gray.6' },
        ]}
        curveType="linear"
      />
    </>
  )
}
