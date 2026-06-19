import { Table } from "@mantine/core";
import type { ArticleDataPoint } from "../types";
import dayjs from "dayjs";

interface Props {
  data: ArticleDataPoint[]
}

export function ArticleTable({ data }: Props) {
  const rows = data.map((item, index) => (
      <Table.Tr key={`${item.publishedAt.valueOf()}_${index}`}>
        <Table.Td>{item.title}</Table.Td>
        <Table.Td>{dayjs(item.publishedAt).format('YYYY/MM/DD HH:mm')}</Table.Td>
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
            <Table.Th>タイトル</Table.Th>
            <Table.Th>投稿日時</Table.Th>
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
