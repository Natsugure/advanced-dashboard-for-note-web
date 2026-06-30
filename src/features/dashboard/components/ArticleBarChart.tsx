import { BarChart } from "@mantine/charts"
import type { ArticleDataPoint } from "../types"

export type Type = "read" | "like" | "comment"

interface Series {
  name: string
  label: string
  color: string
}

interface Props {
  data: ArticleDataPoint[],
  type: Type
}

export function ArticleBarChart({ data, type }: Props) {
  const series = {
    read: { name: 'read', label: "ビュー",color: 'green.8' },
    like: { name: 'like', label: "いいね", color: 'pink.6' },
    comment: { name: 'comment', label: "コメント", color: 'gray.6' },
  } as const satisfies {
    [key: string]: Series
  }

  return (
    <>
      <BarChart
        h={300}
        orientation="vertical"
        gridAxis="y"
        barProps={{ maxBarSize: 100 }}
        data={data}
        dataKey="title"
        series={[series[type]]}
        yAxisProps={{
          width: 200,
          tickFormatter: (value: string) => value.length > 24 ? `${value.slice(0, 24)}…` : value,
        }}
      />
    </>
  )
}