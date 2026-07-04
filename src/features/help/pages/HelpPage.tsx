import { Box, Button, Container, Image, List, Text, Title } from "@mantine/core"
import { useNavigate } from "react-router";
import { CrxStoreButton } from "../components/CrxStoreButton";

export function HelpPage() {
  const navigate = useNavigate()

  return (
    <>
      <Container mt="xl" mb="xl">
      <Title order={2} mt="lg">このサイトについて</Title>
      <Text>Advanced Dashboard for note は、 ブログサービス note の記事の統計データを集計し、見やすくグラフ化したり、過去のデータを閲覧を容易にする非公式サービスです。</Text>

      <Title order={2} mt="lg">利用に際して</Title>
        <Text>当サイトは非公式ファンサイトであり、note株式会社 および note 公式サービスとは一切関係ありません。</Text>
        <Text>当サイトについて note 公式へ問い合わせることはおやめください。</Text>

        <Title order={2} mt="lg">必須環境</Title>
        <Text>Chrome 拡張機能がインストールできる <Text span fw={700}>PC用ブラウザ</Text> が必須です。</Text>
        <Text>※スマートフォンは今後対応予定です。</Text>
        <Title order={3} mt="md">動作確認済みブラウザ</Title>
        <List listStyleType="disc" withPadding>
          <List.Item>Google Chrome</List.Item>
          <List.Item>Microsoft Edge</List.Item>
          <List.Item>Vivaldi</List.Item>
        </List>

      <Title order={2} mt="xl">使い方</Title>
        <Title order={3} mt="lg">Step 1. Advanced Dashboard for note に会員登録</Title>
        <Text>note のアカウントとは別に、Advanced Dashboard for note に会員登録が必要です。</Text>
        <Button mt="md" onClick={() => {navigate("/signup")}}>新規登録はこちら</Button>

        <Title order={3} mt="lg">Step 2. Chrome 拡張機能をインストール</Title>
        <Text mt={4}>noteから統計を取得するには、Chrome 拡張機能が必要です。</Text>
        <Box mt="md">
          <CrxStoreButton />
        </Box>

        <Title order={3} mt="lg">Step 3. ブラウザで note にログイン</Title>
        <Text>ブラウザの通常タブで、統計を取得したい note のアカウントにログインします。</Text>

        <Title order={3} mt="lg">Step 4. Chrome 拡張機能で、統計取得ボタンをクリック</Title>
        <Text>ブラウザでログインされた note のアカウントを自動認識して、統計がAdvanced Dashboard for note のサーバーに送信されます。</Text>
        <Image
          mt="md"
          h={400}
          w="auto"
          fit="contain"
          bd="1px solid gray.4"
          src="crx_capture_1.png"
        />

      <Title order={2} mt="xl">免責事項</Title>
      <List mt="md" listStyleType="disc" withPadding>
        <List.Item>当サイトの提供するサービスを利用することで生じた損害に対して、当サイトの運営は責任を負いかねます。自己責任でご利用ください。</List.Item>
        <List.Item>表示される統計値は参考データとしてご利用ください。データの正確性は保証いたしかねます。</List.Item>
        <List.Item>サイトを運営する上で不適切と判断されたユーザについて、警告無くアカウントを停止するなどの対策措置を講じる可能性があります。</List.Item>
      </List>
      </Container>
    </>
  )
}