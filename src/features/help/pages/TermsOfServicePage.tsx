import { Anchor, Container, List, Text, Title } from "@mantine/core"

export function TermsOfServicePage() {
  return (
    <Container mt="xl" mb="xl">
      <Title order={1}>利用規約</Title>

      <Title order={2} mt="xl">1. はじめに</Title>
      <Text>
        本利用規約（以下「本規約」といいます）は、なつぐれ（以下「サービス提供者」といいます）が提供するWebサービス及びChrome拡張機能「Advanced Dashboard for note」（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様には、本規約に同意いただいた上で、本サービスをご利用いただきます。
      </Text>

      <Title order={2} mt="xl">2. 本サービスの概要</Title>
      <Text>
        本サービスは、note株式会社様が提供するサービス「note（https://note.com）」にログインしたブラウザセッションを通じてChrome拡張機能が各記事のアクセス状況を取得し、データをユーザーが見やすい形にして提供する非公式のサービスです。
      </Text>

      <Title order={2} mt="xl">3. 本サービスとnoteの関係</Title>
      <Text>
        本サービスはサービス提供者が製作した非公式ファンサービスであり、note株式会社様およびnoteとは一切関係ありません。
      </Text>

      <Title order={2} mt="xl">4. 保証の否認および免責事項</Title>
      <List type="ordered" mt="sm" listStyleType="disc" withPadding>
        <List.Item>
          サービス提供者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
        </List.Item>
        <List.Item>
          サービス提供者は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
        </List.Item>
      </List>

      <Title order={2} mt="xl">5. 禁止事項</Title>
      <Text>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</Text>
      <List type="ordered" mt="sm" listStyleType="disc" withPadding>
        <List.Item>法令または公序良俗に違反する行為</List.Item>
        <List.Item>犯罪行為に関連する行為</List.Item>
        <List.Item>サービス提供者、本サービスの他のユーザー、noteを含む第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</List.Item>
        <List.Item>本サービスの運営を妨害するおそれのある行為</List.Item>
        <List.Item>他のユーザーに関する個人情報等を収集または蓄積する行為</List.Item>
        <List.Item>不正アクセスをし、またはこれを試みる行為</List.Item>
        <List.Item>他のユーザーに成りすます行為</List.Item>
        <List.Item>サービス提供者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</List.Item>
        <List.Item>その他、サービス提供者が不適切と判断する行為</List.Item>
      </List>

      <Title order={2} mt="xl">6. 本サービスの提供の変更・一時停止・停止</Title>
      <Text>
        サービス提供者は、本サービスの一部または全部を、利用者へ事前に通知することなく、いつでも任意の理由で変更・一時停止・終了することができるものとします。
      </Text>

      <Title order={2} mt="xl">7. 利用規約の変更</Title>
      <Text>
        サービス提供者は、利用者の事前の了承を得ることなく、本規約を改定することができ、利用者はそれを承諾するものとします。改定後の利用規約は、本サービスに掲示された時点より効力を発するものとします。
      </Text>

      <Title order={2} mt="xl">8. 個人情報の取扱い</Title>
      <List type="ordered" mt="sm" withPadding>
        <List.Item>
          サービス提供者は、本サービスの利用によって取得する個人情報については、「プライバシーポリシー」に従い適切に取り扱うものとします。
        </List.Item>
        <List.Item>
          本サービスのご使用によって、プライバシーポリシーに同意していただいたものとみなします。
        </List.Item>
      </List>

      <Title order={2} mt="xl">9. 準拠法・裁判管轄</Title>
      <List type="ordered" mt="sm" withPadding>
        <List.Item>本規約の解釈にあたっては、日本法を準拠法とします。</List.Item>
        <List.Item>本サービスに関して紛争が生じた場合には、サービス提供者の本店所在地を管轄する裁判所を専属的合意管轄とします。</List.Item>
      </List>

      <Title order={2} mt="xl">10. お問い合わせ</Title>
      <Text>
        本サービスの利用規約に関する、ご意見、ご質問、苦情の申出その他利用者情報の取扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
      </Text>
      <Anchor mt="sm" display="block" href="https://forms.gle/Tceg32xcH8avj8qy5" target="_blank" rel="noopener noreferrer">
        お問い合わせフォーム
      </Anchor>
    </Container>
  )
}
