import { Center, NumberFormatter, Pagination, Table } from "@mantine/core";
import type { ArticleDataPoint } from "../types";
import dayjs from "dayjs";
import { useState } from "react";

export type SortType = "readDsc" | "likeDsc" | "commentDsc"
interface Props {
  data: ArticleDataPoint[]
  sortType: SortType
}

export function ArticleTable({ data, sortType }: Props) {
  const [activePage, setPage] = useState(1)
  const chunked = chunk(sortData(data, sortType), 20)
  const rows = (chunked[activePage - 1] ?? []).map((item, index) => (
      <Table.Tr key={`${item.publishedAt.valueOf()}_${index}`}>
        <Table.Td>{item.title}</Table.Td>
        <Table.Td>{dayjs(item.publishedAt).format('YYYY/MM/DD HH:mm')}</Table.Td>
        <Table.Td ta="right"><NumberFormatter value={item.read} thousandSeparator/></Table.Td>
        <Table.Td ta="right"><NumberFormatter value={item.like} thousandSeparator/></Table.Td>
        <Table.Td ta="right"><NumberFormatter value={item.comment} thousandSeparator/></Table.Td>
      </Table.Tr>
    ))

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>タイトル</Table.Th>
            <Table.Th w={140}>投稿日時</Table.Th>
            <Table.Th w={80}>ビュー</Table.Th>
            <Table.Th w={80}>いいね</Table.Th>
            <Table.Th w={80}>コメント</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Center>
        <Pagination 
          mt="sm"
          total={chunked.length} 
          value={activePage} 
          onChange={setPage} 
        />
      </Center>
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

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}