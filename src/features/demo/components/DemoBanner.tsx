import { Alert, Button, Group } from "@mantine/core";
import { MdInfo } from "react-icons/md";
import { useNavigate } from "react-router";

export function DemoBanner() {
  const navigate = useNavigate()

  return (
    <Alert
      icon={<MdInfo />}
      color="teal"
      title="サンプルデータを表示中"
    >
      <Group justify="space-between" align="center">
        <span>これはデモ用のサンプルデータです。新規登録すると実際のnote統計データを確認できます。</span>
        <Button size="xs" onClick={() => navigate('/signup')}>
          新規登録（無料）
        </Button>
      </Group>
    </Alert>
  )
}
