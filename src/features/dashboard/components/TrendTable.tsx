import { Table } from "@mantine/core"
import type { TrendDataPoint } from "../types"

interface Props {
  data: TrendDataPoint[]
}

export function TrendTable({ data }: Props) {
  const rows = data.map((item) => (
    <Table.Tr key={item.date}>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>{item.read}</Table.Td>
      <Table.Td>{item.like}</Table.Td>
      <Table.Td>{item.comment}</Table.Td>
    </Table.Tr>
  ))

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>日付</Table.Th>
            <Table.Th>ビュー</Table.Th>
            <Table.Th>いいね</Table.Th>
            <Table.Th>コメント</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  )
}