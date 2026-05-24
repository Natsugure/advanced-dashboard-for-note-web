import { BarChart } from "@mantine/charts"
import type { ArticleDataPoint } from "../types"

interface Props {
  data: ArticleDataPoint[]
}

export function ArticleBarChart({ data }: Props) {
  return (
    <>
      <BarChart
        h={300}
        data={data}
        dataKey="title"
        series={[
          { name: 'read', color: 'green.8' },
          { name: 'like', color: 'pink.6' },
          { name: 'comment', color: 'gray.6' },
        ]}
      />
    </>
  )
}