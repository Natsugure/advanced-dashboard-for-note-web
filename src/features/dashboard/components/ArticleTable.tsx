import { Table } from "@mantine/core";
import type { ArticleDataPoint } from "../types";
import dayjs from "dayjs";

export type SortType = "readDsc" | "likeDsc" | "commentDsc"
interface Props {
  data: ArticleDataPoint[]
  sortType: SortType
}

export function ArticleTable({ data, sortType }: Props) {
  const sorted = sortData(data, sortType)
  const rows = sorted.map((item, index) => (
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

function sortData(data: ArticleDataPoint[], type: SortType) {
  switch(type) {
    case "readDsc":
      return data.toSorted((a, b) => b.read - a.read)
    case "likeDsc": 
      return data.toSorted((a, b) => b.like - a.like)
    case "commentDsc":
      return data.toSorted((a, b) => b.comment - a.comment)
  }
}