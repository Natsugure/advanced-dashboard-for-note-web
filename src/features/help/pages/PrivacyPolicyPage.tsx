import { Anchor, Container, List, Text, Title } from "@mantine/core"

export function PrivacyPolicyPage() {
  return (
    <Container mt="xl" mb="xl">
      <Title order={1}>プライバシーポリシー</Title>

      <Title order={2} mt="xl">1. はじめに</Title>
      <Text>
        なつぐれ（以下「サービス提供者」といいます）は、Webサービス及びChrome拡張機能「Advanced Dashboard for note」（以下「本サービス」といいます）におけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
      </Text>

      <Title order={2} mt="xl">2. 収集する情報</Title>
      <Text>サービス提供者は、本サービスの利用に際して、以下の情報を収集する場合があります：</Text>
      <List type="ordered" mt="sm" listStyleType="disc" withPadding>
        <List.Item>会員登録時に入力されたメールアドレス</List.Item>
        <List.Item>ユーザーが本サービスに登録したnoteアカウント情報</List.Item>
        <List.Item>Chrome拡張機能を通じて、noteにログインしたブラウザセッション経由で取得した記事のアクセス統計データ</List.Item>
        <List.Item>本サービスの利用履歴</List.Item>
        <List.Item>ブラウザ情報（ブラウザの種類、OSのバージョンなど）</List.Item>
        <List.Item>その他本サービスの利用に関連して生成または蓄積された情報</List.Item>
      </List>

      <Title order={2} mt="xl">3. 利用目的</Title>
      <Text>収集した情報は以下の目的で利用します：</Text>
      <List type="ordered" mt="sm" listStyleType="disc" withPadding>
        <List.Item>本サービスのサービス提供・維持・向上</List.Item>
        <List.Item>ユーザーサポート</List.Item>
        <List.Item>本サービスに関する規約等の変更などの重要なお知らせの表示</List.Item>
        <List.Item>不正行為の防止や対応</List.Item>
        <List.Item>その他、上記利用目的に付随する目的</List.Item>
      </List>

      <Title order={2} mt="xl">4. 外部サービスとの連携</Title>
      <Text>
        本サービスのChrome拡張機能は、noteにログインしたブラウザセッションを通じてデータを取得し、サービス提供者のサーバーに送信することでサービスを提供しています。noteのプライバシーポリシーについては、noteの公式サイトをご確認ください。
      </Text>

      <Title order={2} mt="xl">5. 本ポリシーの変更</Title>
      <Text>
        本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本サービス内で掲載したときから効力を生じるものとします。
      </Text>

      <Title order={2} mt="xl">6. お問い合わせ窓口</Title>
      <Text>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</Text>
      <Anchor mt="sm" display="block" href="https://forms.gle/Tceg32xcH8avj8qy5" target="_blank" rel="noopener noreferrer">
        お問い合わせフォーム
      </Anchor>
    </Container>
  )
}
