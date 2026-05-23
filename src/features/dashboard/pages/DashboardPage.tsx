import { Container, Table, Title } from "@mantine/core"
import { LineChart } from "@mantine/charts";

export function DashboardPage() {
  const data = [
    {
      date: 'Mar 22',
      read: 2890,
      like: 2338,
      comment: 2452,
    },
    {
      date: 'Mar 23',
      read: 2756,
      like: 2103,
      comment: 2402,
    },
    {
      date: 'Mar 24',
      read: 3322,
      like: 986,
      comment: 1821,
    },
    {
      date: 'Mar 25',
      read: 3470,
      like: 2108,
      comment: 2809,
    },
    {
      date: 'Mar 26',
      read: 3129,
      like: 1726,
      comment: 2290,
    },
  ]

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
      <Container size="lg" mt="xl">
        <Title order={2}>ダッシュボード</Title>
        <Container size="lg" mt="xl">
          <LineChart
            h={300}
            data={data}
            dataKey="date"
            series={[
              { name: 'read', color: 'green.8' },
              { name: 'like', color: 'pink.6' },
              { name: 'comment', color: 'gray.6' },
            ]}
            curveType="linear"
          />
        </Container>
        <Container size="md" mt="xl">
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
        </Container>
      </Container>
    </>
  )
}